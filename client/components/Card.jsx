// import some packages 
import { Link } from "react-router-dom";

// import reacts icons
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useEffect } from "react";

const Card = ({title,delData,editData,itemId}) => {
    // fetch data 
    useEffect(() => {

    }, []);

    return (
        <div className="flex max-sm:mt-[2em] cursor-pointer shadow-md justify-between items-center bg-white mt-[1.5em] max-sm:mr-[1em] mr-[4em] max-sm:ml-[1em] ml-[2em] pl-[2em] pt-[1.2em] pb-[1.2em]">
            {/* name of todo */}
            <h1>{title}</h1>

            {/* container modify */}
            <div className="flex pr-10 justify-between items-center w-40 h-full">
                {/* container modify */}
                <Link to={`/todo/edit/${itemId}`} onClick={editData} className="flex justify-center rounded-full px-2 py-2 items-center cursor-pointer hover:bg-greenLightDying mr-[2em] w-10 h-9">
                    {/* edit  */}
                    <FaEdit  size={18} />
                </Link>

                {/* conteiner delete */}
                <Link className="flex justify-center rounded-full px-2 py-2 items-center cursor-pointer hover:bg-greenLightDying w-10 h-9">
                    {/* delete */}
                    <MdDelete onClick={delData} size={18} />
                </Link>
            </div>
        </div>
    )
}

export default Card;