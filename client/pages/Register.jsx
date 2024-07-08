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
        <div className="xl:flex xl:flex-col xl:flex-1 xl:fixed right-[10em] xl:items-center">
            {/* app icons */}
            <LuListTodo size={60} color="#59e3b9" className="xl:mt-[3.2em]" />

            {/* title */}
            <h1 className="xl:mt-[1.8em] xl:text-xl xl:font-bold">Hello, fellow student</h1>
 
            {/*  description */}
            <h3 className="xl:mt-[0.5em] xl:text-sm">Todo app here now to help student manage daily task</h3>

            {/* error message email*/}
            <div className={`${errorDisplay ? "" : "hidden"} xl:mt-[1.2em] xl:bg-red-200 xl:border-2 xl:pl-5 xl:pt-2 xl:pb-2 xl:border-red-600 xl:w-[20em]`}>
                {errorMSGContent}
            </div>

            {/* create login form */}
            <form onSubmit={handleSignup} className="xl:mt-[1.2em] xl:flex xl:flex-col ">
                {/* input email */}
                <input onChange={(e) => setEmail(e.target.value)} className="xl:border xl:focus:outline-greenLight xl:bg-greenLightDying xl:p-1 xl:mt-[0.7em] xl:pl-[0.8em] xl:rounded-sm xl:w-[20em] xl:h-[2.4em]" placeholder="Email" name="email" type="text"/>
                
                {/* input username */}
                <input onChange={(e) => setUsername(e.target.value)} className="xl:border xl:focus:outline-greenLight xl:bg-greenLightDying xl:p-1 mt-[0.7em] xl:pl-[0.8em] xl:rounded-sm w-[20em] xl:h-[2.4em]" placeholder="Username" name="username" type="text"/>

                {/* input password */}
                <input onChange={(e) => setPassword(e.target.value)} className="xl:border xl:focus:outline-greenLight xl:bg-greenLightDying xl:p-1 mt-[0.7em] xl:pl-[0.8em] xl:rounded-sm w-[20em] xl:h-[2.4em]" placeholder="Password" name="password" type="text"/>

                {/* login button */}
                <button type="submit" className="xl:mt-[1.4em] xl:h-[2.2em] xl:hover:bg-greenLightHover xl:duration-200 xl:bg-greenLight xl:rounded-sm xl:text-white xl:cursor-pointer">Submit</button>

                {/* create account link */}
                <h1 className="xl:flex xl:justify-center xl:items-center xl:mt-[4em] xl:text-sm">
                    Already have account? 
                    <Link to="/login" type="submit" className="xl:pl-[1em] xl:text-greenLight">Log In</Link>
                </h1>
            </form>
        </div>
    )
}

export default Register;