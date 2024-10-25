import CardVideo from './CardVideo';
import video1 from '../../../../assets/Videos/video1.mp4';
import video2 from '../../../../assets/Videos/video2.mp4';
import video3 from '../../../../assets/Videos/video3.mp4';
import video4 from '../../../../assets/Videos/video4.mp4';

import back1 from '../../../../assets/back1.png';
import back2 from '../../../../assets/back2.png';
import back3 from '../../../../assets/back3.png';
import back4 from '../../../../assets/back4.png';


const features = [
  { name: 'Origin', description: 'Where It All Begins: Discover the inspiration and story behind each piece, from its cultural roots to the artistic vision that brought it to life.' },
  { name: 'Material', description: 'Crafted with Care: Learn about the unique materials and tools used, carefully chosen to enhance the quality and longevity of each artwork.' },
  { name: 'Dimensions', description: 'Sized for Every Space: We provide exact measurements to help you envision how each piece will look in your space, from small accents to statement pieces.' },
  { name: 'Finish', description: 'The Final Touch: Every artwork receives a professional finish, whether it’s a vibrant polish, a matte texture, or a protective coating to preserve its beauty.' },
  { name: 'Includes', description: 'What’s in the Package: Each purchase includes essential details like hanging hardware, certification of authenticity, or artist’s note for a complete experience.' },
  { name: 'Considerations', description: 'Caring for Your Art: Tips on maintaining the quality of your artwork, from cleaning to environmental considerations, ensuring it remains beautiful for years.' },
]

export default function ProductFeature() {
  return (
    <div className="bg-white dark:bg-[#222]">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-[1700px] lg:grid-cols-2 lg:px-8">
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <CardVideo video={video1} back={back1} />
          <CardVideo video={video2} back={back2} />
          <CardVideo video={video3} back={back3} />
          <CardVideo video={video4} back={back4} />
        </div>
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">Behind the Art: Our Creative Process</h2>
          <p className="mt-4 text-gray-500">
            Experience the journey from concept to masterpiece. In this section, we unveil the artistry behind each creation, showcasing the techniques, materials, and unique touch that make our paintings, sculptures, and drawings one-of-a-kind. Dive into the details that bring our artwork to life, as we walk you through each step in crafting these timeless pieces.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900 dark:text-white">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
