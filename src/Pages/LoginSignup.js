import React, { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import './CSS/LoginSignup.css';
import { ValuesReducer, initialState } from "./Reducer";




function LoginSignup(){
    const [Username , setUserName]=useState("");
    const[password,setPassword]=useState("");
    const navigate = useNavigate();
    const [values,dispatch]= useReducer(ValuesReducer,initialState)

    useEffect(()=>{
        console.log(values);
    },[])

    function checkLogin(){
        if(Username ===values.userName){
            if(password ===values.Password){
                alert("Login Success")
                navigate('/')
            }else{
                alert("Password is not matching registration page")
            }
        }else{
            alert("UserName is  not matching registration page")
        }
    }
    return(
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>LOGIN</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder="Your UserName" value={Username} onChange={(e)=>{setUserName(e.target.value)}}/>
                    <input type="password" placeholder="Your Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                <button onClick={()=>{checkLogin()}}>Continue To Shop</button>
            </div>
        </div>
    )
}

export default LoginSignup;