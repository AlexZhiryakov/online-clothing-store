import React from 'react';
import './Sale.css';
import { Link } from 'react-router-dom';

function Sale() {
  const scroll = () => {
    const element = document.getElementById('Header');
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="Sale">
      <div className="Section">
        <h2 className="nameSale">Распродажа одежды и обуви</h2>
        <div className="allColumns">
          <div className="firstColumn">
            <Link to="/sneakers" className="Link" onClick={() => scroll()}>
              <div className="sneakers">
                <div className="column">
                  <div className="nameFirstInFirstColumn">Кроссовки</div>
                  <div className="priceFirstInFirstColumn">от 8 990 ₽</div>
                </div>
                <div className="sneaker"></div>
              </div>
            </Link>

            <div className="delivery">
              <div className="deliveryColumn">
                <div className="nameDelivery">Доставка по городу</div>
                <div className="descriptionDelivery">
                  Стандартная доставка от 4 дней - 500р<br></br>Доставка в
                  постомат или пункт выдачи заказов
                </div>
                <Link to="/payment" className="Link" onClick={() => scroll()}>
                  <button className="butDelivery">Выбрать</button>
                </Link>
              </div>
              <div className="route"></div>
            </div>
          </div>

          <div className="secondColumn">
            <div className="firstString">
              <Link to="/tshirts" className="Link" onClick={() => scroll()}>
                <div className="tshirt">
                  <div className="columnTShirt">
                    <div className="nameTShirt">Футболки</div>
                    <div className="priceTShirt">от 4 990 ₽</div>
                  </div>
                  <div className="bgTShirt"></div>
                </div>
              </Link>
              <Link to="/trousers" className="Link" onClick={() => scroll()}>
                <div className="trousers">
                  <div className="trousersColumn">
                    <div className="nameTrousers">Штаны</div>
                    <div className="priceTrousers" id='priceTrousers'>от 10 990 ₽</div>
                  </div>
                  <div className="bgTrousers"></div>
                </div>
              </Link>
            </div>

            <div className="secondString">
              <Link to="/hoodies" className="Link" onClick={() => scroll()}>
                <div className="hoody">
                  <div className="HoodyColumn">
                    <div className="nameHoody">Толстовки</div>
                    <div className="priceHoody">от 6 990 ₽</div>
                  </div>
                  <div className="bgHoody"></div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sale;
