import React from 'react';
import { Link } from 'react-router-dom';
import './ArrangeOrder.css';

function Success() {
  return (
    <div className="successfullyOrder" id="successfullyOrder">
      <div className="thanks">
        Спасибо за заказ! Ваш заказ успешно оформлен
      </div>
      <Link className="back" to="/">
        <button className="backButton" type="button">
          Вернуться на главный экран
        </button>
      </Link>
    </div>
  );
}

export default Success;
