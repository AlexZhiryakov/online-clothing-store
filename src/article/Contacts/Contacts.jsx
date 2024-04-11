import React from 'react';
import './Contacts.css';

function Contacts() {
  return (
    <div className="Contacts" id='contacts'>
      <div className="ContactsFlex">
      <div className="firstContactsFlex">
      <div className="name">Контакты</div>
      <div className="allInfo">
      <div className="firstColumn">
        <div className="city">Балашиха</div>
        <div className="location">
          420000, Россия, город Балашиха , ул. Кожедуба 8
        </div>
        <div className="line"></div>
        <div className="firstColInfo">
          <div className="firstColFirstInfo">
            <div className="text">Телефон</div>
            <div className="text">E-mail</div>
            <div className="text">Режим работы</div>
          </div>
          <div className="firstColsecondInfo">
            <div className="text">+7 (902) 041-63-39</div>
            <div className="text">info@ogstyle.ru</div>
            <div className="text">
              Мы ждем вас ежедневно с 08:00 до 20:00 без перерывов и выходных
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
      <div className='secondColumn'>

      </div>
    </div>
    </div>
  );
}

export default Contacts;
