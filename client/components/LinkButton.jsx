// import packages
import { Link, useLocation } from "react-router-dom";

// create link button to go another pages
const LinkButton = ({text,to,icon}) => {
    // get current path location
    const {pathname} = useLocation();

    return(
        // button link container
        <Link to={to} className={`xl:flex xl:items-center xl:border-l-[5px] xl: xl:pt-[0.4em] xl:pb-[0.4em] xl:ml-[0.4em] xl:mr-[0.6em] xl:rounded-lg xl:border-white ${pathname == to ? "xl:bg-greenLight" : ""} xl:mt-[0.5em] xl:pl-[1.5em]`}>
            {/* place link button icon here */}
            {icon}

            {/* text icon */}
            <h1 className={`xl:ml-[1.3em] xl:text-md ${pathname === to ? "xl:text-white" : ""}`}>{text}</h1>
        </Link>
    )
}

export default LinkButton;