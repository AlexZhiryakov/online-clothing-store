import React from 'react';
import './About.css';

function About() {
  return (
    <div className="About" id='about'>
      <div className="firstColumn">
        <div className="name">О компании</div>
        <div className="description">
          Мультибрендовый магазин одежды, обуви, аксессуаров. OG Style
          представляет лучшие модели кроссовок, актуальную обувь, одежду в
          спортивном стиле и аксессуары. Ассортимент OG Style формируется из
          ключевых новинок известных спортивных производителей и товаров от
          брендов категории лайфстайл. Наша миссия: популяризация кроссовок, как
          неотъемлемой части гардероба современного человека. Все вещи оригинал
          100%
        </div>
        <div className="cards">
          <div className="card">
            <div className="nameCard">5 лет</div>
            <div className="info">Постоянной работы</div>
          </div>
          <div className="card">
            <div className="nameCard">1000+</div>
            <div className="info">Проданных товаров</div>
          </div>
          <div className="card">
            <div className="nameCard">6+</div>
            <div className="info">Топовых брендов</div>
          </div>
        </div>
      </div>
      <div className="secondColumn">
        
      </div>
    </div>
  );
}

export default About;
