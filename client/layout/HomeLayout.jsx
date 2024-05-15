// import packages 
import { Outlet } from "react-router-dom";

// import components 
import Sidebar from "../components/Sidebar";


const HomeLayout = () => {
    return(
        <div className="flex overflow-hidden h-full w-full">
            {/* sidebar menu */}
            <Sidebar />

            {/* children */}
            <Outlet />
        </div>
    )
}

export default HomeLayout;