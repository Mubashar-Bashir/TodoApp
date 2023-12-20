'use client'
import React,  { Component,useRef,useEffect } from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';


function Input(props: any) 
{
    const inputBox = useRef<HTMLInputElement>(null);
  
    useEffect(() => {
        // Focus on the input element when the component mounts
        inputBox.current?.focus();
      }, []); // The empty dependency array ensures this effect runs only once after the initial render
    
    const handleButtonClick = () => {
        handleAction();
      };
    
      const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
          handleAction();
        }
      };
    
      const handleAction = () => {
        // Use optional chaining to safely access inputBox.current.value
        const inputValue = inputBox.current?.value;
    
        // Check if inputValue is not undefined or null before proceeding
        if (inputValue !== undefined && inputValue !== null && inputValue !== null && inputValue !== '') {
          props.handler(inputValue);
        }
    
        // Clear the input field after the action is performed, if needed
        if (inputBox.current) {
          inputBox.current.value = '';
        }
      };
    
  
    return (
      <div className='ml-1 flex'>
        <input
          type="text"        
          ref={inputBox}
          placeholder='Task to add ToDo...!!!'
          className='p-2 w-[90%] border border-slate-500 focus:outline-none'
          onKeyDown={handleInputKeyDown}
        />
        <div className='cursor-pointer flex w-[50px] h-[50px] text-white  item-center'>
          <button
                className=' w-[50] h-[50] text-black-bold text-5xl flex justify-center  items-center' 
                onClick={handleButtonClick}
                >
                  <IoIosAddCircleOutline className='bg-rose-600 p-2 rounded-[70%]  border border-5px flex-between' />
                 </button> 
        </div>
    </div>
  );
}

export default Input;
