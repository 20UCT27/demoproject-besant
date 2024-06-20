import React from "react";
import './Description.css';

function DescriptionBox(){
    return(
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (100)</div>
            </div>
            <div className="descriptionbox-description">
                <p>An e-commarce website is an online platform that  facilities to buying and selling of product or services over 
                    the internet.It serves as a virtual marketplace where bussiness and individuals can showcase their products,interact 
                    with customers , and conduct transactions without the need for a physical presence. E-Commarce websites have gained immense 
                    popularity due to their convience,accessibility , and the global reach they offer.
                </p>
                <p>E-commerce websites typically display products or services along with detailed descriptions,images,prices and any avilable 
                    variations(e.g.,sizes,colors). Each product usually has its own dedicated page with relevent information.
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox;