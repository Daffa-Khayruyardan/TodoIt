// import some packages 
import { Link } from "react-router-dom";

// import reacts icons
import { LuListTodo } from "react-icons/lu";

const Register = () => {
    return(
        <div className="xl:flex xl:flex-col xl:flex-1 xl:items-center">
            {/* app icons */}
            <LuListTodo size={60} color="#59e3b9" className="xl:mt-[3.2em]" />

            {/* title */}
            <h1 className="xl:mt-[1.8em] xl:text-xl xl:font-bold">Hello, fellow student</h1>

            {/* little description */}
            <h3 className="xl:mt-[0.5em] xl:text-sm">Todo app here now to help student manage daily task</h3>

            {/* create login form */}
            <form className="xl:mt-[1.5em] xl:flex xl:flex-col ">
                {/* input username */}
                <input className="xl:border xl:focus:outline-greenLight xl:bg-greenLightDying xl:p-1 xl:mt-[0.7em] xl:pl-[0.8em] xl:rounded-sm xl:w-[20em] xl:h-[2.4em]" placeholder="Username" name="login-Username" type="text"/>
                
                {/* input email */}
                <input className="xl:border xl:focus:outline-greenLight xl:bg-greenLightDying xl:p-1 xl:mt-[0.7em] xl:pl-[0.8em] xl:rounded-sm w-[20em] xl:h-[2.4em]" placeholder="Email" name="login-email" type="text"/>
                
                {/* input password */}
                <input className="xl:border xl:focus:outline-greenLight xl:bg-greenLightDying xl:p-1 mt-[0.7em] xl:pl-[0.8em] xl:rounded-sm w-[20em] xl:h-[2.4em]" placeholder="Password" name="password-email" type="text"/>

                {/* login button */}
                <input className="xl:mt-[1.4em] xl:h-[2.2em] xl:hover:bg-greenLightHover xl:duration-200 xl:bg-greenLight xl:rounded-sm xl:text-white xl:cursor-pointer" type="submit" value="Submit" />

                {/* create account link */}
                <h1 className="xl:flex xl:justify-center xl:items-center xl:mt-[4em] xl:text-sm">
                    Already have account? 
                    <Link to="/login" className="xl:pl-[1em] xl:text-greenLight">Log In</Link>
                </h1>
            </form>
        </div>
    )
}

export default Register;