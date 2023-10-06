import { Link, NavLink } from "react-router-dom";

import logo from '../../assets/logo.png';
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const navLinks = <>

        <li>
            <NavLink to='/'>Home</NavLink>
        </li>
        <li>
            <NavLink to='/news'>News</NavLink>
        </li>
        <li>
            <NavLink to='/destination'>Destination</NavLink>
        </li>
        <li>
            <NavLink to='/blog'>Blog</NavLink>
        </li>
        <li>
            <NavLink to='/contact'>Contact</NavLink>
        </li>
    </>
    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    return (
        <div>

            <div className="navbar mt-4 bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>

                    </div>
                    <img className="w-40 h-12" src={logo} alt="" />
                    <input type="text" placeholder="Search here" className="input input-ghost ml-24 input-sm w-full max-w-xs" />
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                    {
                        user ? <Link to='/login'><button onClick={handleLogOut} className="btn bg-[#F9A51A]">Sign Out</button></Link>
                            : 
                            <Link to='/login'><button  className="btn bg-[#F9A51A]">Login</button></Link>
                    }
                </div>
                <div className="navbar-end lg:hidden">
                    {
                        user ? <Link to='/login'><button className="btn bg-[#F9A51A]">Sign Out</button></Link>
                            : <Link to='/login'><button onClick={handleLogOut} className="btn bg-[#F9A51A]">Login</button></Link>
                    }
                </div>
            </div>


        </div>
    );
};

export default Navbar;