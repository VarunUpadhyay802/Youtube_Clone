import React, { useEffect, useState } from 'react'
import { MOST_POPULAR_VID_YT_API } from "./utils/constants"
import VideoCard from './VideoCard'
import { Link, } from 'react-router-dom'
const VideoContainer = () => {
  
  const [VidoesList, setVidoesList] = useState([])
  useEffect(() => {
    getVideos()
  }, [])
  async function getVideos() {
    const data = await fetch(MOST_POPULAR_VID_YT_API);
    const response = await data.json();
    setVidoesList(response?.items)
    // const VidoesList =response?.items
    console.log(response.items[0])

  }
  return (
    <div className='flex flex-wrap '>


      {VidoesList.map((item) => <Link to={"/watch?v=" + item.id}
      ><VideoCard key={item.id}
        {...item} /></Link>)}
    </div>
  )
}

export default VideoContainer
