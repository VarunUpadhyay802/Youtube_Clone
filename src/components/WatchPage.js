import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from './utils/appSlice'
import { useParams } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom';
const WatchPage = () => {
  const [videoId] = useSearchParams()

  console.log(videoId.get("v"));
  const dispatch = useDispatch()
  useEffect(() => {
    //initially you just though that ok ,you dispatched the toggle menu in the head so you willd do it again, 
    //but think it like this that you don't want toggle right, you just want that whwen i go to watch page it should just
    //close as default, so we have to make one more action to just closemenu
    dispatch(closeMenu(true))
  }, [])
  return (
    <>
      <iframe width="860" height="500"
        className='p-7 rounded-[35px]'
        src={"https://www.youtube.com/embed/" + videoId.get("v")}
        title="YouTube video player" frameBorder="5" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    </>
  )
}

export default WatchPage
