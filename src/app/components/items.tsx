'use client'
import React, { useState } from 'react'
import { CiEdit } from 'react-icons/ci'
import { RiDeleteBin6Line } from 'react-icons/ri'


export default function Items(props:any) 
{
    const [done,setDone] = useState(false);
    
    const removehandler = (id:any)=>{
      //console.log(typeof removehandler);
      props.removehandler(id);
      if(id !== props.index)
      {return true;}
      else{
        return false;
      };
}

    const editHandler = (id:any)=>{
      console.log(typeof editHandler,id);
      
    }
  return (
    <>
    <div onClick={()=> setDone(!done)} className={`select-none cursor-pointer w-full mb-2 border-b-2 flex justify-between `}>
        <div className='flex-wrap'>
            <span className='pr-2  text-[14px] text-slate-400 flex items-center '>
                {props.time}
            </span>
            <span className={`${done === true ? 'line-through':" "}`}>
                {props.item}
            </span>
        </div>
        <div className='flex justify-end'> 
            <CiEdit onClick={()=>editHandler(props.id)} className='mr-5 text-[#14532d]'  /> 
          <RiDeleteBin6Line onClick={()=>removehandler(props.id)} className='text-[#dc2626]'/>
          </div>
    </div>
    </>
  )
}
