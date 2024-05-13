// import some packages

import { Outlet } from "react-router-dom"


const ModifyLayout = () => {
    return(
        <div className="xl:bg-greenLight xl:flex xl:justify-center xl:items-center xl:h-[100vh]">
            <Outlet />
        </div>
    )
}

export default ModifyLayout