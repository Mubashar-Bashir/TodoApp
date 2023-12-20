import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import TODO_IMAGE from 'public/TODO_IMAGE.gif'
const Header = () => {
  return (
    <>
    <div className="flex justify-center px-4 bg-sky-600">
    <Link href={"./"} >
            <Image src={TODO_IMAGE} alt={'Logo'}
             className='self-start'
             width={100} height={60}/>
      </Link>
      <div className='Menue bg-sky-600 px-5 py-3 flex gap-5 justify-around rounded '>
          
          <Link className='active' href={'/'}>Home</Link>
          <Link href={'/todo_flex'}>Todo App(FLEX)</Link>
          <Link href={'/todo_grid'}>Todo App(GRID)</Link>
          <Link href={'/contact_us'}>Contact Us</Link>
      </div>
      
    </div>
          </>
  )
}

export default Header