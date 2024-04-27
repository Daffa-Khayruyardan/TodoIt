// import packages
import { useState } from "react";

// import components
import AddTodo from "../components/AddTodo";

// import icons
import { IoIosAdd } from "react-icons/io";

const Todo = () => {
    // add todo visible condition
    const [addTodo,setAddTodo] = useState(false);

    return(
        <div className=" flex-1 bg-silverLight">
            hello            

            {/* add new todo button */}
            <div onClick={() => setAddTodo(true)} className=" w-[4em] h-[4em] cursor-pointer bottom-[4em] right-[4em] absolute flex justify-center shadow-md rounded-[50%] bg-greenLight">
                <IoIosAdd color="white" size="40" className="flex justify-center items-center" />
            </div>

            {/* add todo popup */}
            {addTodo && <AddTodo/>}
        </div>
    )
}

export default Todo;