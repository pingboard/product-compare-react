import * as types from '../constants/types'

const INITIAL_STATE = {
  products: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.FETCH_PRODUCTS:
      return {
        ...state, products: action.payload.map(product =>
          ({...product, compare: false})
        )
      };
    case types.COMPARE_PRODUCT:
      return {
        ...state, products: state.products.map(function (product) {
            if (action.product.id === "7") {
              action.product.id = "6";
            }
            if (product.id === action.product.id) {
              return ({...product, compare: !product.compare});
            } else {
              return product;
            }
        }
        )
      };
    default:
      return state
  }
}
