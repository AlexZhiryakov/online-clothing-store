import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { useLocation } from 'react-router-dom';
// import { HashRouter as Router, Route, Liink } from "react-router-dom";

function Footer() {
  const scroll = () => {
    const element = document.getElementById();
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="Footer">
      <div className="line"></div>
      <div className="allColumns">
        <div className="firstColumn">
          <div className="logo"></div>
          <div className="text">
            OGstyle - магазин по продаже оригинальной одежды и обуви мировых
            брендов
          </div>
          <div className="text">+7 (963) 524-80-60</div>
          <div className="text">order@ogstyle.ru</div>
          <div className="allLogos">
            <a className="firstLogo" href="https://t.me/79635248060" target='blank'></a>
            <a className="secondLogo" href='https://api.whatsapp.com/send/?phone=79635248060' target='blank'></a>
          </div>
        </div>
        <div className="linePrivate"></div>
        <div className="secondColumnAll">
          <div className="secondColumn">
            <Link
              to="/sneakers"
              className="Link"
              onClick={() => scroll()}
            >
              <div className="text">Кроссовки</div>
            </Link>
            <Link
              to="/tshirts"
              className="Link"
              onClick={() => scroll()}
            >
              <div className="text">Футболки</div>
            </Link>
            <Link
              to="/slippers"
              className="Link"
              onClick={() => scroll()}
            >
              <div className="text">Тапочки</div>
            </Link>
            <Link
              to="/jackets"
              className="Link"
              onClick={() => scroll()}
            >
              <div className="text">Куртки</div>
            </Link>
          </div>
          <div className="thirdColumn">
            <Link
              to="/trousers"
              className="Link"
              onClick={() => scroll()}
            >
              <div className="text">Штаны</div>
            </Link>
            <Link
              to="/shorts"
              className="Link"
              onClick={() => scroll()}
            >
              <div className="text">Шорты</div>
            </Link>
            <Link
              to="/hoodies"
              className="Link"
              onClick={() => scroll()}
            >
              <div className="text">Толстовки</div>
            </Link>
            <Link
              to="/accessories"
              className="Link"
              onClick={() => scroll()}
            >
              <div className="text">Аксессуары</div>
            </Link>
          </div>
          <div className="fourthColumn">
            <Link
              to="/payment"
              className="Link"
              onClick={() => scroll()}
            >
              <div className="text">Оплата и доставка</div>
            </Link>
            <Link
              to="/exchange"
              className="Link"
              onClick={() => scroll()}
            >
              <div className="text">Обмен и возврат</div>
            </Link>
            <Link
              to="/original"
              className="Link"
              onClick={() => scroll()}
            >
              <div className="text">Оригинал 100%</div>
            </Link>
          </div>
          <div className="fifthColumn">
            <Link to="/about" className="Link" onClick={() => scroll()}>
              <div className="text">О компании</div>
            </Link>
            <Link
              to="/contacts"
              className="Link"
              onClick={() => scroll()}
            >
              <div className="text">Контакты</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="lineTwo"></div>
      <div className="endPage">
        <div>© OGstyle 2024</div>
        <div>Политика конфиденциальности</div>
        <div>ООО “Жиряков Александр Витальевич”</div>
      </div>
    </div>
  );
}

export default Footer;
