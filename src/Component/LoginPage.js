import React,{useState,useRef} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'

function LoginPage() {
    const [text,setText]=useState('');

    function inputValue(e){
        setText(e.target.name=e.target.value);
    }

    function record(){
        const copy={};
        copy[text]={};

        fetch(`http://localhost:8000/database`,{
            method:'POST',
            headers:{
                'Accept': 'application.json',
                'Content-Type': 'application/json'
                },
            body:JSON.stringify(copy)
        }).then((res)=>{return res.json()})
    }
  return (
    <div className="loginBox">
            <h1 className="loginHeader">
                WellCome To My Shop
            </h1>
            <h3 className="title">
                Enter Your Name To Save Data
            </h3>
            <div className="inputField">
            <input type="text" name="yourName" placeholder='yourName' value={text} onChange={inputValue} className='logInput'/>
            </div>
            <div className="logBtnArea">
            <Link className="logBtn" to={`app/${text}`} onClick={record}>
                Enter The Shop
            </Link>
            </div>
        </div>
  )
}

export default LoginPage