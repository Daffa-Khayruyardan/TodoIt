import { BrowserRouter, Routes, Route } from "react-router-dom";

// import layout
import UserLayout from "../layout/UserLayout";
import HomeLayout from "../layout/HomeLayout";

// import pages
import Login from "../pages/Login";
import Register from "../pages/Register";
import Todo from "../pages/Todo";
import Favorite from "../pages/Favorite";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        {/* user login and register layout */}
        <Route path="/" element={<UserLayout />} >
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* homepage layout */}
        <Route path="/" element={<HomeLayout />}>
          <Route path="todo" element={<Todo />} />
          <Route path="favorite" element={<Favorite />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;