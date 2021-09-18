import React,{useReducer} from "react";
import CartContext from "./cart-context";

const defaultCarState = {
    items: [],
    totalAmount: 0,
}

const cartReducer = (state, action) => {

    if(action.type === 'ADD'){
        const updateItems = state.items.concat(action.item)
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updateItems,
            totalAmount: updatedTotalAmount,
        }
    }
    return defaultCarState
}


const CartProvider = props => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCarState)

    const addItemCartHandler = item => {
        dispatchCartAction({type: 'ADD', item: item})
    }

    const removeItemsFromCartHandler = id => {
        dispatchCartAction({type: 'REMOVE', id: id})
    }


    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemCartHandler,
        removeItems: removeItemsFromCartHandler,
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider