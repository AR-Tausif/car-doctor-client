import Navbar from "../../components/navbar/Navbar";
import { FaFacebook, FaLinkedin } from "react-icons/fa"
import { BsGoogle } from "react-icons/bs"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../../../provider/Provider";
const Login = () => {
    const { userSignInWithEmail } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/"
    const handleLoginInput = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const data = { email, password }
        userSignInWithEmail(email, password)
            .then(result => {
                const loggedUser = result.user;
                navigate(from)
            })
            .catch((error) => {
                // const errorCode = error.code;
                const eroorMassage = error.message;
                console.error(eroorMassage);
            })
    }
    return (
        <>
            <Navbar />
            <section className="text-gray-600 body-font relative">
                <form onSubmit={handleLoginInput} className="container px-5 py-24 mx-auto flex sm:flex-wrap justify-center">
                    <div className=" p-10">
                        <img src="/public/assets/images/login/login.svg" alt="" />
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full p-8 mt-8 md:mt-0">
                        <h2 className="text-gray-900 text-2xl mb-1 font-bold title-font py-11 text-center">Login</h2>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                            <input type="password" id="password" name="password" placeholder="Your Password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>

                        <input type="submit" className="text-white text-center font-semibold bg-wbtn-primary border-0 py-2 px-6 focus:outline-none hover:bg-opacity-80 rounded text-lg" value="Login" />
                        <div className="w-3/4 mx-auto text-center space-y-4">
                            <p>Or sign in with</p>
                            <div className="space-x-5">
                                <button className="bg-gray-200 p-2 rounded-full text-xl"> <FaFacebook /> </button>
                                <button className="bg-gray-200 p-2 rounded-full text-xl"> <FaLinkedin /> </button>
                                <button className="bg-gray-200 p-2 rounded-full text-xl"> <BsGoogle /> </button>
                            </div>
                            <p>Already have an account? <Link to="/signup">Sign Up</Link> </p>
                        </div>
                    </div>
                </form>
            </section>
        </>
    );
};

export default Login;