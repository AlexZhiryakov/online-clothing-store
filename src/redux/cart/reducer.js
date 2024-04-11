import { combineSlices, createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsInCart: [],
    newTotalPrice: [],
    liked: [],
    stateBurger: false,
    product: [],
  },
  reducers: {
    setItemInCart: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        itemsInCart: action.payload,
      };
    },
    deleteItemFromCart: (state, action) => {
      const get = JSON.parse(localStorage.getItem('newTotalPrice'));
      console.log(get);
      const enumeration = get.filter(
        (el) => el.name !== `${action.payload.thisName}${action.payload.size}`
      );
      localStorage.setItem('newTotalPrice', JSON.stringify(enumeration));

      return {
        ...state,
        itemsInCart: [],
        newTotalPrice: `${action.payload.thisName}${action.payload.size}`,
      };
    },
    addQuantity: (state, action) => {
      const get = JSON.parse(
        localStorage.getItem(`${action.payload.name}${action.payload.size}`)
      );
      const quantity = get.quantity;
      const newList = { ...get, quantity: quantity + 1 };
      console.log(newList);
      localStorage.setItem(
        `${action.payload.name}${action.payload.size}`,
        JSON.stringify(newList)
      );

      const getTotal = JSON.parse(localStorage.getItem('newTotalPrice'));
      const object = {
        name: action.payload.name,
        price: action.payload.price,
      };
      object.slice(1); // удаляю повторный объект
      localStorage.setItem(
        'newTotalPrice',
        JSON.stringify([...getTotal, object])
      );

      return {
        ...state,
        newTotalPrice: [...state.newTotalPrice, action.payload],
      };
    },
    removeQuantity: (state, action) => {
      console.log('removeQuant');
      const getTotal = JSON.parse(localStorage.getItem('newTotalPrice'));
      const get = JSON.parse(localStorage.getItem(action.payload));
      console.log(get);
      const quantity = get.quantity;
      console.log(quantity);
      const newList = { ...get, quantity: quantity - 1 };
      console.log(newList);
      localStorage.setItem(action.payload, JSON.stringify(newList));

      const totalList = [];
      getTotal.map((product, index) => {
        if (product.name === action.payload) {
          totalList.push(index);
        } else {
          null;
        }
      });
      const index = totalList[0];
      getTotal.splice(index, 1);
      localStorage.setItem('newTotalPrice', JSON.stringify(getTotal));

      return {
        ...state,
        newTotalPrice: action.payload,
      };
    },
    addNewTotalPrice: (state, action) => {
      const get = JSON.parse(localStorage.getItem('newTotalPrice'));
      const lastPrice = {
        name: `${action.payload.name}${action.payload.sizee}`,
        price: action.payload.price,
      };

      if (get === 0) {
        localStorage.setItem('newTotalPrice', JSON.stringify([lastPrice]));
      } else {
        localStorage.setItem(
          'newTotalPrice',
          JSON.stringify([...get, lastPrice])
        );
      }

      return {
        ...state,
        newTotalPrice: action.payload,
      };
    },
    removeNewTotalPrice: (state, action) => {
      const get = JSON.parse(localStorage.getItem('newTotalPrice'));
      if (get !== 0 || get !== null) {
        const getFilter = get.filter(
          (el) => el.name !== `${action.payload.name}${action.payload.sizee}`
        );
        localStorage.setItem('newTotalPrice', JSON.stringify(getFilter));
      } else {
        null;
      }
    },
    addInLiked: (state, action) => {
      return {
        ...state,
        liked: action.payload,
      };
    },
    changeBurgerState: (state, action) => {
      return {
        stateBurger: action.payload,
      };
    },
    productDetails: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        product: action.payload,
      };
    },
  },
});

export const {
  setItemInCart,
  deleteItemFromCart,
  addQuantity,
  removeQuantity,
  addNewTotalPrice,
  removeNewTotalPrice,
  addInLiked,
  changeBurgerState,
  productDetails,
} = cartSlice.actions;
export default cartSlice.reducer;
