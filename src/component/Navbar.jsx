import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-slate-600 rounded-lg text-white '>
            <div className="mycontainer flex justify-between items-center  py-8 h-10">

            <div className="logo font-bold   text-2xl">
                <span className='text-green-500'>&lt;</span>
                PASS
                <span className='text-green-500'>OP&gt;</span>
                </div>
            
            <button className='bg-green-400 flex p-1 rounded-full font-bold justify-between items-center'>
                <img className=' w-10 rounded-full' src="icons/github.svg" alt="" />Github
            </button>
            </div>

        </div>
    )
}

export default Navbar
