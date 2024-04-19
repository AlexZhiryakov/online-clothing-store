import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './ArrangeOrder.css'

function SuccessfullyOrder() {
  useEffect(() => {
    const element = document.getElementById('Header');
    element.scrollIntoView({ behavior: 'smooth' });
  }, [])

  return (
    <div className="successfullyOrder" id='successfullyOrder'>
        <div className="thanks">Спасибо! Ждите письмо о прибытии товара на указанную вами электронную почту</div>
        <div className='manager'>Если у вас остались вопросы - вы можете связаться с нашим менеджером в любое время</div>
        <div className='contacts'>
          <a className="wtsRound" href='https://api.whatsapp.com/send/?phone=79635248060' target='blank'></a>
          <a className="tgRound" href="https://t.me/79635248060" target='blank'></a>
          <a className="emailImg" href="mailto:order@ogstyle.ru" target='blank'></a>
          <a className="phoneImg" href='tel:+79635248060' target='blank'></a>
        </div>
        <Link className="back" to="/">
          <button className="backButton">Вернуться на главный экран</button>
        </Link>
    </div>
  )
}

export default SuccessfullyOrder