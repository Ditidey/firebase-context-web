import React, { useContext } from 'react';
import { contextProvider } from '../providers/AuthProvider';

const Home = () => {
    const user = useContext(contextProvider)
    return (
        <div>
            {user && <p>{user.displayName}</p>}
        </div>
    );
};

export default Home;