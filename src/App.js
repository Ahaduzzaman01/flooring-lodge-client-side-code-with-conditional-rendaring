import React, { createContext, useState } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Book from "./Components/Dashboard/Book/Book";
import BookingList from "./Components/Dashboard/BookingList/BookingList";
import Review from "./Components/Dashboard/Review/Review";
import OrderList from "./Components/Dashboard/OrderList/OrderList";
import AddService from "./Components/Dashboard/AddService/AddService";
import MakeAdmin from "./Components/Dashboard/MakeAdmin/MakeAdmin";
import ManageServices from "./Components/Dashboard/ManageServices/ManageServices";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AboutUs from "./Components/Home/AboutUs/AboutUs";
import AnotherNavBar from "./Components/AnotherNavBar/AnotherNavBar";
import Projects from "./Components/Home/Projects/Projects";


export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/about">
            <AnotherNavBar></AnotherNavBar>
            <AboutUs></AboutUs>
          </Route>

          <Route path="/projects">
            <AnotherNavBar></AnotherNavBar>
            <Projects></Projects>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>

          <PrivateRoute path="/book/:id">
            <Book></Book>
          </PrivateRoute>

          <Route path="/book">
            <Book></Book>
          </Route>

          <Route path="/bookingList">
            <BookingList></BookingList>
          </Route>

          <Route path="/review">
            <Review></Review>
          </Route>

          <Route path="/orderList">
            <OrderList></OrderList>
          </Route>

          <Route path="/addService">
            <AddService></AddService>
          </Route>

          <Route path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>

          <Route path="/manageServices">
            <ManageServices></ManageServices>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
