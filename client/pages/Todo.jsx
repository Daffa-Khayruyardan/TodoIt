// import packages
import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import axios from 'axios';

// import components
import Card from "../components/Card";

// import icons
import { FaSearch } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";

// import custom hooks
import useFetch from "../hooks/useFetch";
import useDelete from "../hooks/useDelete";

// import store from 
import { useStore } from '../store/sidebarStore';

const Todo = () => {
    // add todo visible condition
    const [todoData,setTodoData] = useState(null);

    // search bar 
    const [searchValue,setSearchValue] = useState('');

    // create use navigate
    const navigate = useNavigate();
    
    // get currId
    const currId = localStorage.getItem('currId');

    const {data} = useFetch(`http://localhost:3000/api/todo/${currId}`);

    // get hamburger menu state 
    const toggleShow = useStore(state => state.toggleShow);
    const isShow = useStore(state => state.isShow);

    return(
        <div className={`flex-1 max-sm:ml-[0em] ${isShow ? "max-sm:hidden" : ""} max-sm:absolute max-sm:-z-10 ml-[15.5em] bg-silverLight`}>
            {/* title container */}
            <div className="h-10 flex justify-between max-sm:items-center items-center pb-[0.8em] pr-[4em]">
                {/* menuburger */}
                <div className="max-sm:rounded-full max-sm:hover:bg-silverLight">
                    <CiMenuBurger onClick={toggleShow} className="cursor-pointer xl:hidden max-sm:ml-2" />
                </div>

                {/* title of pages */}
                <h1 className="ml-[2em] font-bold pt-[1em] text-">Inbox</h1>

                {/* search input */}
                <div className="relative mt-[1em]">
                    <input onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder="search" className="focusoutline-greenLight pl-[2.5em] relative rounded-2xl w-[14em] h-[2em]" />

                    {/* search icon */}
                    <FaSearch size={15} className="absolute top-[0.6em] left-4" />
                </div>
            </div>

            {/* container content */}
            <div className="h-[94vh] overflow-y-scroll flex-1 ">
                {/* todo content here */}
                {Object.values(data).filter(item => {
                    // filter item from search bar 
                    return searchValue.toLocaleLowerCase() === '' ? item : item.title.toLowerCase().includes(searchValue);
                }).map(item => (
                    // show item in card 
                    <Card itemId={item._id} key={item._id} title={item.title} delData={() => useDelete(`http://localhost:3000/api/todo/${currId}/${item._id}`)} editData={() => handleData()} />
                ))}
            </div>

            <Outlet />
        </div>
    )
}

export default Todo;