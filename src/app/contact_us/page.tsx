import React from 'react'

const Contact_us = () => {
  const user_name='Mubashar Bashir'
  const user_id='PIAIC1234'
  const user_Quarter='Q2'
  const user_Email='mubashar_bashir003@gmail.com'
  const user_specialization='Full Stack Developer, React, NextJS, Gen-AI'
  return (
    <>
    <div className='flex justify-center '>
    
    <div className='flex '>
       
      <form action="active" className='flex-col justify-center items-center border border-4px shadow-5xl'>
      <h1 className='text-center text-5xl font-bold bg-slate-500 flex justify-center'>User Information: </h1><br />
        <table>
          <tr>
          <td>
          <label className='font-bold text-1xl'>Name:</label> {user_name} 
          </td> 
          <td className='mr-10px'>
          <label className="font-bold text-1xl">&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;Quarter :</label> &nbsp;   &nbsp;&nbsp;&nbsp; {user_Quarter}
          </td>
          </tr>
          <td></td>
        </table>
        
        
        <br />
        ID : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{user_id}:&nbsp;
        Email : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{user_Email}
        <br /><br />
        Specialization : &nbsp; {user_specialization}
        
      </form>
      </div>
    </div>
    </>
  )
}

export default Contact_us;