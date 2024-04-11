import React from 'react';
import './newCollection.css';
import { Link } from 'react-router-dom';

function SlideCollection() {
  const scroll = () => {
    const element = document.getElementById();
    element.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="bgNewCollection">
      <div className="newCollectionFirstColumn">
        <div className="nameSlide">Новая коллекция осень-зима!</div>
        <div className="descriptionSlide">
          Ощути легкость и комфорт с каждым шагом в новейших кроссовках Nike!
          Совершенство технологий и стильный дизайн для твоей неустанной
          энергии. Выбирай Nike - и покоряй вершины своих целей. Поторопись,
          эксклюзивные предложения уже в ожидании!
        </div>
        <Link to="/sneakers" className="buttonSlide" onClick={() => scroll()}>
          Подробнее
        </Link>
      </div>
      <div className="newCollectionSecondColumn">
        <div className="bgCircle">
          <div className="bgSneakers"></div>
        </div>
        <div className="bgNike"></div>
      </div>
    </div>
  );
}

export default SlideCollection;
