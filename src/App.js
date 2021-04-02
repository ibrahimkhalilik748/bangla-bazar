import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogIn from "./components/LogIn/LogIn";
import Header from "./components/Header/Header";
import Product from "./components/Product/Product";
import Orders from "./components/Orders/Orders";
import Admin from "./components/Admin/Admin";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Deals from "./components/Deals/Deals";
import Checkout from "./components/Product/Checkout/Checkout";


export const userContext = createContext();


function App() {

  const [loggedInUser, setLoggedInUser] = useState({})
  const [product, setProduct] = useState([]);
  return (
    <div>

      <userContext.Provider value={[loggedInUser, setLoggedInUser], [product, setProduct]}>
        <Router>
          <Header></Header>
          <Switch>
            {/* <Route path="/">
              // <Product></Product>
            </Route> */}
            <Route path="/home">
            <Product></Product>
            </Route>
            <PrivateRoute path="/orders">
              <Orders></Orders>
            </PrivateRoute>
            <Route path="/admin">
              <Admin></Admin>
            </Route>
            <Route path="/check:_id">
              <Checkout></Checkout>
            </Route>
            <PrivateRoute path="/deals">
              <Deals></Deals>
            </PrivateRoute>
            
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
          </Switch>
        </Router>
      </userContext.Provider>
    </div>
  );
}

export default App;
