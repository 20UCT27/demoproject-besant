import React, { useContext } from "react";
import './CartItems.css';
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from '../Assets/cart_cross_icon.png';
import rupee_icon from '../Assets/ruppe_logoe2.png';
import remove_icons from '../Assets/cart_cross_icon.png';
import ruppee_icon from '../Assets/ruppe_logoe2.png';


function CartItems(){
    const {getTotalCartAmount,all_product,cartItem,removeFromCart} = useContext(ShopContext);
    function paymentAlert(msg){
        alert(msg);
    }
    return(
        <div className="cartitems">
            <div className="cartitem-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr/>
           {all_product.map((e)=>{
                if(cartItem[e.id]>0){
                    return  <div>
                    <div className="cartitems-format cartitem-format-main">
                      <img src={e.image} alt="" className="carticon-product-icon"/>
                      <p>{e.name}</p>
                      <p><img src={rupee_icon} alt=""/>{e.new_price}</p>
                      <button className="cartitems-quantity">{cartItem[e.id]}</button>
                      <p><img src={rupee_icon} alt=""/>{e.new_price*cartItem[e.id]}</p>
                      <img className="cartitem-remove-icon" src={remove_icons} onClick={()=>{removeFromCart(e.id)}} alt=""/>
                    </div>
                    <hr/>
                 </div>
                }
                return null;
           })}
           <div className="cartsitem-down">
            <div className="cartitems-total">
                <h1>Cart Totals</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p><img src={rupee_icon} alt=""/>{getTotalCartAmount()}</p>
                    </div>
                    <hr/>
                    <div className="cartitems-total-item">
                        <p>Shipping Fees</p>
                        <p>Free</p>
                    </div>
                    <hr/>
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3><img src={rupee_icon} alt=""/>{getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button onClick={((msg)=>{paymentAlert("Your Payment is Successfull !... Thank you for visiting our Website !...")})}>PROCEED TO PAYMENT</button>
            </div> 
            <div className="cartitems-promocode">
                <p>If you have a promo code , Enter it here</p>
                <div className="cartitrems-promobox">
                    <input type="text" placeholder="promo code"/>
                    <button>Submit</button>
                </div>
            </div>
           </div>
        </div>
    )
}

export default CartItems;