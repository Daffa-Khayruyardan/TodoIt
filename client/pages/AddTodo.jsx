// import some packages
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

const AddTodo = () => {
    // get data 
    const [getTitle,setTitle] = useState('');

    // initiate use navigate
    const navigate = useNavigate();

    // create handle submit
    const handleSubmit = () => {
        if(getTitle === '') {
            // submit using axios post when no data inside input field
            axios.post(`http://localhost:3000/api/todo/?title=${'untitled'}`)
                .then(res => console.log(res))
                .catch(err => console.log(err)); 

            // navigate to another page
            navigate('/todo')
        }else {
            // submit using axios post 
            axios.post(`http://localhost:3000/api/todo/?title=${getTitle}`)
                .then(res => console.log(res))
                .catch(err => console.log(err));

            // navigate to another page
            navigate('/todo')
        }

        
    }

    // handlle cancel add
    const handleCancel = () => {
        navigate('/todo');
    }

    return(
        <div className="xl:flex xl:justify-center xl:items-center xl:bg-silverLight xl:flex-1">
            {/* form container */}
            <form action="" className="xl:shadow-md xl:bg-white xl:w-96 xl:h-64">
                {/* form title */}
                <h1 className="xl:pt-[1em] xl:pl-[1.5em] xl:text-2xl">Add New</h1>

                {/* form description */}
                <p className="xl:pt-[1em] xl:pl-[2.1em]">Add new activities enter here</p>

                {/* input field */}
                <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title"  className="xl:h-10 xl:pl-4 xl:rounded xl:ml-[1.9em] xl:mt-[1em] xl:w-[82%] xl:input xl:bg-greenLightDying xl:focus:outline-none" />

                {/* button container */}
                <div className="xl:flex xl:justify-between xl:ml-8 xl:mr-10 xl:items-center xl:mt-[1.4em]">
                    {/* button cancel */}
                    <button onClick={handleCancel} className="xl:border xl:px-4 xl:py-2 xl:rounded xl:border-greenLight">
                        Cancel
                    </button>

                    {/* button yes */}
                    <button onClick={handleSubmit} className="xl:border xl:px-4 xl:py-2 xl:rounded xl:text-white xl:bg-greenLight xl:border-greenLight">
                        Add
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddTodo;