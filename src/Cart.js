import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component
{

    constructor()
    {
        super();
        this.state = {
            products: [
                {
                    price: 999,
                    title: "Phone",
                    qty: 1,
                    id:1
                },
                {
                    price: 999,
                    title: "watch",
                    qty: 1,
                    id:2
                }, 
                {
                    price: 999,
                    title: "watch",
                    qty: 1,
                    id:3
                }
            ]

        }
    }
    render(){
        //destructing the object
        const {products}=this.state;
        return(
            <div className="cart">
                {products.map((cartItem) => {
                    return(
                        <CartItem
                            product={cartItem}
                            key={cartItem.id}
                        />
                    )
                })}


            </div>
        )

    }

}



export default Cart;