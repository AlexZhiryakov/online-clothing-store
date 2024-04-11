import '../main/SecondSection/Popular.css';
import fakeData from '../../src/data/fakeData';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import api from '../main/SecondSection/Posts';
import { addInLiked } from '../redux/cart/reducer';
import { Link } from 'react-router-dom';
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

function Search() {
  const [listLiked, setListLiked] = useState([]);
  const [search, setSearch] = useState('');
  const items = useSelector((state) => state.cart.itemsInCart);
  const dispatch = useDispatch();
  const liked = useSelector((state) => state.cart.liked);

  useEffect(() => {
    setListLiked(liked);
    console.log(listLiked);
  }, [liked]);

  const toggleLiked = (name, id, mark, img, price, oldPrice, sale) => {
    api.get(`/liked?id=${id}`).then((data) => {
      const take = data.data.map((el) => {
        return el.id;
      });
      const takeNumber = take[0];
      if (takeNumber != id) {
        api
          .post('/liked', {
            name,
            id,
            mark,
            img,
            price,
            oldPrice,
            sale,
            fillHeart: true,
          })
          .then((data) => {
            dispatch(addInLiked(data.data));
            const fillHeartObj =
              JSON.parse(localStorage.getItem('fillHeart')) || {};
            fillHeartObj[id] = true;
            localStorage.setItem('fillHeart', JSON.stringify(fillHeartObj));
          });
      } else {
        api.delete(`/liked/${id}/`).then((data) => {
          dispatch(addInLiked(id));
        });
        const fillHeartObj =
          JSON.parse(localStorage.getItem('fillHeart')) || {};
        fillHeartObj[id] = false;
        localStorage.setItem('fillHeart', JSON.stringify(fillHeartObj));
      }
    });
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
    if (getObj) {
      return getObj[size.first];
    } else {
      return false;
    }
  };

  const checkFillFunc = (id) => {
    const fillHeartObj = JSON.parse(localStorage.getItem('fillHeart')) || {};
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
      const element = document.getElementById();
      element.scrollIntoView({ behavior: 'smooth' });
    };
    scroll();
  };

  return (
    <div className="Search">
      <h2 className="h2Text">ПОИСК ПО САЙТУ</h2>

      <div className="allInput">
        <div className="logoSearch"></div>
        <input
          className="placeholder"
          type="text"
          placeholder="Введите..."
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        <div onClick={() => setSearch('')} className="clearSearch"></div>
      </div>

      <div className="foundInSearch" id="allBlocks">
        {fakeData
          .filter((el) => {
            if (search === '') {
              return false;
            } else if (el.name.toLowerCase().includes(search.toLowerCase())) {
              return true;
            }
            return false;
          })
          .map((el, key) => {
            return (
              <div key={el.id} className="block" id="block">
                <Link
                  className="bgImg"
                  id="bgImg"
                  style={{
                    backgroundImage: `url(${el.img})`,
                  }}
                  to={`/${el.id}`}
                  onClick={() => openProduct(
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
                            el.imgFour,
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
                            el.imgFour,
                          );
                        }}
                      />
                    )}
                  </div>
                </Link>
                <div className="allBottomCard" id="bottomCard">
                  <div className="name">{el.name}</div>
                  <div className="bottomInfo">
                    <div className="price">
                      {Intl.NumberFormat('ru-RU').format(el.price)} ₽
                    </div>
                    <div className="oldPrice">
                      {Intl.NumberFormat('ru-RU').format(el.oldPrice)} ₽
                    </div>
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
          })}
      </div>
    </div>
  );
}

export default Search;
