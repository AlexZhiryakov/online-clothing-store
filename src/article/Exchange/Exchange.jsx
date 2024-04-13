import React from 'react';
import './Exchange.css';

function Exchange() {
  return (
    <div className="Exchange" id='exchange'>
      <div className="firstParagraph">
        <div className="name">Обмен и возврат заказов</div>
        <div className="description">
          При онлайн покупке бывает так, что кроссовки или штаны не подошли. В
          этом случае сразу после примерки вы можете заполнить заявку на обмен и
          поменять на другой размер, модель или оформить возврат средств
        </div>
        <div className="allPoints">
          <div className="firstPoint">
            <div className="content">
              <div className="firstString">
                <div className="imgPoint"></div>
                <div className="namePoint">Сделать запрос</div>
              </div>
              <div className="secondString">
                В течении 3-х дней с момента получения товара отправить запрос
                на обмен с помощью Telegram +7 (999) 99-99-99, или написать нам
                на электронную почту info@ogstyle.ru.
              </div>
            </div>
          </div>
          <div className="secondPoint">
            <div className="secondContent">
              <div className="firstString">
                <div className="imgPointSecond"></div>
                <div className="namePoint">Прислать фото</div>
              </div>
              <div className="secondString">
                На фото должно быть хорошо виден фотографируемый товар, например
                если присутствует дефект то он должен быть чётко виден
              </div>
            </div>
          </div>
          <div className="thirdPoint">
            <div className="thirdContent" id='thirdContent'>
              <div className="firstString">
                <div className="imgPointThird"></div>
                <div className="namePoint">Отправить неподошедший товар</div>
              </div>
              <div className="secondString">
                Отправить нужно по адресу: 410028, Россия, город Балашиха, ул.
                Кожедуба 8
              </div>
            </div>
          </div>
        </div>
        <div className="notice">
          Важно! Обмен осуществляется только после фактического получения
          посылки и понимания, что товар прислали тот, который нужен в
          соответствующем виде - новый и со всеми бирками. Возврат недопустим
          при сорванной бирке, наличие следов стирки или носки товара. Все
          обмены происходят полностью за счет покупателя.
        </div>
      </div>
      <div className="secondParagraph">
        <div className="firstSection">
          <div className='attention'>ВНИМАНИЕ!</div>
          <div className="text">Оплата доставки до нас клиент осуществляет за собственные средства, отправка обмена в сторону клиента происходит за наш счет.</div>
          <div className="text">В случае если товар вам по всем параметрам подходит, но вам не понравились стилевые решения или иные указанные характеристики модели, то оплату доставки в ОБЕ стороны оплачиваете вы.</div>
          <div className="text">Если вы желаете отказаться от товаров без корректной причины по личному желанию то оплату доставки в ОБЕ стороны оплачиваете вы.</div>
        </div>
        <div className="secondSection">
          <div className="secondName">МЫ НЕ ОСУЩЕСТВЛЯЕМ ОБМЕН И ВОЗВРАТ В СЛУЧАЕ:</div>
          <div className="secondSectionPoints">
            <div className="point">1. Если Вы приобретали модели со скидкой выше 30%.</div>
            <div className="point">2. Не сохранен товарный вид, потребительские свойства, ярлыки, бирки – любые изменения в товаре, свидетельствующие о его эксплуатации.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exchange;
