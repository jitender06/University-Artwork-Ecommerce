import React from "react";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";
import { Square3Stack3DIcon, UserCircleIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
import { GalleryImages } from "./GalleryImages";
import { GalleryVideo } from "./GalleryVideo";
 
export function GalleryMainWrapper() {
  const data = [
    {
      label: "Images",
      value: "Images",
      icon: Square3Stack3DIcon,
      desc: <GalleryImages/>,
    },
    {
      label: "Videos",
      value: "Videos",
      icon: UserCircleIcon,
      desc: <GalleryVideo/>,
    }
  ];
  return (
    <Tabs value="Images" className="max-w-[1600px] mx-auto">
      <TabsHeader className="bg-[#a8a8a8] text-white">
        {data.map(({ label, value, icon }) => (
          <Tab key={value} value={value}>
            <div className="flex items-center gap-2">
              {React.createElement(icon, { className: "w-5 h-5" })}
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}