import { useEffect, useState } from 'react';
import TitleHead from '../../../components/titleHead/TitleHead';
import Card from '../../../components/card/Card';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("http://localhost:3500/services")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='container mx-auto'>
            <TitleHead />
            <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-5">
                {
                    services.map(service => <Card key={service._id} service={service} />)
                }
            </div>
            <button className="btn mx-auto border-white bg-wbtn-primary rounded text-base hover:bg-red-600 text-white">More Services</button>
        </div>
    );
};

export default Services;