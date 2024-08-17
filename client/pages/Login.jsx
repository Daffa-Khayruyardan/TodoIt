// import some packages
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

// import reacts icons
import { LuListTodo } from "react-icons/lu";

const Login = () => {
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
                if(res.data !== null) {
                    // set error display off if visible before
                    setErrorDisplay(false);

                    // set curr email and username
                    localStorage.setItem('currId', `${res.data._id}`);

                    // navigate to home screen
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
        <div className="flex flex-col fixed xl:right-[10em] lg:right-[6.4em] md:right-[5em] max-sm:right-[10em] xl:mt-[0em] lg:mt-[2em]  flex-1 items-center">
            {/* app icons */}
            <LuListTodo size={60} color="#59e3b9" className="mt-[3.2em]" />

            {/* title */}
            <h1 className="mt-[1.8em] text-xl font-bold">Hello, fellow student</h1>

            {/* little description */}
            <h3 className="mt-[0.5em] text-sm">Todo app here now to help student manage daily task</h3>

            {/*  */}
            <div className={`${errorDisplay ? "" : "hidden"} mt-[1.2em] bg-red-200 border-2 pl-5 pt-2 pb-2 border-red-600 w-[20em]`}>
                {msgError}
            </div>

            {/* create login form */}
            <form onSubmit={(e) => handleSubmit(e)} className="mt-[1.5em] flex flex-col ">
                {/* input email */}
                <input onChange={(e) => setEmail(e.target.value)} className="border focus:outline-greenLight bg-greenLightDying p-1 mt-[0.7em] pl-[0.8em] rounded-sm lg:w-[17em] xl:w-[20em] h-[2.4em]" placeholder="Email" name="email" type="text"/>
                
                {/* input password */}
                <input onChange={(e) => setPassword(e.target.value)} className="border focus:outline-greenLight bg-greenLightDying p-1 mt-[0.7em] pl-[0.8em] rounded-sm lg:w-[17em] xl:w-[20em] h-[2.4em]" placeholder="Password" name="password" type="text"/>

                {/* login button */}
                <button className="mt-[1.4em] h-[2.2em] hover:bg-greenLightHover duration-200 bg-greenLight rounded-sm text-white cursor-pointer" type="submit">Submit</button>

                {/* create account link */}
                <h1 className="flex justify-center items-center mt-[4em] text-sm">
                    Don't have account? 
                    <Link to="/register" className="pl-[1em] text-greenLight">Sign up</Link>
                </h1>
            </form>
        </div>
    )
}

export default Login;