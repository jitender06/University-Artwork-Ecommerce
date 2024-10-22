import React from 'react'
import FramePaintings from './FramePaintings'

export default function Sculpture() {
    const paintings = [
        {
            source: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg/687px-Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg"
        },
        
    ]
  return (
    <>
     <div className="h-full relative flex flex-wrap py-9 px-4 md:px-14 gap-10 mx-auto items-center justify-center">
        {/* {
            paintings?.map((item) => (
                <FramePaintings source={item?.source}/>
            ))
        } */}
     </div>
    </>
  )
}
