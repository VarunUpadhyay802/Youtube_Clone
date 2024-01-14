import React from 'react'
import { toggleMenu } from './utils/appSlice'
import { useDispatch } from 'react-redux'
const Head = () => {
    const dispatch =useDispatch();
    const toggleMenuHandler=()=>{
        //intereseting thing: you don't have to pass anyting to togglemenue because
        //if u go to the slice you can see that it doesn't have any payload it only has state
         dispatch(toggleMenu())
    }
    return ( 
        <>
            <div className='grid grid-flow-col shadow-lg p-5'>
                <div className='flex col-span-1 gap-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" 
                        onClick={()=>toggleMenuHandler()}/>
                    </svg>
                    <div className='flex'>
                    <img width="32" height="32" src="https://img.icons8.com/color/48/youtube-play.png" 
                    alt="youtube-play"
                    className='text-wrap'
                     />
                     <h1 className='font-bold text-lg'>Youtube</h1>
                    </div>
                </div>
                <div className='flex col-span-10 border w-96  rounded-full  mx-auto text-center bg-gray-100'>
                    <input type='text' className='mx-2 w-80' placeholder='Search' />
                    <img className="bg-gray-100"width="25" height="25" src="https://img.icons8.com/ios/50/search--v1.png" alt="search--v1"/>
                </div>
                <div className='col-span-1'>
                    <img width="30" height="30" src="https://img.icons8.com/windows/32/user-male-circle.png" alt="user-male-circle" />
                </div>
            </div>

        </>
    )
}

export default Head