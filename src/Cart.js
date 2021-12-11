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
    handleonIncreaseQuantity=(product)=>{
        const {products} =this.state;
        //console.log(prod);
        const index=products.indexOf(product);
        products[index].qty+=1;
        this.setState({
            products:products
        })
        //console.log("yes you need to in the qty of this item",product);
    }
    handleondecreaseQuantity=(product)=>{
        if(product.qty<=0)
        {
            return;
        }
        const {products} =this.state;
        const index=products.indexOf(product);
        products[index].qty-=1;
        this.setState({
            products:products
        })

    }

    render(){
        //destructing the object
        const {products}=this.state;
        //console.log("prodcuts in side render",products);
        return(
            <div className="cart">
                {products.map((cartItem) => {
                    return(
                        <CartItem
                            product={cartItem}
                            key={cartItem.id}
                            onIncreaseQuantity={this.handleonIncreaseQuantity}
                            onDecreaseQuantity={this.handleondecreaseQuantity}
                        />
                    )
                })}


            </div>
        )

    }

}



export default Cart;