import React from 'react'

const Card = () => {
  return (
    <div className='flex h-screen justify-center items-center'>
        <div className='flex flex-col gap-y-4 items-center p-10 w-1/4 border-2'>
            <p>
                Card
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button>
                Submit
            </button>
        </div>
    </div>
  )
}

export default Card