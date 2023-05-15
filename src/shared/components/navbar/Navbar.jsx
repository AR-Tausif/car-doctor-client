import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart } from 'react-icons/fa'
import { useContext } from "react";
import { AuthContext } from "../../../provider/Provider";

const Navbar = ({ items }) => {
    const { user, userSignOut } = useContext(AuthContext);
    const handleSignOut = () => {
        userSignOut()
            .then(() => { })
            .catch((error => { console.log(error) }))
    }
    return (
        <div className="container mx-auto ">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <a className="hover:opacity-80 text-xl">
                        <img src="/public/assets/logo.svg" alt="" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li> <Link to="/">Home</Link></li>
                        <li> <Link to="/about"> About</Link></li>
                        <li> <Link to="/services"> Services</Link></li>
                        <li> <Link to="/blog"> Blog</Link></li>
                        <li> <Link to="/contact"> Contact</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className=" flex items-center gap-7">
                        {
                            user ?

                                <>

                                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                                        <div className="indicator">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                            <Link to="/order"><button className="badge badge-sm badge-error indicator-item">8</button></Link>
                                        </div>
                                    </label>

                                    <FaSearch className="text-2xl" />


                                    <Link to="/signup">
                                        <button onClick={handleSignOut} className="btn btn-outline rounded outline-none border-wbtn-primary hover:bg-wbtn-primary hidden lg:flex">Sign Out</button>
                                    </Link>
                                </>

                                :
                                (
                                    <div>
                                        <Link to="/login">
                                            <button className="btn btn-outline rounded outline-none border-wbtn-primary hover:bg-wbtn-primary hidden lg:flex">Log In</button>
                                        </Link>
                                        <Link to="/signup">
                                            <button className="btn btn-outline rounded outline-none border-wbtn-primary hover:bg-wbtn-primary hidden lg:flex">Sign up</button>
                                        </Link>
                                    </div>
                                )
                        }
                    </div>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu relative right-1  menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-screen">
                            <li> <Link to="/">Home</Link></li>
                            <li> <Link to="/about"> About</Link></li>
                            <li> <Link to="/services"> Services</Link></li>
                            <li> <Link to="/blog"> Blog</Link></li>
                            <li> <Link to="/contact"> Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;