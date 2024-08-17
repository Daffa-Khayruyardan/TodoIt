// import packages 
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// import components 
import Sidebar from "../components/Sidebar";


const HomeLayout = () => {
    // get current id 
    const currId = localStorage.getItem('currId')

    // check if cookies exist 
    // const isLogged = document.cookie.includes(`${currId}`);

    const isLogged = true;

    return( isLogged ? 
        <div className="flex max-sm:overflow-x-hidden max-sm:overflow-y-hidden">
            {/* sidebar menu */}
            <Sidebar />

            {/* children */}
            <Outlet />
        </div> : <Navigate to="/login" />

    )
}

export default HomeLayout;