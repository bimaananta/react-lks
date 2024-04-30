import { Routes, Route, useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar";
import Login from "../pages/auth/Login";
import Home from "../pages/Home"
import ReadProduct from "../pages/product/Read"
import CreateProduct from "../pages/product/Create"


export default function RouteIndex(){
    const navigate = useNavigate();

    function checkLogin(){
        const token = localStorage["token"];
        if(!token){
            return navigate('/login');
        }

        return true;
    }

    return (
        <>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/product' element={<ReadProduct middleware={{checkLogin}} />} />
                <Route path='/create-product' element={<CreateProduct middleware={{checkLogin}} />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </>
    )
}