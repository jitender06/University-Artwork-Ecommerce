import React from 'react'
import ArtworkStore from '../ArtworkStore'

export default function Drawing() {

    return (
        <>
            <div className="h-full relative flex flex-wrap pb-9 px-4 md:px-14 gap-10 mx-auto items-center justify-center">
                <ArtworkStore cate={"drawing"} />
            </div>
        </>
    )
}
