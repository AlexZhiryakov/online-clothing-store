import React, { useEffect, useState } from 'react';
import data from '../../data/fakeData';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { HiOutlineHeart } from 'react-icons/hi2';
import { HiMiniHeart } from 'react-icons/hi2';
import { PiBagSimpleFill } from 'react-icons/pi'; // закрашенный
import { PiBagSimpleLight } from 'react-icons/pi'; // не закрашенный
import { addInLiked } from '../../redux/cart/reducer';
import { removeNewTotalPrice } from '../../redux/cart/reducer';
import { deleteItemFromCart } from '../../redux/cart/reducer';
import { addNewTotalPrice } from '../../redux/cart/reducer';
import { setItemInCart } from '../../redux/cart/reducer';
// import api from '../../main/SecondSection/Posts';
import axios from 'axios';
import './NavProducts.css';

function Trousers() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.itemsInCart);
  const liked = useSelector((state) => state.cart.liked);
  const newTotalPrice = useSelector((state) => state.cart.newTotalPrice);
  const [listLiked, setListLiked] = useState([]);

  const toggleLiked = (
    name,
    id,
    mark,
    img,
    price,
    oldPrice,
    sale,
    quantity,
    widthMark
  ) => {
    axios.get(`http://localhost:3393/liked?id=${id}`).then((data) => {
      const take = data.data.map((el) => {
        return el.id;
      });
      console.log(take[0]);
      const takeNumber = take[0];
      if (takeNumber != id) {
        axios
          .post('http://localhost:3393/liked', {
            name,
            id,
            mark,
            img,
            price,
            oldPrice,
            sale,
            quantity,
            fillHeart: true,
            widthMark,
          })
          .then((data) => {
            dispatch(addInLiked(data.data));
            const fillHeartObj =
              JSON.parse(localStorage.getItem('fillHeart')) || {};
            fillHeartObj[id] = true;
            localStorage.setItem('fillHeart', JSON.stringify(fillHeartObj));
          });
      } else {
        axios.delete(`http://localhost:3393/liked/${id}/`).then((data) => {
          console.log(data.data);
        });
        const fillHeartObj =
          JSON.parse(localStorage.getItem('fillHeart')) || {};
        fillHeartObj[id] = false;
        localStorage.setItem('fillHeart', JSON.stringify(fillHeartObj));
        dispatch(addInLiked(id));
      }
    });
    axios.get(`http://localhost:3393/liked?id=${id}`).then((data) => {
      console.log(data.data);
    });
  };

  useEffect(() => {
    setListLiked(liked);
  }, [liked]);

  const checkFillFunc = (id) => {
    const fillHeartObj = JSON.parse(localStorage.getItem('fillHeart')) || {};
    return fillHeartObj[id] === true;
  };

  useEffect(() => {
    if (newTotalPrice > 0) {
      const newTotalPrice = items.reduce(
        (acc, product) => (acc += product.price),
        0
      );
      localStorage.setItem('newTotalPrice', JSON.stringify(newTotalPrice));
    } else {
      null;
    }
  }, [items]);

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
    size,
    category,
    imgSecond,
    imgThird,
    imgFour
  ) => {
    const check = JSON.parse(localStorage.getItem(`${name}${size.first}`));
    const sizee = size.first;
    if (check !== null) {
      const getSize = JSON.parse(localStorage.getItem('selectedSize'));
      localStorage.setItem(
        'selectedSize',
        JSON.stringify([getSize, ...size.first])
      );
      localStorage.removeItem(`${name}${size.first}`);
      dispatch(removeNewTotalPrice({ name, sizee }));
      dispatch(deleteItemFromCart(id));

      const fillHeartObj = JSON.parse(localStorage.getItem('fillBag')) || {};
      const objectWithSize = {
        [size.first]: false,
      };
      fillHeartObj[id] = objectWithSize;
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
          category,
          imgSecond,
          imgThird,
          imgFour,
        })
      );
      const getSize = JSON.parse(localStorage.getItem('selectedSize'));
      localStorage.setItem(
        'selectedSize',
        JSON.stringify([getSize, ...size.first])
      );
      localStorage.setItem(
        String(`${name}${size.first}`),
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
          category,
          imgSecond,
          imgThird,
          imgFour,
        })
      );
      dispatch(addNewTotalPrice({ name, price, sizee }));

      const fillHeartObj = JSON.parse(localStorage.getItem('fillBag')) || {};
      const objectWithSize = {
        [size.first]: true,
      };
      fillHeartObj[id] = {
        ...fillHeartObj[id],
        ...objectWithSize,
      };
      localStorage.setItem('fillBag', JSON.stringify(fillHeartObj));
    }
  };

  const checkFillBagFunc = (id, size) => {
    const fillHeartObj = JSON.parse(localStorage.getItem('fillBag')) || {};
    const getObj = fillHeartObj[id];
    if (getObj) {
      return getObj[size.first];
    } else {
      return false;
    }
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
    color
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
  };

  return (
    <div className="Sneakers">
      {data.map((el) => {
        if (el.category === 'trousers') {
          return (
            <div className="block">
              <Link
                className="bgImg"
                style={{
                  backgroundImage: `url(${el.img})`,
                }}
                to={`/${el.id}`}
                onClick={openProduct(
                  el.id,
                  el.mark,
                  el.img,
                  el.name,
                  el.price,
                  el.oldPrice,
                  el.sale,
                  el.quantity,
                  el.category,
                  el.imgSecond,
                  el.imgThird,
                  el.imgFour,
                  el.size,
                  el.color
                )}
              >
                <div className="firstMark">
                  <div
                    className="mark"
                    style={{
                      backgroundImage: `url(${el.mark})`,
                      width: el.widthMark,
                    }}
                  ></div>
                </div>
                <div className="addInfo">
                  {checkFillFunc(el.id) ? (
                    <HiMiniHeart
                      className="heart"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleLiked(
                          el.name,
                          el.id,
                          el.mark,
                          el.img,
                          el.price,
                          el.oldPrice,
                          el.sale,
                          el.quantity,
                          el.fillHeart,
                          el.widthMark
                        );
                      }}
                    />
                  ) : (
                    <HiOutlineHeart
                      className="heart"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleLiked(
                          el.name,
                          el.id,
                          el.mark,
                          el.img,
                          el.price,
                          el.oldPrice,
                          el.sale,
                          el.quantity,
                          el.fillHeart,
                          el.widthMark
                        );
                      }}
                    />
                  )}
                  {checkFillBagFunc(el.id, el.size) ? (
                    <PiBagSimpleFill
                      className="bag"
                      onClick={(e) => {
                        e.preventDefault();
                        handleClick(
                          el.id,
                          el.mark,
                          el.img,
                          el.name,
                          el.price,
                          el.oldPrice,
                          el.sale,
                          el.quantity,
                          el.widthMark,
                          el.color,
                          el.size,
                          el.category,
                          el.imgSecond,
                          el.imgThird,
                          el.imgFour
                        );
                      }}
                    />
                  ) : (
                    <PiBagSimpleLight
                      className="bag"
                      onClick={(e) => {
                        e.preventDefault();
                        handleClick(
                          el.id,
                          el.mark,
                          el.img,
                          el.name,
                          el.price,
                          el.oldPrice,
                          el.sale,
                          el.quantity,
                          el.widthMark,
                          el.color,
                          el.size,
                          el.category,
                          el.imgSecond,
                          el.imgThird,
                          el.imgFour
                        );
                      }}
                    />
                  )}
                </div>
              </Link>
              <div className="allBottomCard" id="allBottomCard">
                <div className="name">{el.name}</div>
                <div className="bottomInfo">
                  <div className="price">
                    {Intl.NumberFormat('ru-RU').format(el.price)} ₽
                  </div>
                  <del className="oldPrice">
                    {Intl.NumberFormat('ru-RU').format(el.oldPrice)} ₽
                  </del>
                  <div
                    className="sale"
                    style={{
                      backgroundImage: `url(${el.sale})`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default Trousers;
