import React from 'react';
class CartItem extends React.Component
{
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
    decreaseQuantity=()=>
    {
        const {qty}=this.state;

        if(qty<=0)
        {
            return ;    
        }
        this.setState({
            qty:this.state.qty-1
        })
    }

 
    render()
    {
        //destructuring the object
        //console.log('this.props',this.props.product);
        const {price,title,qty}=this.props.product;

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
                            onClick={()=>this.props.onIncreaseQuantity(this.props.product)}
                            />
                        <img
                            alt="decrease"
                            src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                            className="action-icons"
                            onClick={()=>this.props.onDecreaseQuantity(this.props.product)}
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