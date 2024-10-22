import Post from "../Models/post.model.js"
import User from "../Models/user.model.js";
import Category from '../Models/category.model.js'
import Tag from '../Models/tag.model.js'

const createPost = async (req, res) => {
    const { title, content, category, tags } = req.body;
    try {
        const user = await User.findById(req.user._id);

        // Find or create category by name
        let foundCategory = await Category.findOne({ name: category });
        if (!foundCategory) {
            foundCategory = new Category({ name: category });
            await foundCategory.save();
        }

        // Create a new post
        const post = new Post({
            title,
            content,
            author: user._id,
            category: foundCategory._id // Category ObjectId
        });
        if (tags && tags.length > 0) {
            for (let tagName of tags) {
                let foundTag = await Tag.findOne({ name: tagName });
                if (!foundTag) {
                    foundTag = new Tag({ name: tagName });
                    await foundTag.save();
                }
                // Add the tag to the post's tags array
                post.tags.push(foundTag._id);

                // Add the post to the tag's posts array
                foundTag.posts.push(post._id);
                await foundTag.save();
            }
        }

        // Save the post
        const savedPost = await post.save();

        // Add the post to the user's post array
        user.posts.push(savedPost._id);
        await user.save();

        //Add the post to the category
        foundCategory.posts.push(savedPost._id)
        await foundCategory.save();

        res.status(201).json({ message: "post created successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message })
        console.log(error)
    }
}

const getPost = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    try {
        const posts = await Post.find()
            .populate('author', 'name email')
            .populate('category', 'name')
            .populate('tags', 'name')
            .limit(limit * 1) // Limit the number of posts per page
            .skip((page - 1) * limit) // Skip posts to implement pagination
            .sort({ createdAt: -1 }); // Sort by creation date (most recent first)

        const count = await Post.countDocuments();

        res.status(200).json({
            posts,
            totalPages: Math.ceil(count / limit),
            currentPage: Number(page),
            totalData: count
        });

    } catch (error) {
        res.status(500).json({ error: error.message })
        console.log(error)
    }
}

const getPostById = async (req, res) => {
    const { id } = req.params;
    console.log(id, "::SDS<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>")
    try {
        const post = await Post.findById(id)
            .populate('author', 'name, email')
            .populate('category', 'name')
            .populate('tags', 'name')
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json(post)

    } catch (error) {
        res.status(500).json({ message: 'Error retrieving post', error });
        console.log(error)
    }
}

const deletePost = async (req, res) => {
    const { id } = req.params
    try {
        let postDelete = await Post.findByIdAndDelete(id)
        if (!postDelete) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json({ message: 'Post deleted successfully', postDelete });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting post', error });
        console.log(error)
    }
}

const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, content, category, tags } = req.body;

    try {
        // 1. Find the existing post
        let post = await Post.findById(id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        // 2. Handle Category
        let categoryObj = await Category.findOne({ name: category });
        if (!categoryObj) {
            categoryObj = await Category.create({ name: category });
        }

        // 3. Handle Tags: Find or create new tags
        let tagIds = [];
        for (let tagName of tags) {
            let tag = await Tag.findOne({ name: tagName });
            if (!tag) {
                tag = await Tag.create({ name: tagName });
            }
            tagIds.push(tag._id);
        }

        // 4. Remove the post from any tags that are no longer associated
        const previousTags = post.tags.map(tag => tag.toString()); // Old tag IDs
        const removedTags = previousTags.filter(tagId => !tagIds.includes(tagId)); // Tags that are removed
        if (removedTags.length > 0) {
            await Tag.updateMany(
                { _id: { $in: removedTags } },
                { $pull: { posts: post._id } } // Remove post from old tags
            );
        }

        // 5. Add the post to any new tags that are added
        const newTags = tagIds.filter(tagId => !previousTags.includes(tagId));
        if (newTags.length > 0) {
            await Tag.updateMany(
                { _id: { $in: newTags } },
                { $addToSet: { posts: post._id } } // Add post to new tags
            );
        }

        // 6. Handle Category update (only if it changed)
        if (post.category.toString() !== categoryObj._id.toString()) {
            await Category.updateOne(
                { _id: post.category },
                { $pull: { posts: post._id } } // Remove post from old category
            );
            await Category.updateOne(
                { _id: categoryObj._id },
                { $addToSet: { posts: post._id } } // Add post to new category
            );
        }

        // 7. Update the post with new data
        post = await Post.findByIdAndUpdate(
            id,
            {
                title,
                content,
                category: categoryObj._id,
                tags: tagIds,
            },
            { new: true, runValidators: true }
        );

        res.status(200).json({ message: 'Post updated successfully', post });
    } catch (error) {
        res.status(500).json({ message: 'Error updating post', error });
    }
};


export { createPost, getPost, getPostById, deletePost, updatePost }