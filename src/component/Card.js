import React from 'react'
import LightDarkButton from './LightDarkButton'

const Card = ({setTheme, theme}) => {
  return (
    // Card layout
    <div className='flex flex-col gap-y-4 h-screen justify-center items-center'>
        <div className='flex flex-col gap-y-8 items-center p-5 md:p-10 w-3/4 lg:w-2/4 xl:w-1/4 border-2 rounded-xl shadow-md'>
            <p className='text-md md:text-xl lg:text-2xl font-bold'>
                Card
            </p>
            <p className='text-sm md:text-md lg:text-lg text-justify'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            </p>
            <button className={`text-sm md:text-md lg:text-lg border-2 rounded-lg p-3 font-bold text-bg-light-color bg-border-dark-color border-border-dark-color`}>
                Submit
            </button>
        </div>

    {/* Button Layout */}
    <LightDarkButton setTheme={setTheme} theme={theme}></LightDarkButton>

    </div>
  )
}

export default Card