import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContext, CartContextProvider } from './components/context/CartContext';
import { useState } from 'react';
import {Cart} from './pages/Cart/Cart';




function App() {
 
  return (
    
    <> 
      <CartContextProvider>
     <BrowserRouter>
       <NavBar />
         <Routes>
           <Route path="/" element={<ItemListContainer/>}/>
           <Route path="/category/:category" element={<ItemListContainer/>}/>
           <Route path="product/:id" element={<ItemDetailContainer/>}/>
           <Route path="/cart" element={<Cart/>}/>
         </Routes>
     </BrowserRouter>
     </CartContextProvider>
    </>
  )}

export default App
