import useTitle from "../hooks/useTitle"
import React from 'react'
import CartCard from '../components/CartCard'
const Cart = () => {

  useTitle("cart");

  const products  = [
    {"id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "/asset/images/1001.png"},
    {"id": 2, "name": "boAt Rockerz 450", "price": 49, "image": "/asset/images/1002.png"},
    
  ]
  return (
    <main>
      <section className='cart'>
        <h1>Cart Items : {products.length}</h1>
        {products.map((product)=>(
          <CartCard product={product}/>
        ))}
      </section>
    </main>
  )
}

export default Cart
