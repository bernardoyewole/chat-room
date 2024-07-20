import { Route, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../provider/AuthProvider';

function PrivateRoute({ element: Component }) {
    const { token } = useAuth();
    if (token == null) {
        return <Navigate to="/login" />
    } else if (token.length > 0) {
        return <Outlet />
    }
}

export default PrivateRoute