// import packages
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

// import components
import Card from "../components/Card";

// import icons
import { IoIosAdd } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";

const Todo = () => {
    // add todo visible condition
    const [todoData,setTodoData] = useState(null);

    // fetch api
    useEffect(() => {
        axios.get("http://localhost:3000/todo")
            .then(res => setTodoData(res.data))
            .catch(err => console.log(err));
        
    }, [])

    // data null return nothing
    if (todoData === null) return

    // handle delete 
    const handleDelete = (itemId) => {
        axios.delete(`http://localhost:3000/todo/delete/${itemId}`);
        window.location.reload();
    };

    return(
        <div className="xl:flex-1 bg-silverLight">
            {/* title container */}
            <div className="xl:h-10 xl:flex xl:justify-between xl:items-center xl:pb-[0.8em] xl:pr-[4em]">
                {/* title of pages */}
                <h1 className="xl:ml-[2em] xl:font-bold xl:pt-[1em] xl:text-xl">Inbox</h1>

                {/* search input */}
                <div className="xl:relative xl:mt-[1em]">
                    <input type="text" placeholder="search" className="xl:focus:outline-greenLight xl:pl-[2.5em] xl:relative xl:rounded-2xl xl:w-[14em] xl:h-[2em]" />

                    {/* search icon */}
                    <FaSearch size={15} className="xl:absolute xl:top-[0.6em] xl:left-4" />
                </div>
            </div>

            {/* container content */}
            <div className="xl:h-[94vh] xl:overflow-y-scroll xl:flex-1 ">
                {/* todo content here */}
                {todoData && todoData.map(item => (
                    <Card key={item._id} title={item.title} delData={() => handleDelete(item._id)} />
                ))}
            </div>
        </div>
    )
}

export default Todo;