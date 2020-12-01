import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import Feedback from '../Feedback/Feedback';
import FormHome from '../FormHome/FormHome';
import ClientLogo from '../Header/ClientLogo/ClientLogo';
import Header from '../Header/Header/Header';
import Services from '../Services/Services';
import Works from '../Works/Works';
import './Home.css'

const Home = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div className="home-container bg-light">
            <Header></Header>
            <ClientLogo></ClientLogo>
            <Services></Services>
            <Works></Works>
            <Feedback></Feedback>
            <FormHome></FormHome>
        </div>
    );
};

export default Home;