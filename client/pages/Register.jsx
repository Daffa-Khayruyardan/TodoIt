import { Link } from "react-router-dom";

const Register = () => {
    return(
        <div className="flex flex-col flex-1 items-center">
            {/* title */}
            <h1 className="mt-[3em] text-xl font-bold">Hello, fellow student</h1>

            {/* little description */}
            <h3 className="mt-[0.5em] text-sm">Todo app here now to help student manage daily task</h3>

            {/* create login form */}
            <form className="mt-[1.5em] flex flex-col ">
                {/* input username */}
                <input className="border focus:outline-greenLight bg-greenLightDying p-1 mt-[0.7em] pl-[0.8em] rounded-sm w-[20em] h-[2.4em]" placeholder="Username" name="login-Username" type="text"/>
                
                {/* input email */}
                <input className="border focus:outline-greenLight bg-greenLightDying p-1 mt-[0.7em] pl-[0.8em] rounded-sm w-[20em] h-[2.4em]" placeholder="Email" name="login-email" type="text"/>
                
                {/* input password */}
                <input className="border focus:outline-greenLight bg-greenLightDying p-1 mt-[0.7em] pl-[0.8em] rounded-sm w-[20em] h-[2.4em]" placeholder="Password" name="password-email" type="text"/>

                {/* login button */}
                <input className="mt-[1.4em] h-[2.2em] hover:bg-greenLightHover duration-200 bg-greenLight rounded-sm text-white cursor-pointer" type="submit" value="Submit" />

                {/* create account link */}
                <h1 className="flex justify-center items-center mt-[4em] text-sm">
                    Already have account? 
                    <Link to="/login" className="pl-[1em] text-greenLight">Log In</Link>
                </h1>
            </form>
        </div>
    )
}

export default Register;