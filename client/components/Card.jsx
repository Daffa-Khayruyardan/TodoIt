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
        <div className="xl:flex xl:cursor-pointer xl:shadow-md xl:justify-between xl:items-center xl:bg-white xl:mt-[1.5em] xl:mr-[4em] xl:ml-[2em] xl:pl-[2em] xl:pt-[1.2em] xl:pb-[1.2em]">
            {/* name of todo */}
            <h1>{title}</h1>

            {/* container modify */}
            <div className="xl:flex xl:pr-10 xl:justify-between xl:items-cente xl:w-40 xl:h-full">
                {/* container modify */}
                <Link to={`/todo/edit/${itemId}`} onClick={editData} className="xl:flex xl:justify-center xl:rounded-full xl:px-2 xl:py-2 xl:items-center xl:cursor-pointer hover:bg-greenLightDying xl:mr-[2em] w-10 h-9">
                    {/* edit  */}
                    <FaEdit  size={18} />
                </Link>

                {/* conteiner delete */}
                <Link className="xl:flex xl:justify-center xl:rounded-full xl:px-2 xl:py-2 xl:items-center xl:cursor-pointer xl:hover:bg-greenLightDying w-10 h-9">
                    {/* delete */}
                    <MdDelete onClick={delData} size={18} />
                </Link>
            </div>
        </div>
    )
}

export default Card;