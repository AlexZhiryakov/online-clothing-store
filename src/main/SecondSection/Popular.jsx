import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Slide from './Slide';
import 'swiper/css';
import 'swiper/css/navigation';
import './Popular.css';
import RouterProduct from './RouterProduct';
import data from '../../data/fakeData.js';

function Popular() {
  const nextRef = useRef(null);
  const prevRef = useRef(null);

  const checkWindowWidth = () => {
    const width = window.innerWidth;
    if (width > 1100) {
      return 4;
    } else if (width < 1100) {
      return 2;
    }
  };

  return (
    <div className="Popular">
      <div className="firstLine">
        <h2 className="namePopular">Популярное</h2>
        <div className="navigation">
          <button className="prev" ref={prevRef}>
            <div className="firstNavigation"></div>
          </button>
          <button className="next" ref={nextRef}>
            <div className="secondNavigation"></div>
          </button>
        </div>
      </div>
      <div className="secondLine">
        <Swiper
          slidesPerView={checkWindowWidth()}
          loop={true}
          speed={800}
          modules={[Navigation]}
          navigation={{
            prevEl: '.prev',
            nextEl: '.next',
          }}
        >
          {data.map((item) => (
            <SwiperSlide ref={nextRef} className="firstSlide">
              <div className="allBlocks">
                <Slide item={item} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Popular;
