import React, { useEffect, useState } from 'react';
import { Route, Routes, Link, HashRouter } from 'react-router-dom';
import ProductTemplate from './ProductTemplate';
import ArrangeOrder from '../../nav/ArrangeOrder';
import SuccessfullyOrder from '../../nav/SuccessfullyOrder';
import Error from '../../article/Error/Error';

function RouterProduct() {
  const get = JSON.parse(localStorage.getItem('productDetails'));
  return (
    <div className="Router">
      <Routes>
        {get !== null ? (
          <Route
            path={`${get.id}`}
            element={
              <ProductTemplate
                id={get.id}
                mark={get.mark}
                img={get.img}
                name={get.name}
                price={get.price}
                oldPrice={get.oldPrice}
                sale={get.sale}
                quantity={get.quantity}
                imgSecond={get.imgSecond}
                imgThird={get.imgThird}
                imgFour={get.imgFour}
                widthMark={get.widthMark}
                size={get.size}
                color={get.color}
              />
            }
          />
        ) : null}
        <Route path='/order' element={<ArrangeOrder />} />
        <Route path='/successfullyOrder' element={<SuccessfullyOrder />} />
        <Route path='/subsribe' element={<Error />} />
      </Routes>
    </div>
  );
}

export default RouterProduct;
