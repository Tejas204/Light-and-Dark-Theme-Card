import React from 'react'
import { useState } from 'react';

const LightDarkButton = ({setTheme, theme}) => {

  // Hook: Set light theme or dark theme
//   const[theme, setTheme] = useState('light');

 // Function: handle light theme setting
 const handleLightTheme = () => {
    setTheme('light');
 }

 // Function: handle dark theme setting
 const handleDarkTheme = () => {
    setTheme('dark');
 }

  return (
    <div className='flex justify-center items-center space-x-4'>
        <button className='p-3 border-2 border-[#000000] rounded-lg font-medium bg-[#E4E6EB]' onClick={handleLightTheme}>Light Mode</button>
        <button className='p-3 border-2 border-[#a955f7] rounded-lg font-medium bg-[#a955f7] text-[#FFFFFF]' onClick={handleDarkTheme}>Dark Mode</button>
    </div>
  )
}

export default LightDarkButton