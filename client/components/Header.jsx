// import icons
import { FaSearch } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";

const Header = () => {
    return(
        <header className="xl:flex pl-[2em] xl:bg-silverLight xl:justify-between xl:items-center xl:h-[4em]">
            {/* search input */}
            <div className="xl:relative">
                <input type="text" placeholder="search" className="xl:focus:outline-greenLight xl:pl-[2.5em] xl:relative xl:rounded-2xl xl:w-[14em] xl:h-[2em]" />

                {/* search icon */}
                <FaSearch size={15} className="xl:absolute xl:top-[0.6em] xl:left-4" />
            </div>

            {/* others group */}
            <div className="xl:pr-[3em]">
                {/* setting button container */}
                <div className="xl:rounded-full xl:flex xl:justify-center xl:items-center xl:hover:bg-greenLightDying w-8 h-8">
                    <IoIosSettings size={20} className="xl:cursor-pointer" />
                </div>
                
            </div>
        </header>
    )
}

export default Header;