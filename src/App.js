import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Product from "./Product";
import Electronics from "./Electronics";
import ProtectedRoute from './ProtectedRoute';

const promise = loadStripe(
  "pk_test_51HiLItIyqDeNnW4f2GcP9tLOHh3BdQfH0hPiUXxt5HRpjoJ13z8wzsyVHChapL6QgaW4LMmJoFNVM2Av07eU5yjc009BHcA7I1"
);

function App() {
  const [{}, dispatch] = useStateValue();
  
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }

    });
 
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path='/electronics'>
          <Header />
            <Electronics/></Route>
          <ProtectedRoute path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </ProtectedRoute>
          <Route path="/">
            <Header />
            <Home mask="linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))"/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
