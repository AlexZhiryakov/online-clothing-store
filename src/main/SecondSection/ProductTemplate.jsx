import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './ProductTemplate.css';
import { HiOutlineHeart } from 'react-icons/hi2';
import { HiMiniHeart } from 'react-icons/hi2';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteItemFromCart,
  setItemInCart,
  addNewTotalPrice,
  removeNewTotalPrice,
} from '../../redux/cart/reducer';
// import api from '../SecondSection/Posts';
import { addInLiked } from '../../redux/cart/reducer';
import Viewer from 'react-viewer';

function ProductTemplate({
  id,
  mark,
  img,
  name,
  price,
  oldPrice,
  sale,
  quantity,
  imgSecond,
  imgThird,
  imgFour,
  widthMark,
  size,
  color,
  category,
}) {
  const [visibleFirst, setVisibleFirst] = useState(false);
  const [visibleSecond, setVisibleSecond] = useState(false);
  const [visibleThird, setVisibleThird] = useState(false);
  const [visibleFourth, setVisibleFourth] = useState(false);
  const newTotalPrice = useSelector((state) => state.cart.newTotalPrice);
  const items = useSelector((state) => state.cart.itemsInCart);
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState(size.first);
  const liked = useSelector((state) => state.cart.liked);

  useEffect(() => {
  }, [liked])

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

  useEffect(() => {
    const fillHeartObj = JSON.parse(localStorage.getItem('fillBag')) || {};
    const objectWithSize = {
      [size.first]: false,
    };
    fillHeartObj[id] = {
      ...fillHeartObj[id],
      ...objectWithSize,
    };
    localStorage.setItem('fillBag', JSON.stringify(fillHeartObj));
  }, [])

  const toggleLiked = () => {
    const getHearts = JSON.parse(localStorage.getItem('fillHeart'))
    const getID = getHearts[id]
    if (getID.fillHeart) {
      const fillHeartObj =
        JSON.parse(localStorage.getItem('fillHeart')) || {};
      fillHeartObj[id] = { id, img, mark, name, price, oldPrice, widthMark, sale, quantity, category, imgSecond, imgThird, imgFour, size, color, fillHeart:false }
      localStorage.setItem('fillHeart', JSON.stringify(fillHeartObj));
      dispatch(addInLiked(id));
    } else {
      dispatch(addInLiked({ id, img, mark, name, price, oldPrice, sale, quantity, category, imgSecond, imgThird, imgFour, size, color, widthMark }));
      const fillHeartObj =
        JSON.parse(localStorage.getItem('fillHeart')) || {};
      fillHeartObj[id] = { id, img, mark, name, price, widthMark, oldPrice, sale, quantity, category, imgSecond, imgThird, imgFour, size, color, fillHeart:true }
      localStorage.setItem('fillHeart', JSON.stringify(fillHeartObj));
    }
    // console.log('сработало');
    // axios.get(`http://localhost:3393/liked?id=${id}`).then((data) => {
    //   const take = data.data.map((el) => {
    //     return el.id;
    //   });
    //   console.log(take[0]);
    //   const takeNumber = take[0];
    //   if (takeNumber != id) {
    //     axios
    //       .post('http://localhost:3393/liked', {
    //         name,
    //         id,
    //         mark,
    //         img,
    //         price,
    //         oldPrice,
    //         sale,
    //         quantity,
    //         fillHeart: true,
    //         widthMark,
    //       })
    //       .then((data) => {
    //         dispatch(addInLiked(data.data));
    //         const fillHeartObj =
    //           JSON.parse(localStorage.getItem('fillHeart')) || {};
    //         fillHeartObj[id] = true;
    //         localStorage.setItem('fillHeart', JSON.stringify(fillHeartObj));
    //       });
    //   } else {
    //     axios.delete(`http://localhost:3393/liked/${id}/`).then((data) => {
    //       console.log(data.data);
    //     });
    //     const fillHeartObj =
    //       JSON.parse(localStorage.getItem('fillHeart')) || {};
    //     fillHeartObj[id] = false;
    //     localStorage.setItem('fillHeart', JSON.stringify(fillHeartObj));
    //     dispatch(addInLiked(id));
    //   }
    // });
    // axios.get(`http://localhost:3393/liked?id=${id}`).then((data) => {
    //   console.log(data.data);
    // });
  };

  const checkFillBagFunc = (id) => {
    const fillHeartObj = JSON.parse(localStorage.getItem('fillBag')) || {};
    const getObj = fillHeartObj[id];
    if (getObj) {
      return getObj[selectedSize];
    } else {
      return false;
    }
  };

  const checkFillFunc = (id) => {
    const fillHeartObj = JSON.parse(localStorage.getItem('fillHeart')) || {};
    if (fillHeartObj !== null && fillHeartObj[id] !== undefined) {
      return fillHeartObj[id].fillHeart
    }
  };

  const handleClick = () => {
    console.log(selectedSize);
    const check = JSON.parse(localStorage.getItem('fillBag'));
    const getID = check[id];
    console.log(getID)
    const sizee = selectedSize;
    if (getID[selectedSize]) {
      localStorage.removeItem(`${name}${selectedSize}`);
      dispatch(removeNewTotalPrice({ name, sizee }));
      dispatch(deleteItemFromCart(id));

      const fillHeartObj = JSON.parse(localStorage.getItem('fillBag')) || {};
      const objectWithSize = {
        [selectedSize]: false,
      };
      fillHeartObj[id] = {
        ...fillHeartObj[id],
        ...objectWithSize,
      };
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
          size,
          selectedSize,
          color,
        })
      );
      localStorage.setItem('selectedSize', JSON.stringify(selectedSize));
      localStorage.setItem(
        String(`${name}${selectedSize}`),
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
          size,
          color,
          selectedSize,
        })
      );
      dispatch(addNewTotalPrice({ name, price, sizee }));

      const fillHeartObj = JSON.parse(localStorage.getItem('fillBag')) || {};
      const objectWithSize = {
        [selectedSize]: true,
      };
      fillHeartObj[id] = {
        ...fillHeartObj[id],
        ...objectWithSize,
      };
      localStorage.setItem('fillBag', JSON.stringify(fillHeartObj));
    }
  };

  const postSize = (thisSize) => {
    setSelectedSize(thisSize);
    console.log(selectedSize);
  };

  return (
    <div className="productTemplate">
      <div className="firstColumn">
        <div className="firstColumnFirst">
          <Viewer
            visible={visibleFirst}
            onClose={() => {
              setVisibleFirst(false);
            }}
            images={[
              { src: img },
              { src: imgSecond },
              { src: imgThird },
              { src: imgFour },
            ]}
            zoomSpeed={0.25}
            showTotal={false}
            noImgDetails={true}
            scalable={false}
            downloadable={false}
            minScale={0.8}
            rotatable={false}
          />
          <Viewer
            visible={visibleSecond}
            onClose={() => {
              setVisibleSecond(false);
            }}
            images={[
              { src: imgSecond },
              { src: img },
              { src: imgThird },
              { src: imgFour },
            ]}
            zoomSpeed={0.25}
            showTotal={false}
            noImgDetails={true}
            scalable={false}
            downloadable={false}
            minScale={0.8}
            rotatable={false}
          />
          <Viewer
            visible={visibleThird}
            onClose={() => {
              setVisibleThird(false);
            }}
            images={[
              { src: imgThird },
              { src: img },
              { src: imgSecond },
              { src: imgFour },
            ]}
            zoomSpeed={0.25}
            showTotal={false}
            noImgDetails={true}
            scalable={false}
            downloadable={false}
            minScale={0.8}
            rotatable={false}
          />
          <Viewer
            visible={visibleFourth}
            onClose={() => {
              setVisibleFourth(false);
            }}
            images={[
              { src: imgFour },
              { src: img },
              { src: imgSecond },
              { src: imgThird },
            ]}
            zoomSpeed={0.25}
            showTotal={false}
            noImgDetails={true}
            scalable={false}
            downloadable={false}
            minScale={0.8}
            rotatable={false}
          />
          <div
            className="image"
            style={{ backgroundImage: `url(${img})` }}
            onClick={() => {
              setVisibleFirst(true);
            }}
          ></div>
          <div
            className="image"
            style={{ backgroundImage: `url(${imgSecond})` }}
            onClick={() => {
              setVisibleSecond(true);
            }}
          ></div>
          <div
            className="image"
            style={{ backgroundImage: `url(${imgThird})` }}
            onClick={() => {
              setVisibleThird(true);
            }}
          ></div>
          <div
            className="image"
            style={{ backgroundImage: `url(${imgFour})` }}
            onClick={() => {
              setVisibleFourth(true);
            }}
          ></div>
        </div>
        <div className="firstColumnSecond">
          <Swiper
            className="mySwiper swiper-h"
            spaceBetween={50}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            <SwiperSlide
              className="img"
              style={{ backgroundImage: `url(${img})` }}
              onClick={() => {
                setVisibleFirst(true);
              }}
            ></SwiperSlide>
            <SwiperSlide
              className="img"
              style={{ backgroundImage: `url(${imgSecond})` }}
              onClick={() => {
                setVisibleFirst(true);
              }}
            ></SwiperSlide>
            <SwiperSlide
              className="img"
              style={{ backgroundImage: `url(${imgThird})` }}
              onClick={() => {
                setVisibleFirst(true);
              }}
            ></SwiperSlide>
            <SwiperSlide
              className="img"
              style={{ backgroundImage: `url(${imgFour})` }}
              onClick={() => {
                setVisibleFirst(true);
              }}
            ></SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="secondColumn">
        <div className="name">{name}</div>
        <div className="firstLine">
          <div className="firstLineFirst">
            <span className="price">
              {Intl.NumberFormat('ru-RU').format(price)} ₽
            </span>
            <del className="oldPrice">
              {Intl.NumberFormat('ru-RU').format(oldPrice)} ₽
            </del>
          </div>
          <div className="firstLineSecond">
            {checkFillFunc(id) ? (
              <HiMiniHeart id="heart" onClick={() => toggleLiked()} />
            ) : (
              <HiOutlineHeart id="heart" onClick={() => toggleLiked()} />
            )}
          </div>
        </div>
        <div className="blockWithSizes">
          <div className="nameSize">Размер</div>
          <div className="allSizes">
            {selectedSize === undefined || selectedSize === size.first ? (
              <button
                className="sizeActive"
                onClick={() => postSize(size.first)}
              >
                {size.first}
              </button>
            ) : (
              <button className="size" onClick={() => postSize(size.first)}>
                {size.first}
              </button>
            )}
            {selectedSize === size.second ? (
              <button
                className="sizeActive"
                onClick={() => postSize(size.second)}
              >
                {size.second}
              </button>
            ) : (
              <button className="size" onClick={() => postSize(size.second)}>
                {size.second}
              </button>
            )}
            {selectedSize === size.third ? (
              <button
                className="sizeActive"
                onClick={() => postSize(size.third)}
              >
                {size.third}
              </button>
            ) : (
              <button className="size" onClick={() => postSize(size.third)}>
                {size.third}
              </button>
            )}
            {selectedSize === size.fourth ? (
              <button
                className="sizeActive"
                onClick={() => postSize(size.fourth)}
              >
                {size.fourth}
              </button>
            ) : (
              <button className="size" onClick={() => postSize(size.fourth)}>
                {size.fourth}
              </button>
            )}
            {selectedSize === size.fifth ? (
              <button
                className="sizeActive"
                onClick={() => postSize(size.fifth)}
              >
                {size.fifth}
              </button>
            ) : (
              <button className="size" onClick={() => postSize(size.fifth)}>
                {size.fifth}
              </button>
            )}
            {size.sixth !== undefined ? (
              selectedSize === size.sixth ? (
                <button
                  className="sizeActive"
                  onClick={() => postSize(size.sixth)}
                >
                  {size.sixth}
                </button>
              ) : (
                <button className="size" onClick={() => postSize(size.sixth)}>
                  {size.sixth}
                </button>
              )
            ) : null}
          </div>
        </div>
        <div className="blockWithColor">
          <div className="nameColor">Цвет</div>
          <div className="allColors">
            {color === 'brown' ? (
              <div className="brown"></div>
            ) : color === 'green' ? (
              <div className="green"></div>
            ) : color === 'pink' ? (
              <div className="pink"></div>
            ) : color === 'blue' ? (
              <div className="blue"></div>
            ) : null}
          </div>
        </div>
        {checkFillBagFunc(id) ? (
          <button className="buttonBuyActive" onClick={handleClick}>
            Добавлено в корзину <span className="point">•</span>{' '}
            {Intl.NumberFormat('ru-RU').format(price)} ₽
          </button>
        ) : (
          <button className="buttonBuy" onClick={handleClick}>
            Добавить в корзину <span className="point">•</span>{' '}
            {Intl.NumberFormat('ru-RU').format(price)} ₽
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductTemplate;
