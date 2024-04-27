// import packages 
import { Outlet } from "react-router-dom";

// import components 
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const HomeLayout = () => {
    return(
        <div className="flex overflow-hidden h-full w-full">
            {/* sidebar menu */}
            <Sidebar />

            <div className="flex flex-1 flex-col">
                <Header />
                <Outlet />
            </div>
        </div>
    )
}

export default HomeLayout;