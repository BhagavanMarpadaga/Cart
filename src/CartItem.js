import React from 'react';
class CartItem extends React.Component
{
    //adding state is storing local data for particluar component
    constructor()
    {
        super();
        this.state={
            price:999,
            title:"Phone",
            qty:1 
        }
        //this.increaseQuantity= this.increaseQuantity.bind(this);
        //use arrow function to avoid this
    }
    //automatically binds ths   
    increaseQuantity =()=>
    {
        console.log('this.qty',this.state);
    }
    fuck=()=>
    {
        console.log("Yes i m called");
    }
    render()
    {
        //destructuring the object
        const {price,title,qty}=this.state;

        return(
            <div className="cart-item" style={{marginTop:30}}>
                <div className='left-block'>
                    <img style={Styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:45}}>{title}</div>
                    <div style={{ fontSize:25, color:'#778899'}}>{price}</div>
                    <div style={{fontSize:25,color:'#778899'}}>Qty:{qty}</div>
                    <div className="cart-item-actions">
                        <img
                            alt="increase"
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/512/1828/1828926.png" 
                            onClick={()=>this.increaseQuantity()}
                            />
                        <img
                            alt="decrease"
                            src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                            className="action-icons"
                             />
                        <img
                            alt="delete"
                            src="https://cdn-icons.flaticon.com/png/512/3405/premium/3405244.png?token=exp=1639211820~hmac=06a0283fab158ea15009ca115caa5522"
                            className="action-icons" />

                    </div>
                </div>
            </div>
    
        )
        
    }
}
//In jsx we cant add styles directly so we have to use objects
const Styles={
    image:{
        height:200,
        width:200,
        backgroundColor:"#b1b6bb",
        borderRadius:14
    }
}

export default CartItem;