// import packages 
import { Outlet, Navigate } from "react-router-dom";

// import components 
import Sidebar from "../components/Sidebar";


const HomeLayout = () => {


    return( true ? 
        <div className="flex overflow-hidden h-full w-full">
            {/* sidebar menu */}
            <Sidebar />

            {/* children */}
            <Outlet />
        </div> : <Navigate to="/login" />

    )
}

export default HomeLayout;