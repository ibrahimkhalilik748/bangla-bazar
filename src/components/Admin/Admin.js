import React from 'react';
import './Admin.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ManageProduct from '../ManageProduct/ManageProduct';
import AddProducts from '../AddProducts/AddProducts';

const Admin = () => {
    return (
        <Router>
            <div className="container">
                <ul className="flat-left">
                    <li className="btn btn-outline-success m-1"><Link to="/manageProduct">Manage Product</Link></li>
                    <li className="btn btn-outline-success m-1"><Link to="/addProducts">Add Product</Link></li>
                    <li className="btn btn-outline-success m-1"><Link to="/">Edit Product</Link></li>
                </ul>
            </div><br /><br />
            <Switch>
                <Route path="/manageProduct">
                    <ManageProduct></ManageProduct>
                </Route>
                <Route path="/addProducts">
                    <AddProducts></AddProducts>
                </Route>
            </Switch>
        </Router>
    );
};

export default Admin;