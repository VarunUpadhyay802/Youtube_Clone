import React from 'react'

const VideoCard = ({ snippet, contentDetails }) => {
    return (
        <div className='w-64 m-2 p-2 rounded-lg '>
            <div className=' '>
                <img src={snippet?.thumbnails?.high?.url} alt='yt-video' className='rounded-lg' />
                {/* <h1>{contentDetails.duration}</h1> */}
            </div>
            <div>
                {/* <div><img src='' alt='channel' /></div> */}
                <div><h1 className='font-bold font-mono'>{snippet.title}</h1></div>
            </div>


        </div>
    )
}

export default VideoCard
