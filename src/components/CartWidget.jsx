import React from 'react';
import "./styles/CartWidget.css"

export default function CartIcon() {
    const cartIcon = "https://cdn.icon-icons.com/icons2/2715/PNG/512/shopping_cart_icon_172223.png"
    return(
        <div className='cart-widget'>
           <img src={cartIcon} alt="" />
           <div className="qty-display">0</div>
        </div>
        
    )
}