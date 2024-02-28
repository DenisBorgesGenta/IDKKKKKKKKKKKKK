import React, { useContext } from 'react'
import { IoIosCart } from "react-icons/io";
import { CartContext } from '../context/CartContext';
const CartWidget = () => {

  const {cartQuantity} = useContext(CartContext)

  return (
    <div>
        <IoIosCart />
        <span>{cartQuantity()}</span>
    </div>
  )
}

export {CartWidget}