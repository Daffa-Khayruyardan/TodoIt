// import packages
import ReactDOM from "react-dom";

const AddTodo = ({visible}) => {
    return ReactDOM.createPortal(
        // background
        <div className="h-[100vh] w-[100vw] flex justify-center items-center absolute top-0 bg-[rgba(0,0,0,0.4)]">
            {/* add todo modal form */}
            <div className="bg-white rounded-sm p-[1em]">
                {/* title */}
                <h1 className="font-bold text-lg">Add New</h1>

                {/* input title */}
                <form>
                    <input type="text" placeholder="Title" className="pl-[0.6em]" />
                </form>
            </div>
        </div>,
        document.getElementById('add-todo')
    )
}

export default AddTodo;