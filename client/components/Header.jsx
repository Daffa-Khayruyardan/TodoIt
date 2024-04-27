// import icons
import { FaSearch } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";

const Header = () => {
    return(
        <div className="flex pl-[2em] bg-silverLight justify-between items-center h-[4em]">
            {/* search input */}
            <div className="relative">
                <input type="text" placeholder="search" className="pl-[1em] relative rounded-2xl w-[14em] h-[2em]" />
            </div>

            {/* others group */}
            <div className="pr-[3em]">
                <IoIosSettings size={20} className="cursor-pointer" />
            </div>
        </div>
    )
}

export default Header;