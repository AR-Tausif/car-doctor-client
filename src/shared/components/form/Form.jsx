import { useContext } from "react";
import { AuthContext } from "../../../provider/Provider";


const Form = ({ service }) => {
    const { user } = useContext(AuthContext)
    const { title, price, img, service_id } = service;
    // console.log(price);
    const handleCheckoutInput = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        const checkoutData = { customerName: name, email, date, price, img, service: title, service_id }
        console.log(checkoutData);
        fetch(`http://localhost:3500/bookings`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(checkoutData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert("booking done")
                }
            })
    }
    return (
        <form onSubmit={handleCheckoutInput} className="container mx-auto my-10">
            <div className=" bg-white flex flex-col mx-auto w-full p-28 mt-8 md:mt-0">
                <div className="grid grid-cols-2 gap-6">
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                        <input type="text" defaultValue={user?.displayName} id="name" name="firstName" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="date" className="leading-7 text-sm text-gray-600">Date</label>
                        <input type="date" id="date" name="date" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div className="relative mb-4">
                        <label htmlFor="price" className="leading-7 text-sm text-gray-600">Deu Amount</label>
                        <input type="number" defaultValue={price} id="price" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" defaultValue={user?.email} id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
                <div className="relative mb-4">
                    <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                    <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" defaultValue={""} />
                </div>
                <input type="submit" className="text-white bg-wbtn-primary border-0 py-2 px-6 focus:outline-none hover:opacity-80 cursor-pointer rounded text-lg" value="Order Confirm" />
                <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
            </div>
        </form>
    );
};

export default Form;