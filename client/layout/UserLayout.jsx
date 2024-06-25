// import packages react
import { Outlet, Navigate } from "react-router-dom";

// import components
import SideUser from "../components/SideUser";

const UserLayout = () => {
    const isLogged = document.cookie.includes('daffakhayru=');

    return(isLogged ? <Navigate to="/todo" /> :
        <div className="flex h-full w-full overflow-y-hidden ">
            <SideUser />
            <Outlet />
        </div>
    )
}

export default UserLayout;