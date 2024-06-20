import React, { useReducer,useState } from "react";
import './CSS/RegistrationPage.css';
import { useNavigate } from "react-router-dom";
import { ValuesReducer, initialState } from "./Reducer";



function RegistrationPage(){
        const [userName , setUsername] = useState("");
        const [Email , setEmailId] = useState("");
        const [MobileNumber , setMobileNo] = useState("");
        const [Address , setAddress] = useState("");
        const [Password , setPassword] = useState("");
        const navigate = useNavigate();
        const [values,dispatch] = useReducer(ValuesReducer,initialState);


    async function checkregister(){
            if(userName !== ""){
                if(Email !== ""){
                    if(MobileNumber !== ""){
                        if(Address !== ""){
                            if(Password !== ""){
                             await dispatch({type:'VALUES',userName:userName,Password:Password})
                                alert('Registration is Successfull')
                                navigate('/Login')
                            }else{
                                alert('password is required')
                            }
                        }else{
                            alert('Address is required')
                        }
                    }else{
                        alert('Mobile No is Required')
                    }
                }else{
                    alert('Email is Required')
                }
            }else{
                alert('UserName is Required')
            }
    }
    return(
        <div className="regisrationpage">
            <div className="registrationpage-container">
            <h1>REGISTRATION</h1>
                <div className="registrationpage-fields">
                    <input type="text" placeholder="Your Name" value={userName} onChange={(e)=>{setUsername(e.target.value)}}/>
                    <input type="email" placeholder="Your Email" value={Email} onChange={(e)=>{setEmailId(e.target.value)}}/>
                    <input type="text" placeholder="Your MobileNo" value={MobileNumber} onChange={(e)=>{setMobileNo(e.target.value)}}/>
                    <input type="address" placeholder="Your Address" value={Address} onChange={(e)=>{setAddress(e.target.value)}}/>
                    <input type="password" placeholder="Set New Password" value={Password} onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                <button onClick={()=>{checkregister()}}>Register</button>
            <div className="registrationpage-agree">
                    <input type="checkbox" name="" id=""/>
                    <p>By Continuing , i agree to the terms of use & privacy policy.</p>
                </div>
            </div>
        </div>
    )
}

export default RegistrationPage;