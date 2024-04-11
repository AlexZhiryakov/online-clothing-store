import React, { useRef, useEffect } from 'react';
import { Route, Routes, Link, HashRouter } from 'react-router-dom';
import Search from './Search';
import Bag from './Bag';
import Liked from './Liked';
import Payment from '../article/Payment/Payment';
import Exchange from '../article/Exchange/Exchange';
import About from '../article/About/About';
import Contacts from '../article/Contacts/Contacts';
import Original from '../article/Original/Original';
import './Nav.css';
import Sneakers from '../article/NavProducts/Sneakers';
import Trousers from '../article/NavProducts/Trousers';
import Shorts from '../article/NavProducts/Shorts';
import Hoodies from '../article/NavProducts/Hoodies';
import Error from '../article/Error/Error';

function RouterNav() {
  return (
    <div className="Router">
      <Routes>
        <Route path="/" element={''} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/exchange" element={<Exchange />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/original" element={<Original />} />

        <Route path="/sneakers" element={<Sneakers />} />
        <Route path="/slippers" element={<Error />} />
        <Route path="/jackets" element={<Error />} />
        <Route path="/tshirts" element={<Error />} />
        <Route path="/trousers" element={<Trousers />} />
        <Route path="/shorts" element={<Shorts />} />
        <Route path="/hoodies" element={<Hoodies />} />
        <Route path="/accessories" element={''} />
        <Route path="/search" element={<Search />} />
        <Route path="/heart" element={<Liked />} />
        <Route path="/bag" element={<Bag />} />
      </Routes>
    </div>
  );
}

export default RouterNav;
