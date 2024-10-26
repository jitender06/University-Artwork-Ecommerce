import React from "react";
import video1 from '../../../assets/Videos/video1.mp4';
import video2 from '../../../assets/Videos/video2.mp4';
import video3 from '../../../assets/Videos/video3.mp4';
import video4 from '../../../assets/Videos/video4.mp4';
import newvideo1 from '../../../assets/Videos/newvideo1.mp4';
import newvideo2 from '../../../assets/Videos/newvideo2.mp4';
import newvideo3 from '../../../assets/Videos/newvideo3.mp4';


import newvideo4 from '../../../assets/Videos/newvideo4.mp4';
import newvideo5 from '../../../assets/Videos/newvideo5.mp4';
import newvideo6 from '../../../assets/Videos/newvideo6.mp4';
import newvideo7 from '../../../assets/Videos/newvideo7.mp4';


import newvideo8 from '../../../assets/Videos/newvideo8.mp4';
import newvideo9 from '../../../assets/Videos/newvideo9.mp4';

import newvid1 from '../../../assets/Videos/newvid1.mp4'
import newvid2 from '../../../assets/Videos/newvid2.mp4'


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
        },
        {
            imgelink: newvideo1,
        },
        {
            imgelink: newvideo2,
        },
        {
            imgelink: newvideo3,
        },
        {
            imgelink: newvideo4,
        },
        {
            imgelink: newvideo5,
        },
        {
            imgelink: newvideo6,
        },
        {
            imgelink: newvideo7,
        },
        {
            imgelink: newvideo8,
        },
        {
            imgelink: newvideo9,
        },
        {
            imgelink: newvid1,
        },
        {
            imgelink: newvid2,
        }
    ];

    const [active, setActive] = React.useState(video1);
    return (
        <div className="grid gap-4">
            <div>
                <video key={active} className="h-[500px] w-full rounded-lg" controls>
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
