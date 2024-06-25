// import packages 
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// import components 
import Sidebar from "../components/Sidebar";


const HomeLayout = () => {
    // const currUserToken = useSelector((state) => state.login.currUseToken);

    // check if cookies exist 
    const isLogged = document.cookie.includes(`daffakhayru=`);


    return( isLogged ? 
        <div className="flex overflow-hidden h-full w-full">
            {/* sidebar menu */}
            <Sidebar />

            {/* children */}
            <Outlet />
        </div> : <Navigate to="/login" />

    )
}

export default HomeLayout;