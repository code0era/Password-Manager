import React from 'react'
import { useRef } from 'react';
import { useState, useEffect } from 'react';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
const Manager = () => {
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const ref = useRef()
    const passwordRef = useRef()
    const [passwordArray, setPasswordArray] = useState([])

    useEffect(() => {

        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))

        }
    }, [])

    const showPassword = () => {
        passwordRef.current.type = "text"
        console.log(ref.current.src)
        if (ref.current.src.includes("icons/hidden.png")) {
            ref.current.src = "icons/eye.png"
            passwordRef.current.type = "text"
        }
        else {

            ref.current.src = "icons/hidden.png"
            passwordRef.current.type = "password"

        }

    }

    const savePassword = () => {
        if(form.site.length>3 && form.username.length>3 && form.password.length>3){

            setPasswordArray([...passwordArray, { ...form, id: uuidv4() }])
            localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
            console.log([...passwordArray, { ...form, id: uuidv4() }])
            setform({ site: "", username: "", password: "" })
            toast('Password Saved 🔐');
        }
        else{
            toast("Error: Cann't save, Invalid site or username or  password");
        }
    }
    const editPassword = (id) => {
        console.log("Editing password with id :", id)
        setform(passwordArray.filter(i=>i.id===id)[0])
        setPasswordArray(passwordArray.filter(item=>item.id!==id))

    }
    const deletePassword = (id) => {
        console.log("Deleting password with id :", id)
        let c = confirm("Do you want to detele this password?")
        if(c){
            setPasswordArray(passwordArray.filter(item=>item.id!==id))
            localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item=>item.id!==IDBRequest)))
        }
        toast('Password Deleted ❌');
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value });


    }
    const copyText = (text) => {
        navigator.clipboard.writeText(text)
        toast('Copied to clipboard!');
    }
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
            <div>
                <div className="absolute inset-0 -z-10 h-full w-full bg-green-100 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>
            </div>

            <div className=" p-2 md:p-0 md: mycontainer">

                <h1 className='font-bold text-center'><span className='text-green-500'>&lt;</span>
                    PASS
                    <span className='text-green-500'>OP&gt;</span>

                </h1>
                <p className='text-green-900 text-lg text-center '>Your own Password manager</p>
                <div className='text-black flex flex-col items-center p-4 gap-10'>
                    <input value={form.site} onChange={handleChange} placeholder='Enter Website URL' className='text-black focus:outline-none rounded-full border border-green-300 w-full py-1 p-4' type='text' name='site' id='site' />
                    <div className=" flex flex-col md:flex-row justify-between gap-10 w-full">
                        <input value={form.username} onChange={handleChange} placeholder='Enter User Name' className='text-black focus:outline-none rounded-full border border-green-300 w-full py-1 p-4' type='text' name='username' id='username' />
                        <div className="relative">

                            <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' className='text-black focus:outline-none rounded-full border border-green-300 w-full py-1 p-4' type='password' name='password' id='password' />
                            <span className='absolute justify-center  items-center top-[4px] right-[5px] cursor-pointer' onClick={showPassword}>
                                <img ref={ref} className='p-1' width={26} src="icons/eye.png" alt="" />
                            </span>
                        </div>
                    </div>

                    <button onClick={savePassword} className='gap-2 rounded-full p-4 left-4 bg-green-600 w-fit flex  hover:bg-green-400  justify-center items-center px-2 py-1' >
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover">
                        </lord-icon>
                        SAVE </button>
                </div>
                <div className='passwords'>
                    <h2 className='font-bold text-2xl py4-'>Your Passwords</h2>
                    {passwordArray.length === 0 && <div>No Password to show</div>}
                    {passwordArray.length != 0 &&
                        <table className="table-auto w-full rounded-md overflow-hidden">
                            <thead className='bg-green-900 text-white'>
                                <tr>
                                    <th className='py-2'>Site</th>
                                    <th className='py-2'>Username</th>
                                    <th className='py-2'>Password</th>
                                    <th className='py-2'>Action</th>
                                </tr>
                            </thead>
                            <tbody className='bg-green-100'>
                                {passwordArray.map((item, index) => {
                                    return <tr key={index}>

                                        <td
                                            className='py-2 text-center cursor-pointer flex items-center gap-2 justify-center min-w-32'
                                            onClick={() => copyText(item.site)}
                                        >
                                            <a href={item.site} target='_blank' rel='noopener noreferrer'>
                                                {item.site}
                                            </a>
                                            <lord-icon className="cursor-pointer "
                                                onClick={() => copyText(item.username)}
                                                src="https://cdn.lordicon.com/fkaukecx.json"
                                                trigger="hover"
                                                style={{ "width": "25px", "height": "25px" }}
                                            >
                                            </lord-icon>
                                        </td>
                                        <td className='py-2 text-center w-32'>
                                            <span className='flex gap-2 justify-center items-center'>
                                                {item.username}
                                                <lord-icon className="cursor-pointer "
                                                    onClick={() => copyText(item.username)}
                                                    src="https://cdn.lordicon.com/fkaukecx.json"
                                                    trigger="hover"
                                                    style={{ "width": "25px", "height": "25px" }}

                                                >
                                                </lord-icon>
                                            </span>
                                        </td>
                                        <td className='py-2 text-center w-32'>
                                            <span className='flex gap-2 justify-center items-center'>
                                                {item.password}
                                                <lord-icon className="cursor-pointer "
                                                    onClick={() => copyText(item.username)}
                                                    src="https://cdn.lordicon.com/fkaukecx.json"
                                                    trigger="hover"
                                                    style={{ "width": "25px", "height": "25px" }}>
                                                </lord-icon>
                                            </span>
                                        </td>
                                        <td className='py-2 text-center w-32 gap-4'>
                                            <span className='flex gap-4 justify-center items-center'>
                                                <span className='flex gap-4 justify-center items-center' onClick={() => { editPassword(item.id) }}>
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/pflszboa.json"
                                                        trigger="hover"
                                                        style={{ "width": "25px", "height": "25px" }}>
                                                    </lord-icon>
                                                </span>
                                                <span className='cursor-pointer gap-4' onClick={() => { deletePassword(item.id) }}>
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/wpyrrmcq.json"
                                                        trigger="hover"
                                                        style={{ "width": "25px", "height": "25px" }}>
                                                    </lord-icon>
                                                </span>
                                            </span>
                                        </td>
                                    </tr>
                                })}

                            </tbody>
                        </table>}
                </div>
            </div>
        </>
    )
}

export default Manager
