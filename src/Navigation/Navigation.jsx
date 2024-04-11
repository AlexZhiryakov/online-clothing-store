import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Navigation/Navigation.css';

function Navigation() {
  let location = useLocation();
  const get = JSON.parse(localStorage.getItem('productDetails'));

  return (
    <div className="Navigation">
      {location.pathname !== '/' ? (
        <div className="location">
          <Link to="/" className="main">
            <div>Главная</div>
          </Link>
          <div className="slash">/</div>
          <div className="locationNow">
            {location.pathname === '/order' ? (
              <div className="order">
                <div className="main">
                  <Link to="/bag" className="main">
                    Корзина
                  </Link>
                </div>
                <div className="slash">/</div>
                <div>Оформление заказа</div>
              </div>
            ) : location.pathname === '/successfullyOrder' ? (
              <div>Оформление заказа</div>
            ) : location.pathname === '/sneakers' ? (
              <div>Кроссовки</div>
            ) : location.pathname === '/slippers' ? (
              <div>Тапочки</div>
            ) : location.pathname === '/jackets' ? (
              <div>Куртки</div>
            ) : location.pathname === '/tshirts' ? (
              <div>Футболки</div>
            ) : location.pathname === '/trousers' ? (
              <div>Штаны</div>
            ) : location.pathname === '/shorts' ? (
              <div>Шорты</div>
            ) : location.pathname === '/hoodies' ? (
              <div>Толстовки</div>
            ) : location.pathname === '/accessories' ? (
              <div>Аксессуары</div>
            ) : location.pathname === '/payment' ? (
              <div>Оплата и доставка</div>
            ) : location.pathname === '/exchange' ? (
              <div>Обмен и возврат</div>
            ) : location.pathname === '/about' ? (
              <div>О компании</div>
            ) : location.pathname === '/contacts' ? (
              <div>Контакты</div>
            ) : location.pathname === '/original' ? (
              <div>Оригинал 100%</div>
            ) : location.pathname === '/heart' ? (
              <div>Избранное</div>
            ) : location.pathname === '/search' ? (
              <div>Поиск</div>
            ) : location.pathname === '/bag' ? (
              <div>Корзина</div>
            ) : location.pathname === '/subsribe' ? (
              <div>404</div>
            ) : (
              <div className="anotherNavigation">
                <div>
                  {get !== null ? (
                    get.category === 'sneakers' ? (
                      <Link to="/sneakers" className="main">
                        Кроссовки
                      </Link>
                    ) : get.category === 'hoody' ? (
                      <Link to="/hoodies" className="main">
                        Толстовки
                      </Link>
                    ) : get.category === 'trousers' ? (
                      <Link to="/trousers" className="main">
                        Штаны
                      </Link>
                    ) : get.category === 'shorts' ? (
                      <Link to="/shorts" className="main">
                        Шорты
                      </Link>
                    ) : null
                  ) : null}
                </div>
                <div>/</div>
                {get !== null ? <div>{get.name}</div> : null}
              </div>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Navigation;
