import React from "react";
import video1 from '../../../assets/Videos/video1.mp4';
import video2 from '../../../assets/Videos/video2.mp4';
import video3 from '../../../assets/Videos/video3.mp4';
import video4 from '../../../assets/Videos/video4.mp4';


export function GalleryVideo() {
    const data = [
        {
            imgelink: video1,
        },
        {
            imgelink: video2,
        },
        {
            imgelink: video3,
        },
        {
            imgelink: video4,
        }
    ];

    const [active, setActive] = React.useState(video1);
    return (
        <div className="grid gap-4">
            <div>
                <video key={active} className="h-[500px] w-full rounded-lg" controls autoPlay>
                    <source src={active} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="grid grid-cols-9 gap-4">
                {data.map(({ imgelink }, index) => (
                    <div key={index} onClick={() => setActive(imgelink)} className="cursor-pointer">
                        <video  className="h-20 w-32 max-w-full cursor-pointer rounded-lg object-cover object-center">
                            <source src={imgelink} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                ))}
            </div>
        </div>
    );
}
