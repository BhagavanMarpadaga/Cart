import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {

    //destructing the object
    const { products } = props;
   // console.log("In side Cart with props",props);
    //console.log("prodcuts in side render",products);
    return (
        
        <div className="cart">
            {products.map((cartItem) => {
                return (
                    <CartItem
                        product={cartItem}
                        key={cartItem.id}
                        onIncreaseQuantity={props.onIncreaseQuantity}
                        onDecreaseQuantity={props.onDecreaseQuantity}
                        onDeleteCartItem={props.onDeleteCartItem}
                    />
                )
            })}
        </div>
    )



}



export default Cart;