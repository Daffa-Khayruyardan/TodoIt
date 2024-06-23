// import some packages
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import Cookies from 'js-cookie';
import { useDispatch } from "react-redux";

// import reacts icons
import { LuListTodo } from "react-icons/lu";

// import login slice 
import { login } from "../features/loginSlice";

const Login = () => {
    // initialize dispatch
    const dispatch = useDispatch();

    // initialize navigate
    const navigate = useNavigate();

    // set form value
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    // set error display
    const [errorDisplay,setErrorDisplay] = useState(false);
    const [errorMSG,setErrorMSG] = useState('');
    
    const handleSubmit = (e) => {
        // prevent submit 
        e.preventDefault();

        // post login form
        axios.post(`http://localhost:3000/api/login`, { email: email, password: password}, { withCredentials: true })
            .then(res => {
                // if login has success to proceed
                if(res.data.msg === 'Login success') {
                    setErrorDisplay(!errorDisplay);
                    dispatch(login());

                    navigate('/todo');
                }

                console.log(res);
            })
            .catch(err => {
                // if form in the blank state
                if(err.response.data.msg === 'please fill') {
                    setErrorDisplay(true);
                    setErrorMSG('please fill')
                
                // if entered email is invalid 
                }else if(err.response.data.msg === 'invalid email') {
                    setErrorDisplay(true);
                    setErrorMSG('invalid email');

                // if entered password is invalid 
                }else if(err.response.data.msg === 'invalid password') {
                    setErrorDisplay(true);
                    setErrorMSG('invalid password');
                }

                console.log(err);
            });
    };

    let msgError;

    if(errorMSG === 'please fill') {
        msgError = <h1>Please fill value in the blank</h1>;
    }else if(errorMSG === 'invalid email') {
        msgError = <h1>Please enter correct email</h1>;
    }else if(errorMSG === 'invalid password') {
        msgError = <h1>Please enter correct password</h1>;
    }

    return(
        <div className="flex flex-col flex-1 items-center">
            {/* app icons */}
            <LuListTodo size={60} color="#59e3b9" className="xl:mt-[3.2em]" />

            {/* title */}
            <h1 className="xl:mt-[1.8em] xl:text-xl xl:font-bold">Hello, fellow student</h1>

            {/* little description */}
            <h3 className="xl:mt-[0.5em] xl:text-sm">Todo app here now to help student manage daily task</h3>

            {/*  */}
            <div className={`${errorDisplay ? "" : "hidden"} xl:mt-[1.2em] xl:bg-red-200 xl:border-2 xl:pl-5 xl:pt-2 xl:pb-2 xl:border-red-600 xl:w-[20em]`}>
                {msgError}
            </div>

            {/* create login form */}
            <form onSubmit={(e) => handleSubmit(e)} className="xl:mt-[1.5em] xl:flex flex-col ">
                {/* input email */}
                <input onChange={(e) => setEmail(e.target.value)} className="xl:border xl:focus:outline-greenLight xl:bg-greenLightDying xl:p-1 xl:mt-[0.7em] xl:pl-[0.8em] xl:rounded-sm w-[20em] xl:h-[2.4em]" placeholder="Email" name="email" type="text"/>
                
                {/* input password */}
                <input onChange={(e) => setPassword(e.target.value)} className="xl:border xl:focus:outline-greenLight xl:bg-greenLightDying xl:p-1 xl:mt-[0.7em] xl:pl-[0.8em] xl:rounded-sm w-[20em] xl:h-[2.4em]" placeholder="Password" name="password" type="text"/>

                {/* login button */}
                <button className="xl:mt-[1.4em] xl:h-[2.2em] xl:hover:bg-greenLightHover xl:duration-200 xl:bg-greenLight xl:rounded-sm xl:text-white cursor-pointer" type="submit">Submit</button>

                {/* create account link */}
                <h1 className="xl:flex xl:justify-center xl:items-center xl:mt-[4em] xl:text-sm">
                    Don't have account? 
                    <Link to="/register" className="xl:pl-[1em] xl:text-greenLight">Sign up</Link>
                </h1>
            </form>
        </div>
    )
}

export default Login;