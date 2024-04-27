// import packages
import { Link, useLocation } from "react-router-dom";

const LinkButton = ({text,to,icon}) => {
    // get current path location
    const location = useLocation();
    const currPath = location.pathname;

    return(
        <Link to={to} className={`flex border-l-[5px] border-white ${currPath == to ? "border-l-greenLight" : ""} mt-[0.5em] pl-[1.5em]`}>
            {/* place link button icon here */}
            {icon}

            {/* text icon */}
            <h1 className={`ml-[1.3em] text-md`}>{text}</h1>

        </Link>
    )
}

export default LinkButton;