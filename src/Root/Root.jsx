import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";


const Root = () => {
    return (
        <div className="max-w-7xl mx-auto font-montserrat ">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;