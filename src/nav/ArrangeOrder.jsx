import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ArrangeOrder.css';

function ArrangeOrder() {
  const [selectedWay, setSelectedWay] = useState(null);
  const [payment, setPayment] = useState(null);
  const [successfullyOrder, setSuccessfullyOrder] = useState(false);
  const itemsList = JSON.parse(localStorage.getItem('itemsList'));
  const totalPriceList = JSON.parse(localStorage.getItem('totalPriceOrder'));

  const clickWayDelivery = (id) => {
    setSelectedWay(id);
  };

  const clickSuccessfullyOrder = () => {
    setSuccessfullyOrder(!false);
    localStorage.clear();
    localStorage.setItem('newTotalPrice', JSON.stringify([]));
  };

  const clickPayment = (id) => {
    setPayment(id);
  };

  const getFirstSize = (size) => {
    return size.first;
  };

  return (
    <div className="ArrangeOrder">
      <h2 className="name">Оформление заказа</h2>
      <div className="firstPoint">
        <div className="nameFirstPoint">1. Товары в заказе</div>
        {itemsList?.map((product) => (
          <div className="productList" key={product.id}>
            <div className="products">
              <div
                className="productImg"
                style={{
                  backgroundImage: `url(${product.img})`,
                }}
              ></div>

              <div className="informationAboutProduct">
                <div className="productName">{product.name}</div>
                <div className="lineSize">
                  <div className="nameSize">Размер</div>
                  {product.selectedSize ? (
                    <div className="productSize">{product.selectedSize}</div>
                  ) : (
                    <div className="productSize">
                      {getFirstSize(product.size)}
                    </div>
                  )}
                </div>
                <div className="lineColor">
                  <div className="nameColor">Цвет</div>
                  {product.color === 'brown' ? (
                    <div className="brown"></div>
                  ) : product.color === 'green' ? (
                    <div className="green"></div>
                  ) : product.color === 'pink' ? (
                    <div className="pink"></div>
                  ) : product.color === 'blue' ? (
                    <div className="blue"></div>
                  ) : null}
                </div>
                <div className="lineQuantity">
                  Количество: {product.quantity}
                </div>
              </div>

              <div className="allPrice">
                <div className="price">
                  {Intl.NumberFormat('ru-RU').format(
                    product.price * product.quantity
                  )}{' '}
                  ₽
                </div>
                <del className="oldPrice">
                  {Intl.NumberFormat('ru-RU').format(
                    product.oldPrice * product.quantity
                  )}{' '}
                  ₽
                </del>
              </div>
            </div>
          </div>
        ))}
        <div className="buyAll">
          <div className="totalPriceLine">
            <div className="totalPriceText">Итого</div>
            <div className="totalPrice">
              {Intl.NumberFormat('ru-RU').format(totalPriceList)} ₽
            </div>
          </div>
        </div>
      </div>
      <div className="secondPoint">
        <div className="nameSecondPoint">2. Доставка</div>
        <div className="secondPointInfo">
          <div className="menuWithCity">
            <div className="city">Город</div>
            <select>
              <option value="" disabled selected>
                Ваш город
              </option>
              <option value="option1">Москва</option>
              <option value="option2">Санкт-Петербург</option>
              <option value="option3">Новосибирск</option>
              <option value="Барнаул">Барнаул</option>
              <option value="Волгоград">Волгоград</option>
              <option value="Воронеж">Воронеж</option>
              <option value="Екатеринбург">Екатеринбург</option>
              <option value="Ижевск">Ижевск</option>
              <option value="Казань">Казань</option>
              <option value="Краснодар">Краснодар</option>
              <option value="Красноярск">Красноярск</option>
              <option value="Нижний Новгород">Нижний Новгород</option>
              <option value="Омск">Омск</option>
              <option value="Пермь">Пермь</option>
              <option value="Ростов-на-Дону">Ростов-на-Дону</option>
              <option value="Самара">Самара</option>
              <option value="Саратов">Саратов</option>
              <option value="Тольятти">Тольятти</option>
              <option value="Уфа">Уфа</option>
              <option value="Челябинск">Челябинск</option>
            </select>
          </div>
          <div className="menuWithStreet">
            <div className="street">Адрес</div>
            <input placeholder="Ваш адрес" />
          </div>
          <div className="choiceWayDelivery">
            <div className="nameChoiceWayDelivery">
              Выберите способ доставки
            </div>
            <div className="ways">
              <div
                className="way"
                onClick={() => clickWayDelivery(1)}
                style={{
                  border: selectedWay === 1 ? '1px solid black' : 'none',
                }}
              >
                <div className="nameWay">Почта России</div>
                <div className="descWay">
                  Цена и сроки доставки рассчитываются автоматически и зависят
                  от веса посылки и точного адреса.
                </div>
                <div className="bottomLine">
                  <div className="price">430 ₽</div>
                  <div className="time">2-5 дней</div>
                </div>
              </div>

              <div
                className="way"
                onClick={() => clickWayDelivery(2)}
                id="way2"
                style={{
                  border: selectedWay === 2 ? '1px solid black' : 'none',
                }}
              >
                <div className="nameWay">Доставка курьером СДЭК</div>
                <div className="descWay">
                  Цена и сроки доставки зависят от веса посылки и точного
                  адреса. После оформления заказа с вами свяжется менеджер и
                  произведет подтверждение заказа
                </div>
                <div className="bottomLine">
                  <div className="price">590 ₽</div>
                  <div className="time">1-2 дня</div>
                </div>
              </div>

              <div
                className="way"
                onClick={() => clickWayDelivery(3)}
                id="way3"
                style={{
                  border: selectedWay === 3 ? '1px solid black' : 'none',
                }}
              >
                <div className="nameWay">Доставка в постомат 5Post</div>
                <div className="descWay">
                  Выбирайте удобный постомат выдачи заказа на карте города.
                  Сроки и цена доставки рассчитываются и зависят от веса посылки
                  и точного адреса.
                </div>
                <div className="bottomLine">
                  <div className="price">590 ₽</div>
                  <div className="time">2-4 дня</div>
                </div>
              </div>

              <div
                className="way"
                onClick={() => clickWayDelivery(4)}
                id="way4"
                style={{
                  border: selectedWay === 4 ? '1px solid black' : 'none',
                }}
              >
                <div className="nameWay">Cамовывоз</div>
                <div className="descWay">Cамовывоз из магазина в Москве</div>
                <div className="bottomLine">
                  <div className="price">0 ₽</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <form>
        <div className="thirdPoint">
          <div className="nameThirdPoint">3. Контактные данные</div>
          <div className="allInfo">
            <div className="blockWithInput">
              <div className="name">ФИО</div>
              <input placeholder="Ваше ФИО" />
            </div>
            <div className="blockWithInput">
              <div className="name">Email</div>
              <input
                type="email"
                id="email"
                name="email"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              />
            </div>
          </div>
        </div>
        <div className="fourthPoint">
          <div className="nameFourthPoint">4. Оплата</div>
          <div className="allDescPayment">
            <div
              className="payOnline"
              onClick={() => clickPayment(1)}
              style={{
                border: payment === 1 ? '1px solid black' : 'none',
              }}
            >
              <div className="imgOnline"></div>
              <div className="nameOnline">Оплата онлайн</div>
              <div className="descriptionOnline">
                Оплата банковскими картами VISA, MasterCard, платежной системой
                «Мир»
              </div>
            </div>
            <div
              className="payOnline"
              onClick={() => clickPayment(2)}
              style={{
                border: payment === 2 ? '1px solid black' : 'none',
              }}
            >
              <div className="imgCash"></div>
              <div className="nameOnline">Оплата наличными</div>
              <div className="descriptionOnline">
                Оплатить покупки наличными можно при получении в постомате или
                курьером
              </div>
            </div>
            <div
              className="payOnline"
              onClick={() => clickPayment(3)}
              style={{
                border: payment === 3 ? '1px solid black' : 'none',
              }}
            >
              <div className="imgMoney"></div>
              <div className="nameOnline">Наложенный платеж</div>
              <div className="descriptionOnline">
                Оплата наложенным платежом курьеру СДЕК, либо курьеру Почты
                России
              </div>
            </div>
            <div
              className="payOnline"
              id="payOnline"
              onClick={() => clickPayment(4)}
              style={{
                border: payment === 4 ? '1px solid black' : 'none',
              }}
            >
              <div className="imgPlan"></div>
              <div className="nameOnline">Рассрочка</div>
              <div className="descriptionOnline">
                Вы можете оплатить в рассрочку заказ на сумму от 1000 рублей
              </div>
            </div>
          </div>
        </div>
        <div className="buttonNext">
          <div className="allButton">
            {selectedWay && payment ? (
              <Link to='/successfullyOrder' className="input" onClick={() => clickSuccessfullyOrder()}>Далее</Link>
            ) : (
              <input
                className="input"
                type="button"
                value="Далее"
              />
            )}
          </div>
          {selectedWay && payment ? (
            <div></div>
          ) : selectedWay ? (
            <div className="warning">Выберите способ оплаты</div>
          ) : payment ? (
            <div className="warning">Выберите способ доставки</div>
          ) : (
            <div className="warning">
              Выберите способ доставки и способ оплаты
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default ArrangeOrder;
