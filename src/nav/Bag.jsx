import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeQuantity,
  addNewTotalPrice,
  addQuantity,
  deleteItemFromCart,
} from '../redux/cart/reducer';
import { Link } from 'react-router-dom';
import SuccessfullyOrder from './SuccessfullyOrder';
import './Nav.css';

function Bag() {
  const dispatch = useDispatch();
  const [itemsList, setItemsList] = useState([]);
  const [totalPriceList, setTotalPriceList] = useState(0);
  const newTotalPrice = useSelector((state) => state.cart.newTotalPrice);
  const items = useSelector((state) => state.cart.itemsInCart);

  useEffect(() => {
    localStorage.setItem('itemsList', JSON.stringify(itemsList));
  }, [itemsList]);

  useEffect(() => {
    const newTotal = JSON.parse(localStorage.getItem('newTotalPrice'));

    const itemsMap = Object.keys(localStorage)
      .filter((key) => key !== 'productDetails')
      .map((key) => {
        return JSON.parse(localStorage.getItem(key));
      })
      .filter((product) => product.name !== newTotal?.name && product !== 0);
    setItemsList(itemsMap);

    if (Array.isArray(newTotal)) {
      const price = newTotal.reduce((acc, current) => acc + current.price, 0);
      setTotalPriceList(price);
    } else {
      console.log('не массив');
    }
  }, [items, newTotalPrice]);

  // useEffect(() => {
  //   const getTotal = JSON.parse(localStorage.getItem('newTotalPrice'));
  //   console.log(getTotal);
  // }, []);

  const clearTheBag = () => {
    localStorage.clear();
    localStorage.setItem('newTotalPrice', JSON.stringify([]));
    setItemsList([]);
    setTotalPriceList(0);
  };

  const totalLengthProducts = () => {
    const len = itemsList.length;

    if (len === 0) {
      return 0;
    } else {
      const res = itemsList.length % 10;
      return res;
    }
  };

  const addQuantityFunc = (name, price, size) => {
    const sizee = size;
    console.log(size);
    dispatch(addNewTotalPrice({ name, price, sizee }));
    dispatch(addQuantity({ name, price, size }));
  };

  const removeQuantityFunc = (thisName, id, size) => {
    const get = JSON.parse(localStorage.getItem('newTotalPrice'));
    const names = get.filter((item) => item.name === `${thisName}${size}`);
    const count = names.length;

    console.log(count);
    if (count > 1) {
      const totalList = [];
      names.forEach((product) => {
        console.log(product)
        totalList.push(product);
      });
      const list = totalList[0];
      console.log(list)
      const name = list.name;
      console.log(name)
      dispatch(removeQuantity(name));
    } else {
      console.log(thisName);
      localStorage.removeItem(`${thisName}${size}`);
      dispatch(deleteItemFromCart({ thisName, size })); // цена не отнимается
      const fillHeartObj = JSON.parse(localStorage.getItem('fillBag')) || {}; // доработать
      fillHeartObj[id] = false;
      localStorage.setItem('fillBag', JSON.stringify(fillHeartObj));
    }
  };

  const allQuantity = (name, id, size) => {
    const getSize = JSON.parse(localStorage.getItem('selectedSize'));
    const get = JSON.parse(localStorage.getItem(`${name}${size}`));
    if (get !== null) {
      console.log(get.quantity);
      return get.quantity;
    }
  };

  const len = () => {
    if (itemsList !== null) {
      return itemsList.length;
    }
  };

  const getFirstSize = (size) => {
    console.log(size);
    return size.first;
  };

  const arrangeTheOrder = () => {
    localStorage.setItem('totalPriceOrder', JSON.stringify(totalPriceList));
  };

  return (
    <div className="Bag">
      <h2>Корзина</h2>
      <div className="allBagBlocks">
        {len() === 0 ? (
          <div className="emptyLikedBag">
            <div className="bgDivEmpty">
              <div className="bgEmpty"></div>
            </div>
            <div className="bottomText">
              <div className="emptyText">ВАША КОРЗИНА ПУСТА</div>
              <div className="emptyAddText">
                Выберите нужный вам товар и добавьте его в корзину
              </div>
              <button className="buttonBuy">
                <Link to="/" className="linkButtonBuy">
                  К покупкам
                </Link>
              </button>
            </div>
          </div>
        ) : (
          <div className="allProducts">
            {totalLengthProducts()}
            {totalLengthProducts() === 1 ? (
              <span> товар</span>
            ) : totalLengthProducts() === 2 ||
              totalLengthProducts() === 3 ||
              totalLengthProducts() === 4 ? (
              <span> товара</span>
            ) : (
              <span> товаров</span>
            )}
          </div>
        )}

        {itemsList?.map((product) => (
          <div className="productList" key={product.id}>
            <div className="products">
              <div
                className="productImg"
                style={{
                  backgroundImage: `url(${product.img})`,
                }}
              ></div>

              <div className="informationAboutProduct">
                <div className="productName">{product.name}</div>
                <div className="lineSize">
                  <div className="nameSize">Размер</div>
                  {product.selectedSize ? (
                    <div className="productSize">{product.selectedSize}</div>
                  ) : (
                    <div className="productSize">
                      {getFirstSize(product.size)}
                    </div>
                  )}
                </div>
                <div className="lineColor">
                  <div className="nameColor">Цвет</div>
                  {product.color === 'brown' ? (
                    <div className="brown"></div>
                  ) : product.color === 'green' ? (
                    <div className="green"></div>
                  ) : product.color === 'pink' ? (
                    <div className="pink"></div>
                  ) : product.color === 'blue' ? (
                    <div className="blue"></div>
                  ) : null}
                </div>
              </div>

              <div className="allProductsQuantity">
                <div className="allQuantityMenu">
                  {product.selectedSize ? (
                    <button
                      className="removeQuantity"
                      onClick={() =>
                        removeQuantityFunc(
                          product.name,
                          product.id,
                          product.selectedSize
                        )
                      }
                    >
                      -
                    </button>
                  ) : (
                    <button
                      className="removeQuantity"
                      onClick={() =>
                        removeQuantityFunc(
                          product.name,
                          product.id,
                          product.size.first
                        )
                      }
                    >
                      -
                    </button>
                  )}
                  {/* <button
                    className="removeQuantity"
                    onClick={() => removeQuantityFunc(product.name, product.id)}
                  >
                    -
                  </button> */}
                  {product.selectedSize ? (
                    <div className="allQuantity">
                      {allQuantity(
                        product.name,
                        product.id,
                        product.selectedSize
                      )}
                    </div>
                  ) : (
                    <div className="allQuantity">
                      {allQuantity(
                        product.name,
                        product.id,
                        product.size.first
                      )}
                    </div>
                  )}
                  {product.selectedSize ? (
                    <button
                      className="addQuantity"
                      onClick={() =>
                        addQuantityFunc(
                          product.name,
                          product.price,
                          product.selectedSize
                        )
                      }
                    >
                      +
                    </button>
                  ) : (
                    <button
                      className="addQuantity"
                      onClick={() =>
                        addQuantityFunc(
                          product.name,
                          product.price,
                          product.size.first
                        )
                      }
                    >
                      +
                    </button>
                  )}
                  {/* <button
                    className="addQuantity"
                    onClick={() => addQuantityFunc(product.name, product.price)}
                  >
                    +
                  </button> */}
                </div>
              </div>
              <div className="allPrice">
                <div className="price">
                  {Intl.NumberFormat('ru-RU').format(product.price)} ₽
                </div>
                <del className="oldPrice">
                  {Intl.NumberFormat('ru-RU').format(product.oldPrice)} ₽
                </del>
              </div>
            </div>
          </div>
        ))}

        {totalLengthProducts() > 0 && (
          <div className="bottomBag">
            <div className="buyAll">
              <div className="totalPriceLine">
                <div className="totalPriceText">Итого</div>
                <div className="totalPrice">
                  {Intl.NumberFormat('ru-RU').format(totalPriceList)} ₽
                </div>
              </div>
              <Link to="/order">
                <button className="arrangeTheOrder" onClick={arrangeTheOrder}>
                  Оформить заказ
                </button>
              </Link>
            </div>
            <button className="clearButton" onClick={clearTheBag}>
              ОЧИСТИТЬ КОРЗИНУ
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Bag;
