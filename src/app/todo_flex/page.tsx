'use client'
import Input from '../components/input'
//import Button from './components/button'

import Box from '../components/box';
import { useState } from 'react';

function Todo_flex() {
const [todos, setTodos] = useState<Array<{ item: any; time: string }>>([]);
const removeToDo = (id:any)=>{
// console.log(id);
const newList:{item:any; time:string}[]= todos.filter((_,index)=> index !== id);
setTodos(newList);

};
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
    
    <div className='flex container h-screen w-full flex-row justify-center bg-indigo-200'>
      {/* Div Class Left Side */}
      <div className='w-[40%] border-2 px-3 py-5 mt-4  rounded shadow-2xl' >
       <h1 className='font-bold flex justify-center  items-center'> Todo App </h1>
       <p className='flex-col '>This is the Todo App which will work as 
        to add Task.
        <ul className='list-disc font-bold mr-10 px-10 '>
          <li>Create New Task</li>
          <li>Delete Task</li>
          <li>Mark As Completed</li>
          <li>Edit the Task</li>
        </ul>
       </p>
      </div>
      
      {/* Div Class Right Side */}
      <div className='w-[40%] border-2 py-5 mt-4 justify-around bg-slate-400 shadow-2xl'>
        
        <div className=' flex justif-between'>
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

export default Todo_flex;