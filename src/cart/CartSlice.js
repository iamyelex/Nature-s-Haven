import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: {
      prepare(price, title, id, image) {
        return {
          payload: { price, title, id, image },
        };
      },
      reducer(state, action) {
        const existingItem = state.items.find(
          (item) => item.id === action.payload.id
        );
        // state.totalQuantity++;

        if (!existingItem) {
          state.items.push({
            id: action.payload.id,
            price: action.payload.price,
            quantity: 1,
            totalPrice: action.payload.price,
            title: action.payload.title,
            image: action.payload.image,
          });
          state.totalQuantity++;
          state.totalAmount = +state.totalAmount + +action.payload.price;
        }
        // else {
        //   existingItem.quantity++;
        //   existingItem.totalPrice += action.payload.price;
        // }
      },
    },
    removeFromCart(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );
      // state.totalQuantity--;
      // state.totalAmount -= Number(existingItem.price);

      if (existingItem.quantity > 0) {
        state.items = state.items.filter((item) => item.id !== action.payload);
        state.totalQuantity -= Number(existingItem.quantity);
        state.totalAmount -=
          Number(existingItem.price) * Number(existingItem.quantity);
      }
    },

    increaseCart(state, action) {
      state.totalQuantity++;

      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );
      if (existingItem) {
        existingItem.quantity++;
        state.totalAmount = +state.totalAmount + +existingItem.price;
      }
    },

    decreaseCart(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );
      if (existingItem.quantity > 1) {
        existingItem.quantity--;
        state.totalQuantity--;
        state.totalAmount = +state.totalAmount - +existingItem.price;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseCart, decreaseCart } =
  cartSlice.actions;

export default cartSlice.reducer;
