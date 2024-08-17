// import some packages
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

const AddTodo = () => {
    // get data 
    const [getTitle,setTitle] = useState('');

    // initiate use navigate
    const navigate = useNavigate();

    // config axios
    const configAxios = {
        headers: {
            'Authorization': `Bearer ${document.cookie.split('=')[1]}`
        }
    }

    // create handle submit
    const handleSubmit = () => {
        // get current username
        const currId = localStorage.getItem('currId');

        if(getTitle === '') {
            // submit using axios post when no data inside input field
            axios.post(`http://localhost:3000/api/todo/${currId}`, { title: 'untitled' }, configAxios)
                .then(res => console.log(res))
                .catch(err => console.log(err)); 

            // navigate to another page
            navigate('/todo')
        }else {
            // submit using axios post 
            axios.post(`http://localhost:3000/api/todo/${currId}`, { title: getTitle}, configAxios)
                .then(res => console.log(res))
                .catch(err => console.log(err));

            // navigate to another page
            navigate('/todo')
        }
    };

    // handlle cancel add
    const handleCancel = () => {
        navigate('/todo');
    }

    return(
        <div className="flex absolute top-[10em] right-[12em] items-center bg-silverLight flex-1">
            {/* form container */}
            <form action="" className="shadow-md bg-white w-96 h-64">
                {/* form title */}
                <h1 className="pt-[1em] pl-[1.5em] text-2xl">Add New</h1>

                {/* form description */}
                <p className="pt-[1em] pl-[2.1em]">Add new activities enter here</p>

                {/* input field */}
                <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title"  className="h-10 pl-4 rounded ml-[1.9em] mt-[1em] w-[82%] input bg-greenLightDying focus:outline-none" />

                {/* button container */}
                <div className="flex justify-between ml-8 mr-10 items-center mt-[1.4em]">
                    {/* button cancel */}
                    <button onClick={handleCancel} className="border px-4 py-2 rounded border-greenLight">
                        Cancel
                    </button>

                    {/* button yes */}
                    <button onClick={handleSubmit} className="border px-4 py-2 rounded text-white bg-greenLight border-greenLight">
                        Add
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddTodo;