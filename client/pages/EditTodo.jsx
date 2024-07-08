// import some packages
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';

const AddTodo = () => {
    // get params 
    const {id} = useParams();

    // get content by cards id
    const [contentData,setContentData] = useState();

    // get modified data
    const [modifyTitle,setModifyTitle] = useState();

    // initiate use navigate
    const navigate = useNavigate();

    // get userId 
    const userId = localStorage.getItem('currId');

    useEffect(() => {
        axios.get(`http://localhost:3000/api/todo/${userId}/${id}`)
            .then(res => setContentData(res.data.title))
            .catch(err => console.log(err));
    }, [])

    // return nothing 
    if(contentData === null) return 

    // handle submit changes 
    const handleSubmitChanges = () => {
        axios.put(`http://localhost:3000/api/todo/${userId}/${id}`, {title: modifyTitle})
            .then(res => console.log(succesfully))
            .catch(err => console.log("error")); 

        // navigate to another page
        navigate('/todo')
    };

    // handle cancel 
    const handleCancel = () => {
        navigate('/todo');
    }

    return(
        <div className="xl:flex absolute xl:top-[10em] right-[20em] xl:bg-silverLight xl:flex-1">
            {/* form container */}
            <form action="" className="xl:shadow-md xl:bg-white xl:w-96 xl:h-64">
                {/* form title */}
                <h1 className="xl:pt-[1em] xl:pl-[1.5em] xl:text-2xl">Edit Title</h1>

                {/* form description */}
                <p className="xl:pt-[1em] xl:pl-[2.1em]">Edit existing activities enter here</p>

                {/* input field */}
                <input onChange={(e) => setModifyTitle(e.target.value)} type="text" placeholder="Title" defaultValue={contentData} className="xl:h-10 xl:pl-4 xl:rounded xl:ml-[1.9em] xl:mt-[1em] xl:w-[82%] xl:input xl:bg-greenLightDying xl:focus:outline-none" />

                {/* button container */}
                <div className="xl:flex xl:justify-between xl:ml-8 xl:mr-10 xl:items-center xl:mt-[1.4em]">
                    {/* button cancel */}
                    <button onClick={handleCancel} className="xl:border xl:px-4 xl:py-2 xl:rounded xl:border-greenLight">
                        Cancel
                    </button>

                    {/* button yes */}
                    <button onClick={handleSubmitChanges} className="xl:border xl:px-4 xl:py-2 xl:rounded xl:text-white xl:bg-greenLight xl:border-greenLight">
                        change
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddTodo;