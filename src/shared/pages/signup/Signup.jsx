
import Navbar from '../../components/navbar/Navbar';
import { FaFacebook, FaLinkedin } from "react-icons/fa"
import { BsGoogle } from "react-icons/bs"
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../provider/Provider';
const Signup = () => {

    const { registerNewUserWithEmail, registerWithGoogle } = useContext(AuthContext)
    const handleSignUpInput = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        const data = { name, email, password }
        console.log(data);
        registerNewUserWithEmail(email, password)
            .then(result => {
                const user = result.user;
            })
            .catch(err => console.error(err))
        form.reset()
    }

    const handleRegisterGoogle = () => {
        registerWithGoogle()
            .then(result => {
                console.log(result.user);
            })
    }
    return (
        <>
            <Navbar />
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto flex sm:flex-wrap justify-center">
                    <div className=" p-10">
                        <img src="/public/assets/images/login/login.svg" alt="" />
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 bg-white border     flex flex-col md:ml-auto w-full p-8 mt-8 md:mt-0">
                        <h2 className="text-gray-900 text-2xl mb-1 font-bold title-font py-11 text-center">Sign Up</h2>
                        <form onSubmit={handleSignUpInput} className="">
                            <div className="relative mb-4">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                <input type="name" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                                <input type="password" id="password" name="password" placeholder="Your Password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                            </div>

                            <input type='submit' className="text-white text-center font-semibold cursor-pointer bg-wbtn-primary border-0 py-2 px-6 focus:outline-none hover:bg-opacity-80 rounded text-lg" value="Sign Up" required />
                        </form>
                        <div className="w-3/4 mx-auto text-center space-y-4">
                            <p>Or sign in with</p>
                            <div className="space-x-5">
                                <button className="bg-gray-200 p-2 rounded-full text-xl"> <FaFacebook /> </button>
                                <button className="bg-gray-200 p-2 rounded-full text-xl"> <FaLinkedin /> </button>
                                <button onClick={handleRegisterGoogle} className="bg-gray-200 p-2 rounded-full text-xl"> <BsGoogle /> </button>
                            </div>
                            <p>Already have an account? <Link to="/login">Login</Link> </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Signup;