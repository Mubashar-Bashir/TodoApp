'use client'
import React, { useState } from 'react';
import Box from '../components/box';
import Input from '../components/input';

const ToDO_grid = () => {
  const [todos, setTodos] = useState<Array<{ item: any; time: string }>>([]);
  const removeToDo = (id:any)=>{
  console.log(id);
  let newList:{item:any; time:string}[]= todos.filter((d:any,index)=>
  {
    if(index! == id)
    {
      return true;
    }
    else
      return false;
  })
  setTimeout(()=>setTodos([...newList]),1000);
  
  }
  const addToDoHandler = (item:any)=>{
  // console.log(item);
    setTodos(
    [
      ...todos,
      {
        item,
        time: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
      }
    ]
  )
  }
  return (
      <>
      
      <div className='container grid-cols-2 min-h-screen gap-x-4  grid bg-indigo-200 '>
        
        <div className=' border-4 px-10 py-5 mt-4 justif-start rounded shadow-3xl' >
         <h1 className='font-bold flex justify-center  items-center'> Todo App </h1>
         <p className=''>This is the Todo App which will work as 
          to add Task.
          <ul className='list-disc font-bold '>
            <li>Create New Task</li>
            <li>Delete Task</li>
            <li>Mark As Completed</li>
            <li>Edit the Task</li>
          </ul>
         </p>
        </div>
        
        
        <div className=' border-4 py-5 mt-4 justify-between bg-slate-400 shadow-2xl'>
          
          <div className=' justify-between'>
            <Input handler={addToDoHandler} /> 
            {/* <Button /> */}
          </div>
             <div className=' mt-5 min-h-screen rounded'>
             <Box data={todos} removehandler={removeToDo}/>      
             </div>
              
        </div>
        
      </div>
      </>
    )
  }
  
export default ToDO_grid;
 