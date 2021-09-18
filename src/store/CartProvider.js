import CartContext from "./cart-context";


const CartProvider = props => {
    const addItemCartHandler = item => {

    }

    const removeItemsFromCartHandler = id => {

    }


    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemCartHandler,
        removeItems: removeItemsFromCartHandler,
    }

    return <CartContext.Provider values={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider