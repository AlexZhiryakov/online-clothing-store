import React from 'react';
import FirstSection from './FirstSection/NewCollection';
import SecondSection from './SecondSection/Popular';
import ThirdSection from './ThirdSection/ThirdSection';
import FourthSection from './FourthSection/Sale';
import FifthSection from './FifthSection/Subsribe';
import { useLocation } from 'react-router-dom';
import './Main.css';

function Main() {
  let location = useLocation();
  const getID = JSON.parse(localStorage.getItem('productDetails'));

  return (
    <div className="Main">
      {location.pathname !== '/original' &&
      location.pathname !== '/contacts' &&
      location.pathname !== '/about' &&
      location.pathname !== '/exchange' &&
      location.pathname !== '/payment' &&
      location.pathname !== '/sneakers' &&
      location.pathname !== '/slippers' &&
      location.pathname !== '/jackets' &&
      location.pathname !== '/tshirts' &&
      location.pathname !== '/trousers' &&
      location.pathname !== '/shorts' &&
      location.pathname !== '/hoodies' &&
      location.pathname !== '/accessories' &&
      location.pathname !== '/search' &&
      location.pathname !== '/heart' &&
      location.pathname !== '/bag' &&
      location.pathname !== '/order' &&
      location.pathname !== '/successfullyOrder' &&
      location.pathname !== '/subsribe' &&
      location.pathname !== (getID !== null ? `/${getID.id}` : null) ? (
        <div>
          <FirstSection />
          <SecondSection />
          <ThirdSection />
          <FourthSection />
        </div>
      ) : (
        false
      )}
      {location.pathname !== '/order' ? <FifthSection /> : null}
    </div>
  );
}

export default Main;
