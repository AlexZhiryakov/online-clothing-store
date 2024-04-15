import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import api from '../main/SecondSection/Posts';
import { addInLiked } from '../redux/cart/reducer';
import { Link } from 'react-router-dom';
import '../main/SecondSection/Popular.css';
import './Nav.css';
import {
  deleteItemFromCart,
  setItemInCart,
  addNewTotalPrice,
  removeNewTotalPrice,
} from '../redux/cart/reducer';
import { HiOutlineHeart } from 'react-icons/hi2';
import { HiMiniHeart } from 'react-icons/hi2';
import { PiBagSimpleFill } from 'react-icons/pi'; // закрашенный
import { PiBagSimpleLight } from 'react-icons/pi'; // не закрашенный
import axios from 'axios';

function Liked() {
  const dispatch = useDispatch();
  const [listLiked, setListLiked] = useState([]);
  const liked = useSelector((state) => state.cart.liked);
  const items = useSelector((state) => state.cart.itemsInCart)
  console.log(listLiked)
  useEffect(() => {
    axios.get('http://localhost:3393/liked').then((data) => {
      console.log(data.data)
      setListLiked(data.data);
    });
  }, [liked]);

  const toggleLiked = (id) => {
    axios.delete(`http://localhost:3393/liked/${id}/`).then((data) => {
      dispatch(addInLiked(id));
    });
    const fillHeartObj = JSON.parse(localStorage.getItem('fillHeart')) || {};
    fillHeartObj[id] = false;
    localStorage.setItem('fillHeart', JSON.stringify(fillHeartObj));
  };

  const handleClick = (
    id,
    mark,
    img,
    name,
    price,
    oldPrice,                 
    sale,
    quantity,
    widthMark,
    color,
    size
  ) => {
    console.log(color)
    const firstSize = size.first;
    const check = JSON.parse(localStorage.getItem(name));
    if (check !== null) {
      localStorage.removeItem(name);
      dispatch(removeNewTotalPrice(name));
      dispatch(deleteItemFromCart(id));

      const fillHeartObj = JSON.parse(localStorage.getItem('fillBag')) || {};
      fillHeartObj[id] = false;
      localStorage.setItem('fillBag', JSON.stringify(fillHeartObj));
    } else {
      dispatch(
        setItemInCart({
          id,
          mark,
          img,
          name,
          price,
          oldPrice,
          sale,
          quantity,
          widthMark,
          color,
          size,
        })
      );
      localStorage.setItem(
        String(name),
        JSON.stringify({
          id,
          mark,
          img,
          name,
          price,
          oldPrice,
          sale,
          quantity,
          widthMark,
          color,
          size,
        })
      );
      dispatch(addNewTotalPrice({ name, price }));

      const fillHeartObj = JSON.parse(localStorage.getItem('fillBag')) || {};
      fillHeartObj[id] = true;
      localStorage.setItem('fillBag', JSON.stringify(fillHeartObj));
    }
  };

  const checkFillBagFunc = (id) => {
    const fillHeartObj = JSON.parse(localStorage.getItem('fillBag')) || {};
    return fillHeartObj[id] === true;
  };

  const openProduct = (
    id,
    mark,
    img,
    name,
    price,
    oldPrice,
    sale,
    quantity,
    category,
    imgSecond,
    imgThird,
    imgFour,
    size,
    color,
  ) => {
    localStorage.setItem(
      'productDetails',
      JSON.stringify({
        id,
        mark,
        img,
        name,
        price,
        oldPrice,
        sale,
        quantity,
        category,
        imgSecond,
        imgThird,
        imgFour,
        size,
        color,
      })
    );
    const scroll = () => {
      const element = document.getElementById('Header');
      element.scrollIntoView({ behavior: 'smooth' });
    };
    scroll();
  };

  return (
    <div className="allLiked">
      <h2 className="like">Избранное</h2>
      <div className="allLikedBlocks">
        {listLiked.length === 0 ? (
          <div className="emptyLiked">
            <div className="bgDivEmpty">
              <div className="bgEmpty"></div>
            </div>
            <div className="bottomText">
              <div className="emptyText">ВАШЕ ИЗБРАННОЕ ПУСТО</div>
              <div className="emptyAddText">
                Выберите нужный вам товар и добавьте его в избранное
              </div>
              <button className="buttonBuyLiked">
                <Link to="/" className="linkButtonBuy">
                  К товарам
                </Link>
              </button>
            </div>
          </div>
        ) : (
          <div id='allBlocks'>
          {listLiked.map((liked) => (
            <div key={liked.id} className="block" id='block'>
              <Link
                className="bgImg"
                id='bgImg'
                style={{
                  backgroundImage: `url(${liked.img})`,
                }}
                to={`/${liked.id}`}
                onClick={() => openProduct(
                  liked.id,
                  liked.mark,
                  liked.img,
                  liked.name,
                  liked.price,
                  liked.oldPrice,
                  liked.sale,
                  liked.quantity,
                  liked.category,
                  liked.imgSecond,
                  liked.imgThird,
                  liked.imgFour,
                  liked.size,
                  liked.color,
                )}
              >
                <div className="firstMark">
                  <div
                    className="mark"
                    style={{
                      backgroundImage: `url(${liked.mark})`,
                      width: liked.widthMark,
                    }}
                  ></div>
                </div>
                <div className="addInfo">
                  <HiMiniHeart
                    className="heart"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleLiked(liked.id);
                    }}
                  />
                  {checkFillBagFunc(liked.id) ? (
                    <PiBagSimpleFill
                      className="bag"
                      onClick={(e) => {
                        e.preventDefault();
                        handleClick(
                          liked.id,
                          liked.mark,
                          liked.img,
                          liked.name,
                          liked.price,
                          liked.oldPrice,                 
                          liked.sale,
                          liked.quantity,
                          liked.widthMark,
                          liked.color,
                          liked.size,
                        );
                      }}
                    />
                  ) : (
                    <PiBagSimpleLight
                      className="bag"
                      onClick={(e) => {
                        e.preventDefault();
                        handleClick(
                          liked.id,
                          liked.mark,
                          liked.img,
                          liked.name,
                          liked.price,
                          liked.oldPrice,                 
                          liked.sale,
                          liked.quantity,
                          liked.widthMark,
                          liked.color,
                          liked.size,
                        );
                      }}
                    />
                  )}
                </div>
              </Link>
              <div className="allBottomCard" id="bottomCard">
                <div className="name">{liked.name}</div>
                <div className="bottomInfo">
                  <div className="price">
                    {Intl.NumberFormat('ru-RU').format(liked.price)} ₽
                  </div>
                  <del className="oldPrice">
                    {Intl.NumberFormat('ru-RU').format(liked.oldPrice)} ₽
                  </del>
                  <div
                    className="sale"
                    style={{
                      backgroundImage: `url(${liked.sale})`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))
          }
        </div>
        )}
      </div>
    </div>
  );
}

export default Liked;

// `/liked?name=${name}`
