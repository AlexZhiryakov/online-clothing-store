import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import { useLocation } from 'react-router-dom';
import RouterNav from './RouterNav';
import Search from './Search';
import { changeBurgerState } from '../redux/cart/reducer';
import RouterProduct from '../main/SecondSection/RouterProduct';
import './Nav.css';

function Nav() {
  let location = useLocation();
  const dispatch = useDispatch();
  const [stateBurger, setStateBurger] = useState(false);

  const handleClick = (e) => {
    e.currentTarget.classList.toggle('active');
    setStateBurger(!stateBurger);
  };

  useEffect(() => {
    dispatch(changeBurgerState(stateBurger));
  }, [stateBurger]);

  const emptyFunction = () => {
    const hamElement = document.querySelector('.ham.hamRotate.ham4');
    hamElement.classList.toggle('active');
    setStateBurger(false);

    const element = document.getElementById('Header');
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="Nav">
      <div className="nav">
        <div className="leftNav">
          <Link to="/sneakers" className="Link">
            <div className="leftEl">Кроссовки</div>
          </Link>
          <Link to="/hoodies" className="Link">
            <div className="leftEl">Толстовки</div>
          </Link>
          <Link to="/trousers" className="Link">
            <div className="leftEl">Штаны</div>
          </Link>
          <Link to="/shorts" className="Link">
            <div className="leftEl">Шорты</div>
          </Link>
          <Link to="/slippers" className="Link">
            <div className="leftEl">Тапочки</div>
          </Link>
          <Link to="/jackets" className="Link">
            <div className="leftEl">Куртки</div>
          </Link>
          <Link to="/tshirts" className="Link">
            <div className="leftEl">Футболки</div>
          </Link>
          <Link to="/accessories" className="Link">
            <div className="leftEl">Аксессуары</div>
          </Link>
        </div>
        <div className="rightNav">
          <Link to="/search" className="rightLink">
            <div className="search">
              <button className="searchButton"></button>
            </div>
          </Link>
          <Link to="/heart" className="rightLink">
            <div className="heart" id="heart">
              <button className="heartButton" id="heartButton"></button>
            </div>
          </Link>
          <Link to="/bag" className="rightLink">
            <div className="bag">
              <button className="bagButton"></button>
            </div>
          </Link>
        </div>
      </div>
      <div class="breakPointBurgMenu">
        <div className="container">
          <div className="headerContainer">
            <div className="logoAfterBreakPoint"></div>
            <div className="burger">
              <svg
                className="ham hamRotate ham4"
                viewBox="0 0 100 100"
                width="80"
                onClick={handleClick}
              >
                <path
                  className="line top"
                  d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
                />
                <path className="line middle" d="m 70,50 h -40" />
                <path
                  className="line bottom"
                  d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
                />
              </svg>
            </div>
          </div>
          <div
            className={
              stateBurger === false ? 'basicContainerNone' : 'basicContainer'
            }
          >
            <ul>
              <div class="headerBurger">
                <Link
                  to="/search"
                  className="rightLink"
                  onClick={emptyFunction}
                >
                  <div className="search">
                    <button className="searchButton"></button>
                  </div>
                </Link>
                <Link to="/heart" className="rightLink" onClick={emptyFunction}>
                  <div className="heart">
                    <button className="heartButton" id="heartButton"></button>
                  </div>
                </Link>
                <Link to="/bag" className="rightLink" onClick={emptyFunction}>
                  <div className="bag">
                    <button className="bagButton"></button>
                  </div>
                </Link>
              </div>
              <div className="line"></div>
              <Link to="/payment" className="Link" onClick={emptyFunction}>
                <div className="navDiv">Оплата и доставка</div>
              </Link>
              <div className="line"></div>
              <Link to="/exchange" className="Link" onClick={emptyFunction}>
                <div className="navDiv">Обмен и возврат</div>
              </Link>
              <div className="line"></div>
              <Link to="/about" className="Link" onClick={emptyFunction}>
                <div className="navDiv">О компании</div>
              </Link>
              <div className="line"></div>
              <Link to="/contacts" className="Link" onClick={emptyFunction}>
                <div className="navDiv">Контакты</div>
              </Link>
              <div className="line"></div>
              <Link to="/original" className="Link" onClick={emptyFunction}>
                <div className="navDiv">Оригинал 100%</div>
              </Link>
              <div className="line"></div>
              <Link to="/sneakers" className="Link" onClick={emptyFunction}>
                <div className="navDiv">Кроссовки</div>
              </Link>
              <div className="line"></div>
              <Link to="/hoodies" className="Link" onClick={emptyFunction}>
                <div className="navDiv">Толстовки</div>
              </Link>
              <div className="line"></div>
              <Link to="/trousers" className="Link" onClick={emptyFunction}>
                <div className="navDiv">Штаны</div>
              </Link>
              <div className="line"></div>
              <Link to="/shorts" className="Link" onClick={emptyFunction}>
                <div className="navDiv">Шорты</div>
              </Link>
              <div className="line"></div>
              <Link to="/slippers" className="Link" onClick={emptyFunction}>
                <div className="navDiv">Тапочки</div>
              </Link>
              <div className="line"></div>
              <Link to="/jackets" className="Link" onClick={emptyFunction}>
                <div className="navDiv">Куртки</div>
              </Link>
              <div className="line"></div>
              <Link to="/tshirts" className="Link" onClick={emptyFunction}>
                <div className="navDiv">Футболки</div>
              </Link>
              <div className="line"></div>
              <Link to="/accessories" className="Link" onClick={emptyFunction}>
                <div className="navDiv">Аксессуары</div>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <Navigation />
      <RouterNav />
      <RouterProduct />
    </div>
  );
}

export default Nav;
