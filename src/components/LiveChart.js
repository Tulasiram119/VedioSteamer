import React, { useEffect } from 'react'
import ChartMessage from './ChartMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chartSlice';

const LiveChart = () => {
    const chat = useSelector(store => store.chat.messages)
    const dispatch = useDispatch();
    // useEffect(()=>{
    //     const interval = setInterval(()=>{
    //         //APi pooling
    //         dispatch(addMessage({
    //             name:"tulasiram",
    //             message:"This is sample message"
    //         }))
    //     },2000)


    //     return ()=>{
    //         clearInterval(interval);
    //     }
    // },[])
    
  return (
    <>
    <div className='overflow-y-scroll'>
      
        {chat.map((message)=> <ChartMessage name={message.name} message={message.message}/>)}
        </div>
        <form>
          {/* <input /> this i sto write our own images */}
        </form>
    
    </>
  )
}

export default LiveChart