import React, { Component } from 'react';
import CartItem from './CartItem'
export default function CartList({ value }) {
    const { cart } = value;

    return (
        <div className="container-fluid list-wrapper mb-2 pb-2">
            {cart.map(item=>{
                return <CartItem key={item.id} item={item} 
                value={value} />
            })}

        </div>
    )
}