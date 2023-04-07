import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';

const Home = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Header></Header>
            <div className='lg:container mx-auto text-2xl text-center my-5'>{navigation.state === "loading" && "Loading...."}</div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;