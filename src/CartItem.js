import React from 'react';
const CartItem = (props) => {
    //adding state is storing local data for particluar component


    //inside promise set state call works synchronously
    // testing=()=>
    // {
    //     const promise=new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             resolve('done');
    //         },5000);
    //     })
    //     promise.then(()=>{
    //         this.setState({
    //             qty:this.state.qty+100
    //         })
    //         console.log("this state",this.state);

    //     })

    // }

    //automatically binds ths   
    // increaseQuantity =()=>
    // {
    //     //set state form1(object form)
    //     this.setState({
    //         qty:this.state.qty+1
    //     })

    // }
    //set state form2 (function form) it basically does shallow merging then rerenders for app
    // decreaseQuantity=()=>
    // {
    //     this.setState((prevState)=>{
    //         return{
    //             qty:prevState.qty-1
    //         }
    //     })
    // }
    // decreaseQuantity=()=>
    // {
    //     const {qty}=this.state;

    //     if(qty<=0)
    //     {
    //         return ;    
    //     }
    //     this.setState({
    //         qty:this.state.qty-1
    //     })
    // }


    //destructuring the object
    //console.log('this.props',this.props.product);
    const { price, title, qty ,img} = props.product;
    console.log("title ",title,img);
    const { product, onDeleteCartItem, onDecreaseQuantity, onIncreaseQuantity } = props;
    // console.log("product id ",product.id);

    return (
        <div className="cart-item" style={{ marginTop: 30 }}>
            <div className='left-block'>
                <img style={Styles.image} src={img}/>
            </div>
            <div className="right-block">
                <div style={{ fontSize: 35 }}>{title}</div>
                <div style={{ fontSize: 20, color: '#778899' }}>{price}</div>
                <div style={{ fontSize: 20, color: '#778899' }}>Qty:{qty}</div>
                <div className="cart-item-actions">
                    <img
                        alt="increase"
                        className="action-icons"
                        src="https://cdn-icons-png.flaticon.com/512/1828/1828926.png"
                        onClick={() => onIncreaseQuantity(product)}
                    />
                    <img
                        alt="decrease"
                        src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                        className="action-icons"
                        onClick={() => onDecreaseQuantity(product)}
                    />
                    <img
                        alt="delete"
                        src="https://cdn-icons.flaticon.com/png/512/3405/premium/3405244.png?token=exp=1639211820~hmac=06a0283fab158ea15009ca115caa5522"
                        className="action-icons"
                        onClick={() => onDeleteCartItem(product.id)}
                    />

                </div>
            </div>
        </div>
    )
}
//In jsx we cant add styles directly so we have to use objects
const Styles={
    image:{
        height:150,
        width:150,
        backgroundColor:"#b1b6bb",
        borderRadius:14
    }
}

export default CartItem;