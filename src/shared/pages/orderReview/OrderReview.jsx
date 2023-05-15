import { useContext, useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from "../../components/header/Header"
import OrdersTable from './orderedLists/OrdersTable';
import Footer from '../../components/footer/Footer';
import { AuthContext } from '../../../provider/Provider';
const OrderReview = () => {
    const { user } = useContext(AuthContext)
    // const loadData = useLoaderData();
    const [orders, setOrders] = useState([]);
    // console.log(user.email);
    const url = `http://localhost:3500/bookings?email=${user?.email}&sort=1`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setOrders(data)
            })
    }, [])

    const handleDeleteOrder = id => {
        const progress = confirm("Are you sure for delete?")
        if (progress) {
            fetch(`http://localhost:3500/bookings/${id}`, {
                method: "DELETE",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify()
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        const deleteFilter = orders.filter(order => order._id !== id)
                        setOrders(deleteFilter);
                    }
                })
        }
    }

    return (
        <div>
            <Navbar items={orders.length} />
            <Header />
            <OrdersTable handleDeleteOrder={handleDeleteOrder} orders={orders} />
            <Footer />
        </div>
    );
};

export default OrderReview;