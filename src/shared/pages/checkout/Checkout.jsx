
import { useState } from 'react';
import Form from '../../components/form/Form';
import Header from '../../components/header/Header';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const loadData = useLoaderData();
    const [service, setServices] = useState(loadData);
    console.log(service);
    return (
        <div>
            <Header />
            <Form service={service} />
        </div>
    );
};

export default Checkout;