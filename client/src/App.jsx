// import some packages
import { Route, Routes, Navigate } from "react-router-dom";

// import layout
import UserLayout from "../layout/UserLayout";
import HomeLayout from "../layout/HomeLayout";

// import pages
import Login from "../pages/Login";
import Register from "../pages/Register";
import Todo from "../pages/Todo";
import EditTodo from "../pages/EditTodo";
import AddTodo from "../pages/AddTodo";
import Setting from "../pages/Setting";

const App = () => {
  return(
    <Routes>
      {/* user login and register layout */}
      <Route path="/" element={<UserLayout />} >
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      {/* homepage layout */}
      <Route path="/" element={<HomeLayout />}>
        {/* todo */}
        <Route path="todo" element={<Todo />}>
          <Route path="setting" element={<Setting />} />
        <Route/>

        <Route path="todo/add" element={<AddTodo />} />
        <Route path="todo/edit/:id" element={<EditTodo />} />
      </Route>
      
      </Route>
    </Routes>
  )
}

export default App;