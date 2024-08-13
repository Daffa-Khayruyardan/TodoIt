import React from 'react';

// import icons
import { IoClose } from "react-icons/io5";

const Setting = () => {
    return (
        <div className='xl:flex xl:justify-center xl:items-center xl:bg-transparent w-full h-screen absolute top-0 left-0'>
            {/* modal popup */}
            <div className='xl:px-5 xl:pt-4 xl:bg-white xl:w-[54%] h-[74%]'>
                {/* header container */}
                <div className='xl:flex xl:items-center xl:justify-between'>
                    <h1 className='xl:text-xl xl:font-semibold'>User Information</h1>
                    <IoClose size={22} className='xl:cursor-pointer' />
                </div>

                {/* form update user */}
                <form>
                    <label>Email: </label>
                    <input type="text" />
                </form>
            </div>
        </div>
    );
}

export default Setting;
