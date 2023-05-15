import React from 'react';
import { AiFillCloseCircle } from "react-icons/ai";
const TableRow = ({ order, handleDeleteOrder }) => {
    const { _id, img, title, service, price, email, date } = order;

    return (
        <tr>
            <th>
                <button onClick={() => handleDeleteOrder(_id)} className="btn btn-circle btn-outline btn-error border-2 btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center gap-10">
                    <div className="avatar">
                        <div className="mask rounded w-32 h-32">
                            <img src={order?.img} alt="Service Image" />
                        </div>
                    </div>
                    <div className='space-y-5'>
                        <div className="font-bold text-2xl"> {order.title ? order.title : order.service} </div>
                        <div className="opacity-50 texl-xl">United States</div>
                    </div>
                </div>
            </td>
            <td>
                <h3 className='text-xl font-semibold'>$ {order?.price}</h3>
            </td>
            <td>
                <h3 className='text-xl font-semibold'>$ {order?.email}</h3>
            </td>
            <td>
                <h3 className='text-xl font-semibold'>$ {order?.date}</h3>
            </td>
            <th>
                <button className="btn border-none normal-case text-white bg-wbtn-primary rounded-xl"> Pending </button>
            </th>
        </tr>
    );
};

export default TableRow;