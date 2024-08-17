// import packages
import { Link, useLocation } from "react-router-dom";

// create link button to go another pages
const LinkButton = ({text,to,icon,amount}) => {
    // get current path location
    const {pathname} = useLocation();

    return(
        // button link container
        <Link to={to} className={`flex items-center border-l-[5px]  pt-[0.4em] pb-[0.4em] ml-[0.4em] mr-[0.6em] rounded-lg border-white ${pathname == to ? "bg-greenLight" : ""} mt-[0.5em] pl-[1.5em]`}>
            {/* place link button icon here */}
            {icon}

            {/* text icon */}
            <h1 className={`ml-[1.3em] text-md ${pathname === to ? "text-white" : ""}`}>{text}</h1>

            {/* amount */}
            {amount}
        </Link>
    )
}

export default LinkButton;