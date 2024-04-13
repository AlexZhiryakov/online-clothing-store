import React from 'react';
import { Link } from 'react-router-dom';
import './Subscribe.css';

function Subsribe() {
  const scroll = () => {
    const element = document.getElementById('Header');
    element.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="Subsribe">
      <div className="bgSubscribe">
        <div className="descriptionSubscribe">
          <div className="name">Подпишись на рассылку</div>
          <div className="description">
            Чтобы всегда быть в курсе интересного
          </div>
          <Link className="button" to='/subsribe' onClick={() => scroll()}>Подписаться</Link>
        </div>
      </div>
    </div>
  );
}

export default Subsribe;
