// import packages 
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// import components 
import Sidebar from "../components/Sidebar";


const HomeLayout = () => {
    const loginUser = useSelector((state) => state.login.value);

    console.log('result: ', loginUser);

    const user = lo;

    return( user ? 
        <div className="flex overflow-hidden h-full w-full">
            {/* sidebar menu */}
            <Sidebar />

            {/* children */}
            <Outlet />
        </div> : <Navigate to="/login" />

    )
}

export default HomeLayout;