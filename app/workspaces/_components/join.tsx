import { Button } from '@nextui-org/react'
import { CircleCheck } from 'lucide-react'
import React from 'react'

export default function Join() {
  return (
    <div>
        
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
 
        <p className='text-sm '>We see that some one has invited you to</p>
        <h1 className='mt-3 text-md font-bold'>Join a workspace</h1>
        <div className='flex border w-50 items-left mt-2 p-2'>
       
        <Button className=' bg-black w-10 h-10 text-white '>F</Button>
       
         <div className='ml-2'>
          <p className=' text-sm font-bold' >First_project</p>
          <p className='text-sm' >Member</p>
        </div>
        <CircleCheck className='mt-2 ml-auto' />
        </div>
         <div>
        <button className="bg-blue-500 text-white px-1 py-1 rounded text-sm mt-4 p-2">
            Accept & Join
          </button>
          <button className="bg-white text-black border ml-4 px-1 py-1 rounded text-sm mt-4 p-2">
           Go Home
          </button>
          </div>
        
        

      </div>

   
     

    </div>
  )
}