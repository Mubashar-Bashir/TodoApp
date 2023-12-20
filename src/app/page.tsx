// 'use client'
// import Input from './components/input'
// //import Button from './components/button'

// import Box from './components/box';
// import { useState } from 'react';

// export default function Home() {
// const [todos, setTodos] = useState<Array<{ item: any; time: string }>>([]);
// const removeToDo = (id:any)=>{
// console.log(id);
// let newList:{item:any; time:string}[]= todos.filter((d:any,index)=>
// {
//   if(index! == id)
//   {
//     return true;
//   }
//   else
//     return false;
// })
// setTimeout(()=>setTodos([...newList]),1000);

// }
// const addToDoHandler = (item:any)=>{
// // console.log(item);
//   setTodos(
//   [
//     ...todos,
//     {
//       item,
//       time: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
//     }
//   ]
// )
// }
// return (
//     <>
    
//     <div className='flex h-screen flex-row justify-center bg-indigo-200'>
      
//       <span className='w-[30%] border-2 px-3 py-5 mt-4  rounded shadow-2xl' >
//        <h1 className='font-bold flex justify-center  items-center'> Todo App </h1>
//        <p className=''>This is the Todo App which will work as 
//         to add Task.
//         <ul className='list-disc font-bold '>
//           <li>Create New Task</li>
//           <li>Delete Task</li>
//           <li>Mark As Completed</li>
//           <li>Edit the Task</li>
//         </ul>
//        </p>
//       </span>
      
      
//       <span className='w-[30%] border-2 py-5 mt-4 justify-around bg-slate-400 shadow-2xl'>
        
//         <div className=' flex justif-between'>
//           <Input handler={addToDoHandler} /> 
//           {/* <Button /> */}
//         </div>
//             <Box data={todos} removehandler={removeToDo}/>      
//       </span>
      
//     </div>
//     </>
//   )
// }

import React from 'react'
import Todo_flex from './todo_flex/page';

const page = () => {
  return (
    <>
    <Todo_flex />
    </>
  );
}


export default page;