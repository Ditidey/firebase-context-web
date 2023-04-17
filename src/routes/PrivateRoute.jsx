import React, { useContext } from 'react';
import { contextProvider } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(contextProvider);
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user){
        return children;
    }
    return (
        <div>
            {
                 <Navigate to='/login' replace={true}></Navigate>
            }
        </div>
    );
};

export default PrivateRoute;