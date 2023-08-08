export const cartReducer = (state, action) => {

  switch (action.type) {
    case "ADD_PRODUCTS":
        return {...state, products: action.payload}
    case "ADD_TO_CART":
        return {...state, cart: [...state.cart, action.payload]}
    case "REMOVE_FROM_CART":
        return {...state, cart: state.cart.filter((item) => item.id !== action.payload.id)}
    case "UPDATE_ITEM_CART_QUANTITY":
        return {...state, cart: state.cart.map((item) => {
          if(item.id === action.payload.id) {
            item.quantity = action.payload.quantity
          }
          return item;
        })}
    default:
      break;
  }

};

export default cartReducer;
