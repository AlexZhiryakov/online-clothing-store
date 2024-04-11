import React from 'react'
import { Link } from 'react-router-dom'
import './ArrangeOrder.css'

function SuccessfullyOrder() {
  return (
    <div className="successfullyOrder">
        <div className="mark"></div>
        <div className="thanks">Спасибо за заказ!</div>
        <Link className="back" to="/">
          <button className="backButton">Вернуться на главный экран</button>
        </Link>
    </div>
  )
}

export default SuccessfullyOrder