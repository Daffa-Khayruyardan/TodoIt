// import packages 
import { useLocation } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from 'axios';

// import components 
import LinkButton from "./LinkButton";

// import icons
import { LuListTodo } from "react-icons/lu";
import { IoIosAddCircle } from "react-icons/io";
import { FaInbox } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";
import { IoMdSettings } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";

// import store from 
import { useStore } from '../store/sidebarStore';

const Sidebar = () => {
    // store fetch items
    const [userInfo,setUserInfo] = useState('');

    // get url location
    const {pathname} = useLocation();

    // condition active link
    const InboxLink = pathname === "/todo";
    const AddLink = pathname === "/todo/add";
    const SettingLink = pathname === "/todo/setting";

    // current username and email
    const currEmail = localStorage.getItem('currEmail');
    const currUsername = localStorage.getItem('currUsername');

    // handle logout
    const logout = async () => {
        // set cookies to expire
        document.cookie = `${userInfo._id}` + "=; Max-Age=-99999999;";

        // remove user info
        localStorage.removeItem('currId')

        // reload page
        window.location.reload();
    };

    // get curr user id
    const currId = localStorage.getItem("currId");

    // fetching user inforamtion
    useEffect(() => {
        const fetchUserInfo = async () => {
            try{
                const userInfo = await axios.get(`http://localhost:3000/api/user/${currId}`)
                setUserInfo(userInfo.data);
            }catch(err) {
                console.log(err);
            }
        }

        fetchUserInfo();
    }, []);

    const isShow = useStore(state => state.isShow);
    const toggleShow = useStore(state => state.toggleShow);

    return(
        <aside className={`h-[100vh] max-sm:duration-200 fixed shadow-md ${isShow ? "" : "max-sm:translate-x-[-100%]"} max-sm:absolute max-sm:z-20 max-sm:overflow-hidden xl:w-[19.1vw] lg:w-[24vw]`}>
            {/* app logo and title container */}
            <div className="flex mt-[1em] items-center ml-[1.4em] mb-[1.6em]">
                {/* logo */}
                <LuListTodo size={30} color="" className="mr-[0.8em]" />

                {/* title */}
                <h1 className="text-[1.4em]">TodoIt</h1>

                <CiMenuBurger onClick={toggleShow} className="max-sm:ml-10" />
            </div>

            {/* todo link */}
            <LinkButton amount={
                <div className={`ml-24 ${InboxLink ? "text-white": ""}`}>{userInfo && userInfo.userdata.length}</div>
            } text="Inbox" to="/todo" icon={<FaInbox size={20} color={`${InboxLink ? "white" : ""}`} />} />

            {/* add link */}
            <LinkButton text="Add" to="/todo/add" icon={<IoIosAddCircle size={20} color={`${AddLink ? "white" : ""}`}/>} />

            {/* Setting link */}
            <LinkButton text="Setting" to="/todo/setting" icon={<IoMdSettings size={20} color={`${SettingLink ? "white" : ""}`}/>} />

            {/* name container */}
            <div className="pl-2 pt-2 flex border-t-2 shadow-sm absolute w-full h-16  bottom-0">
                <div>
                    <h1 className="sm">{userInfo.email}</h1>
                    <h1 className="sm">{userInfo.username}</h1>
                </div>

                {/* logout button */}
                <CiLogout size="22" className="cursor-pointer mt-[0.8em] ml-7" onClick={() => logout()} />
            </div>
        </aside>
    )
}

export default Sidebar;