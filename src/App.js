import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Sidebar from './components/Dashboard/Sidebar/Sidebar';
import Order from './components/Dashboard/Order/Order';
import MakeAdmin from './components/Dashboard/Dashboard/MakeAdmin/MakeAdmin';
import AddService from './components/Dashboard/AddService/AddService';
import { useState, createContext } from 'react';
import Review from './components/Dashboard/Review/Review';
import MyServices from './components/Dashboard/MyServices/MyServices';
import ServiceList from './components/Dashboard/ServiceList/ServiceList';
import PrivateRoute from './components/Login/PrivateRoute';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <PrivateRoute path="/myServices">
            <MyServices></MyServices>
          </PrivateRoute>
          <PrivateRoute path="/serviceList">
            <ServiceList></ServiceList>
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute path="/order/form">
            <Order></Order>
          </PrivateRoute>
          <PrivateRoute path="/order/:title">
            <Order></Order>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
