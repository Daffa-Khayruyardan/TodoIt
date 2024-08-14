// import packages 
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
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

    return(
        <aside className=" h-[100vh] fixed shadow-md w-[20vw]">
            {/* app logo and title container */}
            <div className="xl:flex xl:mt-[1em] xl:items-center xl:ml-[1.4em] xl:mb-[1.6em]">
                {/* logo */}
                <LuListTodo size={30} color="" className="xl:mr-[0.8em]" />

                {/* title */}
                <h1 className="xl:text-[1.4em]">TodoIt</h1>
            </div>

            {/* todo link */}
            <LinkButton amount={
                <div className={`xl:ml-24 ${InboxLink ? "text-white": ""}`}>{userInfo && userInfo.userdata.length}</div>
            } text="Inbox" to="/todo" icon={<FaInbox size={20} color={`${InboxLink ? "white" : ""}`} />} />

            {/* add link */}
            <LinkButton text="Add" to="/todo/add" icon={<IoIosAddCircle size={20} color={`${AddLink ? "white" : ""}`}/>} />

            {/* Setting link */}
            <LinkButton text="Setting" to="/todo/setting" icon={<IoMdSettings size={20} color={`${SettingLink ? "white" : ""}`}/>} />

            {/* name container */}
            <div className="xl:pl-2 pt-2 xl:flex border-t-2 shadow-sm xl:absolute xl:w-full xl:h-16  bottom-0">
                <div>
                    <h1 className="xl:sm">{userInfo.email}</h1>
                    <h1 className="xl:sm">{userInfo.username}</h1>
                </div>

                {/* logout button */}
                <CiLogout size="22" className="cursor-pointer mt-[0.8em] ml-7" onClick={() => logout()} />
            </div>
        </aside>
    )
}

export default Sidebar;