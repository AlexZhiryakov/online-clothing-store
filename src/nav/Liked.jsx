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

function Liked() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.itemsInCart);
  const [listLiked, setListLiked] = useState([]);
  const liked = useSelector((state) => state.cart.liked);

  useEffect(() => {
  }, [items]);

  useEffect(() => {
    const getList = JSON.parse(localStorage.getItem('fillHeart'));
    console.log(getList)
    if (getList !== null) {
      setListLiked(getList)
    }
  }, [liked]);

    // axios.get('http://localhost:3393/liked').then((data) => {
    //   console.log(data.data)
    //   setListLiked(data.data);
    // });
    
  const toggleLiked = (id, img, mark, name, price, oldPrice, widthMark, sale, quantity, category, imgSecond, imgThird, imgFour, size, color) => {
    const getHearts = JSON.parse(localStorage.getItem('fillHeart'))
    const getID = getHearts[id]
    console.log(getID)
    getHearts[id] = { id, img, mark, name, price, oldPrice, widthMark, sale, quantity, category, imgSecond, imgThird, imgFour, size, color, fillHeart:false}
    localStorage.setItem('fillHeart', JSON.stringify(getHearts));
    dispatch(addInLiked(id));

    // axios.delete(`http://localhost:3393/liked/${id}/`).then((data) => {
    //   dispatch(addInLiked(id));
    // });
    // const fillHeartObj = JSON.parse(localStorage.getItem('fillHeart')) || {};
    // fillHeartObj[id] = false;
    // localStorage.setItem('fillHeart', JSON.stringify(fillHeartObj));
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
    size,
    category,
    imgSecond,
    imgThird,
    imgFour,
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
    console.log(getObj)
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

  const returnHearts = () => {
    const fillHeart = JSON.parse(localStorage.getItem('fillHeart'))
    return fillHeart
  }

  const secondReturnHearts = (id) => {
    const fillHeart = JSON.parse(localStorage.getItem('fillHeart'))
    console.log(fillHeart[id].fillHeart)
    return fillHeart[id].fillHeart
  }

  const coutTrue = () => {
    const fillHeart = JSON.parse(localStorage.getItem('fillHeart'))
      if (fillHeart) {
      const count = fillHeart.filter((el) => el.fillHeart === true)
      if (count.length === 0) {
        return true
      } else {
        return false
      }
    }
  }

  const countMoreTrue = () => {
    const fillHeart = JSON.parse(localStorage.getItem('fillHeart'))
    const count = fillHeart.filter((el) => el.fillHeart === true)
    if (count.length > 1) {
      return true
    } else {
      return false
    }
  }

  return (
    <div className="allLiked">
      <h2 className="like">Избранное</h2>
      <div className="allLikedBlocks">
        {coutTrue() || coutTrue() === undefined ? (
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
        {returnHearts()?.map((liked) => (
          secondReturnHearts(liked.id) ? (
          <div key={liked.id} className="block" id='likedBlock' style={{ marginLeft: countMoreTrue() ? '2vw' : '0px' }}>
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
                e.stopPropagation()
                toggleLiked(liked.id, liked.id, liked.img, liked.mark, liked.name, liked.price, liked.oldPrice, liked.widthMark, liked.sale, liked.quantity, liked.category, liked.imgSecond, liked.imgThird, liked.imgFour, liked.size, liked.color);
              }}
            />
            {checkFillBagFunc(liked.id, liked.size) ? (
              <PiBagSimpleFill
                className="bag"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation()
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
                    liked.category,
                    liked.imgSecond,
                    liked.imgThird,
                    liked.imgFour,
                  );
                }}
              />
            ) : (
              <PiBagSimpleLight
                className="bag"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation()
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
                    liked.category,
                    liked.imgSecond,
                    liked.imgThird,
                    liked.imgFour,
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
        ) : null
      ))}
    </div>
      )} 
      </div>
    </div>
  );
}

export default Liked;

// `/liked?name=${name}`
