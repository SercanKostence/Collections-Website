import React from 'react';
import './feedback.scss';
/* Farklı yorumların da döndüğü bir slide şeklinde isteniliyorsa değiştirilecek */
function Feedback(props) {
  const { image, description, avatar } = props;

  return (
    <div className='feedback'>
      <div className='image-container'>
        <img src={image} alt='' />
      </div>
      <div className='content-container'>
        <h1 className='header-big'>Buyer's Feedback</h1>
        <p className='description-text'>{description}</p>
        <div className="avatar-container">
          <img src={avatar} className="avatar-image" alt=''/>
          <div className="avatar-info">
            <p className="avatar-text">Selena Hakim</p>
            <p className="avatar-job">UI Designer</p>
          </div>
        </div>
              <div className="star-container">
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
              </div>
      </div>
    </div>
  );
}

export default Feedback;
