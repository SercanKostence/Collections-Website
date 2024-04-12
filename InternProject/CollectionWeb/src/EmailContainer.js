import React from 'react';
import { PiPaperPlaneTilt } from "react-icons/pi";
import './Email.scss'; 

function EmailContainer(props) {
  const { image } = props;
  
  return ( 
    <div className="email-container">
      <div className="columns">
        <div className="column">
          <h1 className='header'>Subscribe our newsletter</h1>
          <p>Recieve latest news, updates, and many other things every week.</p>
          <div className="input-container">
            <input type="email" placeholder="Enter your email address" />
            <button className="email-button">
            <PiPaperPlaneTilt size={23}/>
            </button>
          </div>
        </div>
      </div>
      <img src={image} alt="" />
    </div>
  );
}

export default EmailContainer;
