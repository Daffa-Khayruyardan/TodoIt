const Login = () => {
    return(
        <div className="flex flex-col flex-1 items-center">
            {/* title */}
            <h1 className="mt-[3em] text-xl font-bold">Hello, fellow student</h1>

            {/* little description */}
            <h3 className="mt-[0.5em] text-sm">Todo app here now to help student manage daily task</h3>

            {/* create login form */}
            <form className="mt-[1.5em] flex flex-col ">
                <input className="border p-1 mt-[0.7em] pl-[0.8em] rounded-sm w-[20em]" placeholder="Email" name="login-email" type="text"/>
                <input className="border p-1 mt-[0.7em] pl-[0.8em] rounded-sm w-[20em]" placeholder="Password" name="password-email" type="text"/>
            </form>
        </div>
    )
}

export default Login;