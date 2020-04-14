import React from 'react';
import './App.css';
import Shop from './Components/Shop/Shop';
import Cart from './Components/Cart/Cart';
function App() {
  return (
    <div className="App">
      <Cart/>
      <Shop/>
    </div>
  );
}

export default App;
