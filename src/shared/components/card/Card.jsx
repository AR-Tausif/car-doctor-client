
import { FaArrowCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom'
const Card = ({ service }) => {
    const { img, price, title, _id } = service;
    return (
        <div className="card  border shadow-sm">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="flex justify-between p-6 px-11">
                <div className="">
                    <h2 className="card-title">{title}</h2>
                    <h2 className="card-title text-red-600 font-bold"> $ {price}</h2>
                </div>
                <div className="card-actions place-self-end">
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-outline btn-warning rounded-full">
                            <FaArrowCircleRight className='text-xl' />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;