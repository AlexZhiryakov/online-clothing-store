import React from 'react';
import { Link } from 'react-router-dom'
import './Error.css';

function Error() {
  return (
    <div className="Error">
      <div className="errorImg"></div>
      <div className="errorText">Страница находится на этапе разработки</div>
      <Link className='errorButton' to='/'>На главную</Link>
    </div>
  );
}

export default Error;
