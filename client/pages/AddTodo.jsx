// import some packages
import { Link } from "react-router-dom";

const AddTodo = () => {
    return(
        <div className="xl:flex xl:justify-center xl:items-center xl:bg-silverLight xl:flex-1">
            {/* form container */}
            <form action="" className="xl:shadow-md xl:bg-white xl:w-96 xl:h-96">
                {/* form title */}
                <h1 className="xl:pt-[1em] xl:pl-[1.5em] xl:text-2xl">Add New</h1>

                {/* form description */}
                <p className="xl:pt-[1em] xl:pl-[2.1em]">Add new activities enter here</p>

                {/* input field */}
                <input type="text" className="xl:ml-[1.9em] xl:mt-[1em] xl:w-[82%] xl:bg-greenLightDying xl:focus:outline-none" />

                {/* button container */}
                <div>
                    <Link></Link>
                </div>
            </form>
        </div>
    )
}

export default AddTodo;