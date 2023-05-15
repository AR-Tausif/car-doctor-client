import TableRow from "../../../components/table/TableRow";

const OrdersTable = ({ orders, handleDeleteOrder }) => {

    return (
        <div className="container mx-auto overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
                {/* <thead>
                    <tr>
                        <th>
                            <label className="text-red-500">
                                Remove
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </thead> */}
                <tbody>
                    {/* row 1 */}
                    {
                        orders.map(order => <TableRow key={order._id} handleDeleteOrder={handleDeleteOrder} order={order} />)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default OrdersTable;