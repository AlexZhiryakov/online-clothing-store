import React, { useEffect, useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 1500;
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);

  return (
    <div className="Header" id='Header'>
      <div className="header">
        <div className="leftHeader">
          <Link to="/"><div className="logo"></div></Link>
          <div className="nav">
            <Link to="/payment" className="paymentLink">
              <div className="navDiv">Оплата и доставка</div>
            </Link>
            <Link to="/exchange" className="exchangeLink">
              <div className="navDiv">Обмен и возврат</div>
            </Link>
            <Link to="/about" className="aboutLink">
              <div className="navDiv">О компании</div>
            </Link>
            <Link to="/contacts" className="contactsLink">
              <div className="navDiv">Контакты</div>
            </Link>
            <Link to="/original" className="originalLink">
              <div className="navDiv">Оригинал 100%</div>
            </Link>
          </div>
        </div>

        <div className="rightHeader">
          <a className="wtsRound" href='https://api.whatsapp.com/send/?phone=79635248060' target='blank'></a>
          <a className="tgRound" href="https://t.me/79635248060" target='blank'></a>
          <div className="imgWidth">
            {width > breakpoint ? (
              <div className="email">order@ogstyle.ru</div>
            ) : (
              <a className="emailImg" href="mailto:order@ogstyle.ru" target='blank'></a>
            )}
            {width > breakpoint ? (
              <div className="phone">+7 (902) 041-63-39</div>
            ) : (
              <a className="phoneImg" href='tel:+79635248060' target='blank'></a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
