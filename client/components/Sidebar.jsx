// import packages 
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

// import components 
import LinkButton from "./LinkButton";

// import icons
import { LuListTodo } from "react-icons/lu";
import { IoIosAddCircle } from "react-icons/io";
import { FaInbox } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";

const Sidebar = () => {
    // get url location
    const {pathname} = useLocation();

    // condition active link
    const InboxLink = pathname === "/todo";
    const AddLink = pathname === "/todo/add";

    // current username and email
    const currEmail = localStorage.getItem('currEmail');
    const currUsername = localStorage.getItem('currUsername');

    // handle logout
    const logout = () => {
        // set cookies to expire
        document.cookie = "daffakhayru" + "=; Max-Age=-99999999;";

        // remove user info
        localStorage.removeItem('currEmail');
        localStorage.removeItem('currUsername');

        // reload page
        window.location.reload();
    };

    return(
        <aside className="relative h-[100vh] shadow-md w-[20vw]">
            {/* app logo and title container */}
            <div className="xl:flex xl:mt-[1em] xl:items-center xl:ml-[1.4em] xl:mb-[1.6em]">
                {/* logo */}
                <LuListTodo size={30} color="" className="xl:mr-[0.8em]" />

                {/* title */}
                <h1 className="xl:text-[1.4em]">TodoIt</h1>
            </div>

            {/* todo link */}
            <LinkButton text="Inbox" to="/todo" icon={<FaInbox size={20} color={`${InboxLink ? "white" : ""}`} />} />

            {/* add link */}
            <LinkButton text="Add" to="/todo/add" icon={<IoIosAddCircle size={20} color={`${AddLink ? "white" : ""}`}/>} />

            {/* name container */}
            <div className="xl:pl-2 pt-2 xl:flex border-t-2 shadow-sm xl:absolute xl:w-full xl:h-16  bottom-0">
                <div>
                    <h1 className="xl:sm">{currEmail}</h1>
                    <h1 className="xl:sm">{currUsername}</h1>
                </div>

                {/* logout button */}
                <CiLogout size="22" className="cursor-pointer mt-[0.8em] ml-7" onClick={() => logout()} />
            </div>
        </aside>
    )
}

export default Sidebar;