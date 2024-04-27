// import components 
import LinkButton from "./LinkButton";

// import icons
import { LuListTodo } from "react-icons/lu";
import { FaStar } from "react-icons/fa";

const Sidebar = () => {
    return(
        <aside className="h-[100vh] shadow-md w-[21.5vw]">
            {/* todo link */}
            <LinkButton text="Todo" to="/todo" icon={<LuListTodo size="20" />} />

            {/* favorite link */}
            <LinkButton text="Favorites" to="/favorite" icon={<FaStar size="20" />} />
        </aside>
    )
}

export default Sidebar;