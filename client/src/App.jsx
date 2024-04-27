import { BrowserRouter, Routes, Route } from "react-router-dom";

// import layout
import UserLayout from "../layout/UserLayout";

// import pages
import Login from "../pages/Login";
import Register from "../pages/Register";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />} >
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;