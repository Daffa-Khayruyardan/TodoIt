// import packages 
import { useLocation } from "react-router-dom";

// import components 
import LinkButton from "./LinkButton";


// import icons
import { LuListTodo } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import { FaInbox } from "react-icons/fa6";

const Sidebar = () => {
    // get url location
    const {pathname} = useLocation();

    // condition active link
    const InboxLink = pathname === "/todo";
    const FavoritesLink = pathname === "/favorite";

    return(
        <aside className="h-[100vh] shadow-md w-[18.5vw]">
            {/* app logo and title container */}
            <div className="xl:flex xl:mt-[1em] xl:items-center xl:ml-[1.4em] xl:mb-[1.6em]">
                {/* logo */}
                <LuListTodo size={30} color="" className="xl:mr-[0.8em]" />

                {/* title */}
                <h1 className="xl:text-[1.4em]">TodoIt</h1>
            </div>

            {/* todo link */}
            <LinkButton text="Inbox" to="/todo" icon={<FaInbox size={20} color={`${InboxLink ? "white" : ""}`} />} />

            {/* favorite link */}
            <LinkButton text="Favorites" to="/favorite" icon={<FaStar size={20} color={`${FavoritesLink ? "white" : ""}`}/>} />
        </aside>
    )
}

export default Sidebar;