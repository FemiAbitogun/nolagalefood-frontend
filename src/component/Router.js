import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CinannamonChoc from '../component/pastry/CinannamonChoc';
import HoneyGarlic from '../component/pastry/HoneyGarlic'

import SweetChilli from '../component/pastry/SweetChilli'
import DatesButter from '../component/pastry/DatesButter'
import ClovesRaisins from '../component/pastry/ClovesRaisins'
import NutmegCoffe from '../component/pastry/NutmegCoffe'
import AlmondOats from '../component/pastry/AlmondOats'
import Home from './Home';
import Header from './authentication/Header';
import Footer from './authentication/Footer';
import Login from './authentication/Login';

import ContactUs from './ContactUs';
import Products from './Products';


function _Router() {
    return (
        <div className='Router'>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route exact path='/' element={<Home />} />

                    <Route path='/loginpage' element={<Login />} />
                    <Route path='/Products' element={<Products />} />
                    <Route path='/contactUs' element={<ContactUs />} />
                    <Route path='/cinnamon' element={<CinannamonChoc />} />
                    <Route path='/HoneyGarlicGinger' element={<HoneyGarlic />} />
                    <Route path='/sweetChilliCheese' element={<SweetChilli />} />
                    <Route path='/DatesButterPecan' element={<DatesButter />} />
                    <Route path='/ClovesRaisins' element={<ClovesRaisins />} />

                    <Route path='/NutmegCoffe' element={<NutmegCoffe />} />

                    <Route path='/AlmondOats' element={<AlmondOats />} />



                </Routes>

                < Footer />


            </BrowserRouter>
        </div>
    )
}

export default _Router