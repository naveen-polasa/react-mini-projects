const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }
  if (action.type === "REMOVE_ITEM") {
    const newCart = state.cart.filter((item) => item.id !== action.payload.id);
    return { ...state, cart: newCart };
  }
  if (action.type === "INCREASE" ) {
    let newCart = state.cart.map((item) => {
      if (item.id === action.payload.id) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    return { ...state, cart: newCart };
  }
  if (action.type === "DECREASE") {
    let newCart = state.cart
      .map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      })
      .filter((item) => item.amount > 0);
    return { ...state, cart: newCart };
  }
  if (action.type === "GET_TOTALS") {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { amount, price } = cartItem;
        cartTotal.amount += amount;
        cartTotal.total += amount * price;
        return cartTotal;
      },
      { total: 0, amount: 0 }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }
  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }
  if (action.type === "DISPLAY_CART") {
    return { ...state, cart: action.payload, loading: false };
  }
  return new Error('no action type matched');
};

export default reducer;
