import express from 'express'
import {createPost, deletePost, getPost, getPostById, updatePost} from '../Controllers/postController.js'
import protect from '../Middleware/authMiddleware.js'

const router = express.Router()

router.get('/', protect, getPost)
router.get('/:id', protect, getPostById)
router.post('/create', protect, createPost)
router.get('/delete/:id', protect, deletePost)
router.put('/update/:id', protect, updatePost)


export default router