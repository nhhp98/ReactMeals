import React,{useState} from 'react';

import Header from './components/Layout/Header'

import Meals from './components/Meals/Meals'

import Cart from './components/Cart/Cart'

function App() {
  const [cartIsShow, setCartIsShow] = useState(false)

  const showCartHandler = () => {
    setCartIsShow(true)
  }

  const hineCartHandler = () => {
    setCartIsShow(false)
  }

  return (
    <>
      {cartIsShow && <Cart onClose={hineCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </>
  );
}

export default App;
