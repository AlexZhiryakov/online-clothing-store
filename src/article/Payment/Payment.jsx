import React from 'react';
import './Payment.css';

function Payment() {
  return (
    <div className="Payment">
      <div className="paymentDesc">
        <h3 className="namePayment">Оплата</h3>
        <div className="allDescPayment">
          <div className="payOnline">
            <div className="imgOnline"></div>
            <div className="nameOnline">Оплата онлайн</div>
            <div className="descriptionOnline">
              Оплата банковскими картами VISA, MasterCard, платежной системой
              «Мир»
            </div>
          </div>
          <div className="payOnline">
            <div className="imgCash"></div>
            <div className="nameOnline">Оплата наличными</div>
            <div className="descriptionOnline">
              Оплатить покупки наличными можно при получении в постомате или
              курьером
            </div>
          </div>
          <div className="payOnline">
            <div className="imgMoney"></div>
            <div className="nameOnline">Наложенный платеж</div>
            <div className="descriptionOnline">
              Оплата наложенным платежом курьеру СДЕК, либо курьеру Почты России
            </div>
          </div>
          <div className="payOnline">
            <div className="imgPlan"></div>
            <div className="nameOnline">Рассрочка</div>
            <div className="descriptionOnline">
              Вы можете оплатить в рассрочку заказ на сумму от 1000 рублей
            </div>
          </div>
        </div>
      </div>
      <div className="deliveryDesc">
        <div className="conditionsDelivery">
          <div className="nameDelivery">Условия доставки</div>
          <div className="desc">
            Мы передаем заказы в курьерские службы только по будням. Если ваш
            заказ собран в пятницу после 11:00, мы отправим его в понедельник.
          </div>
          <div className="pointsConditions">
            <div className="first">
              <div className="firstName">1. Почта России</div>
              <div className="firstDesc">
                Цена и сроки доставки рассчитываются автоматически при
                оформлении заказа и зависят от веса посылки и точного адреса
                получателя. При заказе на сумму более 10000 рублей — доставка
                бесплатная.
              </div>
            </div>
            <div className="second">
              <div className="firstName">2. Доставка курьером СДЭК</div>
              <div className="firstDesc">
                Сроки и цена доставки рассчитываются автоматически при
                оформлении заказа и зависят от веса посылки и точного адреса
                получателя. Например, в Нижний Новгород СДЭК доставляет за 1-2
                дня, а во Владивосток — за 10-13 дней.При заказе на сумму более
                10000 рублей — доставка бесплатная.
              </div>
            </div>
            <div className="third">
              <div className="firstName">3. Доставка в постомат 5Post</div>
              <div className="firstDesc">
                При оформлении заказа выбирайте удобный постомат выдачи заказа
                на карте города. Сроки и цена доставки рассчитываются
                автоматически при оформлении заказа и зависят от веса посылки и
                точного адреса получателя.При заказе на сумму более 10000 рублей
                — доставка бесплатная.
              </div>
            </div>
          </div>
        </div>
        <div className="secondColumn">
          <div className="secondColumnImg">
            <div className="firstString">
              <div className="imgSocks"></div>
              <div className="logoTNF"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Payment;
