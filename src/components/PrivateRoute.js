import { Route, Navigate, Outlet } from 'react-router-dom';

function PrivateRoute({ element: Component, ...rest }) {
    const isAuthenticated = true;

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute