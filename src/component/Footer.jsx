import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-800 text-white flex flex-col  justify-center items-center fixed-botto w-full'>
            <div className="logo font-bold   text-2xl">
                <span className='text-green-500'>&lt;</span>
                PASS
                <span className='text-green-500'>OP&gt;</span>
            </div>

            <div className='flex text-black font-bold'>
                Created with...<img className=' w-10  h-10' src='icons/heart.webp' />... by CODE-ERA
            </div>
        </div>
    )
}

export default Footer
