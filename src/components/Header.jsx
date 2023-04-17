import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { contextProvider } from '../providers/AuthProvider';

const Header = () => {
    const { logOut, user } = useContext(contextProvider);
    const handleLogOut = ()=>{
        logOut()
        .then(()=>{

        })
        .catch(error =>{
            console.error(error.message)
        })
    }
    return (
        <>
            <div className="navbar bg-base-300 text-center">
                <a className="btn btn-ghost normal-case text-xl me-52">daisyUI</a>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/orders'>Orders</Link>
                {
                    user && <Link to='/profile' className="btn btn-ghost normal-case text-xl">Profile</Link>
                }
                <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                {
                    user ? <>
                    <p>{user.email}</p>
                    <button onClick={handleLogOut} className="btn btn-xs">Log Out</button>
                    </>
                        : <Link to = '/login'><button className="btn btn-xs">Log In</button></Link>
                }
            </div>
        </>
    );
};

export default Header;