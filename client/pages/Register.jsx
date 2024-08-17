// import some packages 
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

// import reacts icons
import { LuListTodo } from "react-icons/lu";

const Register = () => {
    // get and set signup data
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [username,setUsername] = useState('');

    // error message 
    const [errorDisplay,setErrorDisplay] = useState(false);
    const [errorMSG,setErrorMSG] = useState('');

    // initiate use navigate
    const navigate = useNavigate();

    // handle signup
    const handleSignup = (e) => {
        e.preventDefault();

        axios.post(`http://localhost:3000/api/signup`, {email: email, username: username, password: password})
            .then(resp => {
                // if signup success
                if(resp.data.msg === 'signup success') {
                    setErrorDisplay(false);

                    navigate('/login');
                }
            })
            .catch(err => {
                if(err.response.data.msg === 'email exist') {
                    setErrorDisplay(true);
                    setErrorMSG('email')
                }else if(err.response.data.msg === 'username exist') {
                    setErrorDisplay(true);
                    setErrorMSG('username');
                }
                else if(err.response.data.msg === 'please fill') {
                    setErrorDisplay(true);
                    setErrorMSG('blank');
                }
            })
    }

    // errorMSGContent
    let errorMSGContent;

    // conditional error message 
    if(errorMSG === 'email') {
        errorMSGContent = <h1>Email already in used</h1>
    }else if(errorMSG === 'username'){
        errorMSGContent = <h1>Username already in used</h1>
    }
    else if(errorMSG === 'blank') {
        errorMSGContent = <h1>Please fill value in the blank</h1>
    }   

    return(
        <div className="flex flex-col flex-1 fixed right-[10em] lg:right-[6.4em] items-center">
            {/* app icons */}
            <LuListTodo size={60} color="#59e3b9" className="mt-[3.2em]" />

            {/* title */}
            <h1 className="mt-[1.8em] text-xl font-bold">Hello, fellow student</h1>
 
            {/*  description */}
            <h3 className="mt-[0.5em] text-sm">Todo app here now to help student manage daily task</h3>

            {/* error message email*/}
            <div className={`${errorDisplay ? "" : "hidden"} mt-[1.2em] bg-red-200 border-2 pl-5 pt-2 pb-2 border-red-600 w-[20em]`}>
                {errorMSGContent}
            </div>

            {/* create login form */}
            <form onSubmit={handleSignup} className="mt-[1.2em] flex flex-col ">
                {/* input email */}
                <input onChange={(e) => setEmail(e.target.value)} className="border focus:outline-greenLight bg-greenLightDying p-1 mt-[0.7em] pl-[0.8em] rounded-sm lg:w-[17em] w-[20em] h-[2.4em]" placeholder="Email" name="email" type="text"/>
                
                {/* input username */}
                <input onChange={(e) => setUsername(e.target.value)} className="border focus:outline-greenLight bg-greenLightDying p-1 mt-[0.7em] pl-[0.8em] rounded-sm lg:w-[17em] w-[20em] h-[2.4em]" placeholder="Username" name="username" type="text"/>

                {/* input password */}
                <input onChange={(e) => setPassword(e.target.value)} className="border focus:outline-greenLight bg-greenLightDying p-1 mt-[0.7em] pl-[0.8em] rounded-sm lg:w-[17em] w-[20em] h-[2.4em]" placeholder="Password" name="password" type="text"/>

                {/* login button */}
                <button type="submit" className="mt-[1.4em] h-[2.2em] hover:bg-greenLightHover duration-200 bg-greenLight rounded-sm text-white cursor-pointer">Submit</button>

                {/* create account link */}
                <h1 className="flex justify-center items-center mt-[4em] text-sm">
                    Already have account? 
                    <Link to="/login" type="submit" className="pl-[1em] text-greenLight">Log In</Link>
                </h1>
            </form>
        </div>
    )
}

export default Register;