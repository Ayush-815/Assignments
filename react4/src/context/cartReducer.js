export const initialState = {
  cart: []
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (state.cart.find(item => item.id === action.payload.id)) {
        return state; // prevent duplicates
      }
      return { ...state, cart: [...state.cart, action.payload] };

    case "REMOVE_FROM_CART":
      return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };

    default:
      return state;
  }
};
