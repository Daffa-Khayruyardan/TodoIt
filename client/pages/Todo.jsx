// import packages
import { useState } from "react";
import { Link } from "react-router-dom";

// import components
import Card from "../components/Card";

// import icons
import { IoIosAdd } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";

const Todo = () => {
    // add todo visible condition
    const [addTodo,setAddTodo] = useState(false);

    return(
        <div className="xl:flex-1 bg-silverLight">
            {/* title container */}
            <div className="xl:flex xl:justify-between xl:items-center xl:mr-[4em]">
                {/* title of pages */}
                <h1 className="xl:ml-[2em] xl:font-bold xl:mt-[1em] xl:text-xl">Inbox</h1>

                {/* search input */}
                <div className="xl:relative xl:mt-[1em]">
                    <input type="text" placeholder="search" className="xl:focus:outline-greenLight xl:pl-[2.5em] xl:relative xl:rounded-2xl xl:w-[14em] xl:h-[2em]" />

                    {/* search icon */}
                    <FaSearch size={15} className="xl:absolute xl:top-[0.6em] xl:left-4" />
                </div>
            </div>

            {/* content of todo here */}
            <Card />
        </div>
    )
}

export default Todo;