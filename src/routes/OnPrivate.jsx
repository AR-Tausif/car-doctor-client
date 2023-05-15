
import { useContext } from 'react';
import { AuthContext } from '../provider/Provider';
import { Navigate, useLocation } from 'react-router-dom';

const OnPrivate = ({ children }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    if (!user) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default OnPrivate;