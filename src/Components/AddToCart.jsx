import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from './Context'

const AddToCart = ({ mealItems }) => {

  const { addToCart } = useContext(AppContext);
  const { _id, title, image, category, description, price } = mealItems;
  const [amount, setAmount] = useState(1);
  const cart = localStorage.getItem('cart')

  return (
    <div>
        <div className='btn btn-success' onClick={() => addToCart(_id, title, image, category, description, price, amount)}>
            Add To Cart
        </div>
    </div>
  )
}

export default AddToCart
