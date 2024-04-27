// import packages react
import { Outlet } from "react-router-dom";

// import components
import SideUser from "../components/SideUser";

// imports components
import AddTodo from "../components/AddTodo";

const UserLayout = () => {
    return(
        <div className="flex ">
            <AddTodo />
            <SideUser />
            <Outlet />
        </div>
    )
}

export default UserLayout;