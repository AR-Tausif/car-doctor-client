
import { useContext } from 'react';
import { AuthContext } from '../provider/Provider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className="h-screen flex justify-center items-center"><progress className="progress w-56"></progress></div>
    }
    if (user?.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;