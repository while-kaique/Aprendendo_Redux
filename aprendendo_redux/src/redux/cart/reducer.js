
import CartActionTypes from "./action-types";

const initialState = {
    products: [],
    productsTotalPrice: 0
}

const cartReducer = (state = initialState, action) => {
    switch (action.type){
        case CartActionTypes.ADD_PRODUCT:
            return {
                ...state, 
                products: [...state.products, action.payload]
            }
        case CartActionTypes.REMOVE_PRODUCT:
            return {}
    default: 
        return state
}

}

export default cartReducer;