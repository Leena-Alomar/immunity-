import "./styles.css";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  

const Welcome = () =>{
    const navigate = useNavigate();
    const [btnOp,setBtnOp] = useState("");

    function handleBtnClick (e,destnation){
        e.preventDefault()
        navigate(destnation);
    }

     return (
    <div className="welcome-div">
      
     
      <div className="register-container">
        <h1 className="welcoming">Start your <br /> <span style={{color:"rgba(228, 242, 242, 1)"}}>Fitness</span> Journey</h1>
        <div className="register-btns">
          <button className="btn1" onClick={(e)=> handleBtnClick(e,'/home')}>Login</button>
          <button className="btn2" onClick={(e)=>handleBtnClick(e,'/signup')}>SignUp</button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;