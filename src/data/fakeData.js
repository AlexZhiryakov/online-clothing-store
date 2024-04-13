import bestSale from '../img/bestSale.svg';
import hitSeason from '../img/хитСезона.svg';
import top from '../img/топПродаж.svg';

import firstSale from '../img/firstSale.svg';
import secondSale from '../img/18.svg';
import thirdSale from '../img/10.svg';
import fourSale from '../img/16.svg';

// голубая худи
import blueHoodyFirst from '../img/hoodyNikeBlueFirst.jpg';
import blueHoodySecond from '../img/hoodyNikeBlueSecond.jpg';
import blueHoodyThird from '../img/hoodyNikeBlueThird.png';
import blueHoodyFour from '../img/hoodyNikeBlueFour.png';

// зеленые кроссы
import greenShoesFirst from '../img/greenShoesFirst.jpg';
import greenShoesSecond from '../img/greenShoesSecond.jpg';
import greenShoesThird from '../img/greenShoesThird.jpg';
import greenShoesFour from '../img/greenShoesFour.jpg';

// коричневые кроссы
import brownJordanFirst from '../img/brownJordanFirst.png';
import brownJordanSecond from '../img/brownJordanSecond.png';
import brownJordanThird from '../img/brownJordanThird.jpg';
import brownJordanFour from '../img/brownJordanFour.png';

// коричневые брюки
import brownTrousersFirst from '../img/brownTrousersFirst.png';
import brownTrousersSecond from '../img/brownTrousersSecond.png';
import brownTrousersThird from '../img/brownTrousersThird.png';
import brownTrousersFour from '../img/brownTrousersFour.png';

// розовая толстовка
import pinkHoodyFirst from '../img/pinkHoodyFirst.jpg';
import pinkHoodySecond from '../img/pinkHoodySecond.jpg';
import pinkHoodyThird from '../img/pinkHoodyThird.jpg';
import pinkHoodyFour from '../img/pinkHoodyFour.jpg';

// бежевые шорты
import whiteShortsFirst from '../img/whiteShortsFirst.jpg';
import whiteShortsSecond from '../img/whiteShortsSecond.jpg';
import whiteShortsThird from '../img/whiteShortsThird.jpg';
import whiteShortsFour from '../img/whiteShortsFour.jpg';

const fakeData = [
  {
    id: '1',
    category: 'hoody',
    img: blueHoodyFirst,
    imgSecond: blueHoodySecond,
    imgThird: blueHoodyThird,
    imgFour: blueHoodyFour,
    name: 'Nike Club Fleece',
    price: 7990,
    oldPrice: 10490,
    sale: firstSale,
    quantity: 1,
    widthMark: '10.2vw',
    size: {
      first: 'S',
      second: 'M',
      third: 'L',
      fourth: 'XL',
      fifth: 'XXL',
    },
    color: 'blue',
    allQuantity: 14,
  },
  {
    id: '2',
    category: 'sneakers',
    mark: bestSale,
    img: greenShoesFirst,
    imgSecond: greenShoesSecond,
    imgThird: greenShoesThird,
    imgFour: greenShoesFour,
    name: 'Air Jordan 1 Low SE',
    price: 10990,
    oldPrice: 12990,
    sale: secondSale,
    quantity: 1,
    widthMark: '10.2vw',
    size: {
      first: '39',
      second: '40',
      third: '41',
      fourth: '42',
      fifth: '43',
      sixth: '44',
    },
    color: 'green',
    allQuantity: 3,
  },
  {
    id: '3',
    category: 'sneakers',
    mark: top,
    img: brownJordanFirst,
    imgSecond: brownJordanSecond,
    imgThird: brownJordanThird,
    imgFour: brownJordanFour,
    name: 'Air Jordan 1 Low Method of Make',
    price: 12490,
    oldPrice: 13749,
    sale: thirdSale,
    quantity: 1,
    widthMark: '9.48vw',
    size: {
      first: '39',
      second: '40',
      third: '41',
      fourth: '42',
      fifth: '43',
      sixth: '44',
    },
    color: 'brown',
    allQuantity: 5,
  },
  {
    id: '4',
    category: 'trousers',
    mark: hitSeason,
    img: brownTrousersFirst,
    imgSecond: brownTrousersSecond,
    imgThird: brownTrousersThird,
    imgFour: brownTrousersFour,
    name: 'High-Waisted Loose Women Cargo Pants',
    price: 7990,
    oldPrice: 9290,
    sale: fourSale,
    quantity: 1,
    widthMark: '8.88vw',
    size: {
      first: 'S',
      second: 'M',
      third: 'L',
      fourth: 'XL',
      fifth: 'XXL',
    },
    color: 'brown',
    allQuantity: 7,
  },
  {
    id: '5',
    category: 'hoody',
    img: pinkHoodyFirst,
    imgSecond: pinkHoodySecond,
    imgThird: pinkHoodyThird,
    imgFour: pinkHoodyFour,
    name: 'Nike Sportswear Phoenix Fleece',
    price: 6590,
    oldPrice: 7659,
    sale: fourSale,
    quantity: 1,
    widthMark: '10.2vw',
    size: {
      first: 'S',
      second: 'M',
      third: 'L',
      fourth: 'XL',
      fifth: 'XXL',
    },
    color: 'pink',
    allQuantity: 8,
  },
  {
    id: '6',
    category: 'shorts',
    mark: top,
    img: whiteShortsFirst,
    imgSecond: whiteShortsSecond,
    imgThird: whiteShortsThird,
    imgFour: whiteShortsFour,
    name: 'Nike Sportswear Tech Fleece Shorts',
    price: 8990,
    oldPrice: 9990,
    sale: thirdSale,
    quantity: 1,
    widthMark: '9.48vw',
    size: {
      first: 'S',
      second: 'M',
      third: 'L',
      fourth: 'XL',
      fifth: 'XXL',
    },
    color: 'brown',
    allQuantity: 9,
  },
];

export default fakeData;

// 2 последние с неправильным sale
