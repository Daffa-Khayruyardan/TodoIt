// import packages react
import { Outlet } from "react-router-dom";

// import components
import SideUser from "../components/SideUser";

const UserLayout = () => {
    return(
        <div className="flex ">
            <SideUser />
            <Outlet />
        </div>
    )
}

export default UserLayout;