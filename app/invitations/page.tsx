import React from 'react'
import { Navbar } from '@/components/navbar';
import EmptyStatePage from '@/components/modal/empty-state';

/*
  Author: Ridhwan on May 30th, 2024
  Purpose: Renders a page for displaying invitations to workspaces
  Props: None
*/

const Invitations = () => {
  return (
    <div className='h-full w-full'>
        <div className='h-full w-full'>
            <Navbar email='user@gmail.com' />
            <div className="absolute top-[60px] left-20 bottom-0 border border-gray-200"></div>
          <EmptyStatePage
              title="No pending invites" 
              description="You can see here if someone invites you to a workspace."
              imgsrc="/images/invitation.svg"
              btntext="Back to home"
              linkpath="/workspaces/test/"
        />
        </div>
    </div>
  )
}
export default Invitations;
