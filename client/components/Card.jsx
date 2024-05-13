// import some packages 
import { Link } from "react-router-dom";


const Card = () => {
    return (
        <div className="xl:flex xl:justify-between xl:items-center xl:bg-white xl:mt-[2em] xl:mr-[4em] xl:ml-[2em] xl:pl-[2em] xl:pt-[1.2em] xl:pb-[1.2em]">
            {/* name of todo */}
            <h1>Hello</h1>

            {/* container modify */}
            <Link className="xl:flex xl:justify-center xl:rounded-lg xl:items-center xl:cursor-pointer bg-red-500 xl:mr-[2em] w-10 h-9">
                {/* edit  */}
                <h1 className="xl:text-white">Edit</h1>
            </Link>
        </div>
    )
}

export default Card;