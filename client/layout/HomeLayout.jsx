// import packages 
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// import components 
import Sidebar from "../components/Sidebar";


const HomeLayout = () => {
    // get current id 
    const currId = localStorage.getItem('currId')

    // check if cookies exist 
    const isLogged = document.cookie.includes(`${currId}`);

    return( isLogged ? 
        <div className="xl:flex">
            {/* sidebar menu */}
            <Sidebar />

            {/* children */}
            <Outlet />
        </div> : <Navigate to="/login" />

    )
}

export default HomeLayout;