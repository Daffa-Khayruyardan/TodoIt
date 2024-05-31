// import some packages 
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

// import reacts icons
import { LuListTodo } from "react-icons/lu";

const Register = () => {
    // get and set signup data
    const [username,setUsername] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    // axios response message 
    const [usernameMSG,setUsernameMSG] = useState();
    const [emailMSG,setEmailMSG] = useState();

    // initiate use navigate
    const navigate = useNavigate();

    // handle signup
    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            await axios.post(`http://localhost:3000/api/signup?username=${username}&email=${email}&password=${password}`)
            setMessage("Success");
            navigate('/todo');
        }catch (err) {
            if(err.response.data.msg === "email exist") {
                setEmailMSG("email already in used");
            }
            
            if(err.response.data.msg === "username exist") {
                setUsernameMSG("username already in used");
            }   
        }
    }

    return(
        <div className="xl:flex xl:flex-col xl:flex-1 xl:items-center">
            {/* app icons */}
            <LuListTodo size={60} color="#59e3b9" className="xl:mt-[3.2em]" />

            {/* title */}
            <h1 className="xl:mt-[1.8em] xl:text-xl xl:font-bold">Hello, fellow student</h1>
 
            {/*  description */}
            <h3 className="xl:mt-[0.5em] xl:text-sm">Todo app here now to help student manage daily task</h3>

            {/* create login form */}
            <form onSubmit={handleSignup} className="xl:mt-[1.5em] xl:flex xl:flex-col ">
                {/* input username */}
                <input onChange={(e) => setUsername(e.target.value)} className="xl:border xl:focus:outline-greenLight xl:bg-greenLightDying xl:p-1 xl:mt-[0.7em] xl:pl-[0.8em] xl:rounded-sm xl:w-[20em] xl:h-[2.4em]" placeholder="Email" name="email" type="text"/>
                
                {/* error label */}
                <label className="xl:pl-1 text-red-500">{emailMSG}</label>

                {/* input email */}
                <input onChange={(e) => setEmail(e.target.value)} className="xl:border xl:focus:outline-greenLight xl:bg-greenLightDying xl:p-1 xl:mt-[0.7em] xl:pl-[0.8em] xl:rounded-sm w-[20em] xl:h-[2.4em]" placeholder="Username" name="username" type="text"/>
                
                {/* error label */}
                <label className="xl:pl-1 text-red-500">{usernameMSG}</label>

                {/* input password */}
                <input onChange={(e) => setPassword(e.target.value)} className="xl:border xl:focus:outline-greenLight xl:bg-greenLightDying xl:p-1 mt-[0.7em] xl:pl-[0.8em] xl:rounded-sm w-[20em] xl:h-[2.4em]" placeholder="Password" name="password" type="text"/>

                {/* login button */}
                <button type="submit" className="xl:mt-[1.4em] xl:h-[2.2em] xl:hover:bg-greenLightHover xl:duration-200 xl:bg-greenLight xl:rounded-sm xl:text-white xl:cursor-pointer">Submit</button>

                {/* create account link */}
                <h1 className="xl:flex xl:justify-center xl:items-center xl:mt-[4em] xl:text-sm">
                    Already have account? 
                    <Link type="submit" className="xl:pl-[1em] xl:text-greenLight">Log In</Link>
                </h1>
            </form>
        </div>
    )
}

export default Register;