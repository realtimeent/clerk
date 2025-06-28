import { useClerk, useUser, UserButton } from '@clerk/clerk-react'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const { openSignIn } = useClerk()
  const { user } = useUser()
  return (
    <div className='flex items-center justify-between p-4 md:p-8'>
      <Link to='/' className='font-bold capitalize'>
        auth
      </Link>

      {user ? (
        <UserButton />
      ) : (
        <button
          onClick={() => openSignIn()}
          className='text-sm font-semibold px-4 py-0.5 rounded-md border border-gray-600 cursor-pointer text-gray-700'
        >
          signin
        </button>
      )}
    </div>
  )
}

export default NavBar
