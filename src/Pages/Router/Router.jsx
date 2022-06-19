import MockmanEs from 'mockman-js';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../Auth/Login';
import Signup from '../Auth/Signup';
import Bookmark from '../Bookmark/Bookmark';
import Explore from '../Explore/Explore';
import Home from '../Home/Home';
import Profile from '../Profile/Profile';

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/explore' element={ <Explore /> } />
                <Route path='/profile' element={ <Profile /> } />
                <Route path='/bookmark' element={ <Bookmark /> } />
                
                <Route path='/login' element={ <Login /> } />
                <Route path='/signup' element={ <Signup /> } />
                
                <Route path="/mock" element={<MockmanEs />} />
            </Routes>
        </div>
    );
};

export default Router;