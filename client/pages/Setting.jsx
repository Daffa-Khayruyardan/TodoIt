import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// import icons
import { IoClose } from "react-icons/io5";

const Setting = () => {
    // store fetch items
    const [userInfo,setUserInfo] = useState('');
    const [username,setUsername] = useState('');

    // init navigate
    const navigate = useNavigate();

    // function to navigate to homepage
    const goToHomepage = () => {
        navigate('/todo');
    };

    // get curr user id
    const currId = localStorage.getItem("currId");

    // fetching user inforamtion
    useEffect(() => {
        const fetchUserInfo = async () => {
            try{
                const userInfo = await axios.get(`http://localhost:3000/api/user/${currId}`)
                setUserInfo(userInfo.data);
            }catch(err) {
                console.log(err);
            }
        }

        fetchUserInfo();
    }, []);

    // update user info change 
    const handleUpdateUsername = async (e) => {
        e.preventDefault();

        await axios.put(`http://localhost:3000/api/user/${currId}`, { username: username})

        alert("update successfull");
    }

    return (
        <div className='xl:flex xl:justify-center xl:items-center xl:bg-transparent w-full h-screen absolute top-0 left-0'>
            {/* modal popup */}
            <div className='xl:px-5 xl:pt-4 xl:bg-white xl:w-[54%] h-[74%]'>
                {/* header container */}
                <div className='xl:flex xl:items-center xl:justify-between'>
                    <h1 className='xl:text-xl xl:font-semibold'>User Information</h1>
                    <IoClose onClick={goToHomepage} size={22} className='xl:cursor-pointer' />
                </div>

                {/* form update user */}
                <form onSubmit={handleUpdateUsername}>
                    {/* email input */}
                    <label>Email: </label><br/>
                    <input defaultValue={userInfo.email} disabled type="text" className='xl:w-72 xl:border xl:py-1 xl:pl-4 xl:focus:outline-greenLight xl:bg-greenLightDying' /><br/>

                    {/* email input */}
                    <label>username: </label><br/>
                    <input onChange={(e) => setUsername(e.target.value)} defaultValue={userInfo.username} type="text" className='xl:w-72 xl:border xl:py-1 xl:pl-4 xl:focus:outline-greenLight xl:bg-greenLightDying'/><br/>

                    <button className='xl:p-2 xl:bg-greenLight xl:text-white xl:rounded-sm xl:mt-4'>Change</button>
                </form>
            </div>
        </div>
    );
}

export default Setting;
