import {BrowserRouter, Routes, Route} from  "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Navbar from "../components/Navbar";
import MovieDetail from "../pages/MovieDetail";


const AppRouter = () => {
  return (
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="moviedetail" element={<MovieDetail/>}/>
    </Routes>

    </BrowserRouter>
    
  )
}

export default AppRouter