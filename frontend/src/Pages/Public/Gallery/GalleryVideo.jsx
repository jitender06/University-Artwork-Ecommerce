import React from "react";

export function GalleryVideo() {
    const data = [
        {
            imgelink: "https://docs.material-tailwind.com/demo.mp4",
        },
        {
            imgelink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        },
        {
            imgelink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        },
    ];

    const [active, setActive] = React.useState(
        "https://docs.material-tailwind.com/demo.mp4"
    );
    console.log(active,"::SDs655")
    return (
        <div className="grid gap-4">
            <div>
                <video  key={active} className="h-full w-full rounded-lg" controls>
                    <source src={active} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="grid grid-cols-9 gap-4">
                {data.map(({ imgelink }, index) => (
                    <div key={index} onClick={() => setActive(imgelink)} className="cursor-pointer">
                        <video  className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center">
                            <source src={imgelink} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                ))}
            </div>
        </div>
    );
}
