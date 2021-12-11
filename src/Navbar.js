import React from 'react';
import CartItem from './CartItem';

const Navbar=()=>
{
        return(
            <div className="navbar" style={Styles.nav}>
                <div className="cartIconContainer" style={Styles.cartIconContainer}>
                    <img style={Styles.cartIcon} src="https://cdn-icons-png.flaticon.com/512/34/34568.png" alt="cart-icon"/>
                    <span style={Styles.cartCount}>3</span>
                </div>
            </div>
        )
}

const Styles = {
    cartIcon: {
      height: 32,
      marginRight: 20
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 0,
      top: -9
    }
  };


export default Navbar;