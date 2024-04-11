import React from 'react';
import './Original.css';

function Original() {
  return (
    <div className="Original" id='original'>
      <div className="firstParagraph">
        <div className="bg">
          <div className="line">
            <div className="content">
              <div className="name">Только оригинальная одежда и обувь</div>
              <div className="descr">
                Многие задаются вопросом – «Оригинал или подделка?», и это
                абсолютно справедливо, когда на рынке много фейкового товара,
                который, зачастую, стоит как оригинальный!
              </div>
              <div className="text">
                Мы ручаемся за подлинность всей своей продукции и подтверждаем
                это вместе с Честным ЗНАКОМ. С 1 июля 2020 года вся обувь, и
                часть одежды, импортированные на территорию Российской
                Федерации, подлежат обязательной маркировке в национальной
                системе Честный ЗНАК.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="secondParagraph">
        <div className="nameSecondPrgrph">Как проверить подлинность ?</div>
        <div className="points">
          <div className="first">
            <div className="firstPointContent">
              <div className="firstString">
                <div className="number">1</div>
                <div className="nameFirst">
                  Скачай приложение “Честный ЗНАК”
                </div>
              </div>
              <div className="descrFirst">
                Приложение работает на всех смартфонах.
              </div>
              <div className="allImg">
                <div className="firstImg"></div>
                <div className="allImgSecondStr">
                  <div className="secondImg"></div>
                  <div className="thirdImg"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="second">
            <div className="contentSecond">
              <div className="number">2</div>
              <div className="allText">
                <div className="nameSecond">
                  Найди специальный кодмаркировки Data Matrix
                </div>
                <div className="descrSecond">
                  Он похож на обычный QR код и чаще всего размещен на торце
                  коробки. А некоторые бренды наносят его на ярлыки внутри
                  кроссовок.
                </div>
              </div>
              <div className="imgSecond">
                <div className="qrcode"></div>
              </div>
            </div>
          </div>
          <div className="third">
            <div className="contentSecond">
              <div className="number">3</div>
              <div className="allText">
                <div className="nameSecond">Отсканируй код Data Matrix</div>
                <div className="descrSecond">
                  Открой приложение, следуй инструкциям и сканируй код с его
                  помощью. Внутри приложения есть подробная информация как
                  проверить подлинность товара и идентифицировать его
                </div>
              </div>
              <div className="imgSecond">
                <div className="phone">
                  <div className="sign"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="fourth">
            <div className="contentSecond">
              <div className="number">4</div>
              <div className="allText">
                <div className="nameSecond">Проверь результат</div>
                <div className="descrSecond">
                  Сравни описание товара в приложении Честный ЗНАК с информацией
                  на этикетках и лично убедись что товар является на 100%
                  оригинальным и все данные полностью данные совпали!
                </div>
              </div>
              <div className="secondBox">
                <div className="checkmark"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Original;
