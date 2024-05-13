// import packages
import { useState } from "react";
import { Link } from "react-router-dom";

// import components
import Card from "../components/Card";

// import icons
import { IoIosAdd } from "react-icons/io";

const Todo = () => {
    // add todo visible condition
    const [addTodo,setAddTodo] = useState(false);

    return(
        <div className="xl:flex-1 bg-silverLight">
            {/* title container */}
            <div className="xl:flex xl:justify-between xl:items-center xl:mr-[4em]">
                {/* title of pages */}
                <h1 className="xl:ml-[2em] xl:font-bold xl:mt-[1em] xl:text-xl">Inbox</h1>

                {/* button add todo */}
                <Link className="xl:flex xl:rounded-lg xl:pl-2 xl:mt-[1em] xl:pr-4 xl:justify-center xl:items-center xl:h-6  xl:bg-greenLight">
                    {/* icon add */}
                    <IoIosAdd color="white" size={20}/>

                    {/* name button */}
                    <h1 className="xl:text-white ">Add</h1>
                </Link>
            </div>

            {/* content of todo here */}
            <Card />
        </div>
    )
}

export default Todo;