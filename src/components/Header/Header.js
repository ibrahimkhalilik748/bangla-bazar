import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import './Header.css'

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [newUser, setNewUser] = useState(false);
    // {newUser ? 'Sign Up' : 'Log In'}
    return (
        <header className="container">
            <div className="row mt-5">
                <div className="col-md-5">
                    <h1 id="weight">Bangla Bazar</h1>
                </div>
                <div className="col-md-7">
                    <ul className="flat-left">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/orders">Orders</Link></li>
                        <li><Link to="/admin">Admin</Link></li>
                        <li><Link to="/deals">Deals</Link></li>
                        <li style={{color: 'white'}}  className="btn btn-outline-success mar" htmlFor="newUser"><Link to="/login">{newUser ? 'Log In' : 'Log Out'}</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;