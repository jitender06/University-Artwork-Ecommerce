import { Button } from '@material-tailwind/react'
import React from 'react'

export default function HeroBody() {
    return (
        <div
            className="p-[20px] md:py-10 max-w-[1700px] mx-auto flex flex-col gap-y-10 lg:flex-row items-center gap-x-10 justify-between dark:bg-[#222]">
            <div className="lg:w-[650px] lg:px-5 flex flex-col gap-y-5">
                <h1
                    className="text-4xl md:text-5xl xl:text-[50px] leading-[1.2] md:max-w-xl md:mx-auto md:text-center lg:text-left lg:mx-0 lg:max-w-full font-semibold dark:text-white">
                    Discover the power of streamlined services
                </h1>
                <p className="text-sm md:max-w-xl md:mx-auto lg:mx-0 lg:max-w-full md:text-center lg:text-left dark:text-gray-300">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur ut ab temporibus? Quidem eveniet praesentium enim dolores magni dolore obcaecati, itaque iure est, modi nam eaque repellat a deserunt. Quam perspiciatis saepe officia repellendus quibusdam quod eius, nemo quos. Blanditiis earum sed consectetur rerum odio beatae aut iusto, magni voluptates!
                </p>
                <div className="flex gap-x-5 flex-col gap-y-2.5 lg:flex-row">
                    <Button variant="outlined" size="sm" color="blue-gray" style={{width:"auto"}}>
                        Get Started
                    </Button>
                    <Button variant="gradient" size="sm" style={{width:"auto"}}>
                        Learn More
                    </Button>
                </div>
            </div>
            <div className="hero-image md:px-5 lg:px-0 w-full lg:w-1/2 rounded-3xl md:pt-2 lg:pt-0 relative isolate z-10">
                <img className="rounded-3xl w-full"
                    src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8c2VydmljZXxlbnwwfDB8fHwxNzEyMjIyNjQ3fDA&ixlib=rb-4.0.3&q=80&w=1080"
                    alt="" />
            </div>
        </div>
    )
}
