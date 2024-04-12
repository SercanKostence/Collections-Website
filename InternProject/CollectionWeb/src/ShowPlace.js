import React from 'react';

// scss özellikleri app.scss içerisinde
function ShowPlace(props){
  const {image, price, year, bids, closeDay, type} = props;
  return (
    <div className="card">
      <div className="card-image">
        <figure className="images">
          <img src={image} alt='img'/>
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p><strong>DATA 1</strong></p>
            <p className='product-details'>Year: {year} | {type}</p> 
            <div className='price-and-button'>
              <p className='bold-type'>$ {price}</p>
              <a href="soria.com" className="button">View Details</a>
            </div>
            <div className='bid-details'>
              <p><strong>{bids} bids so far. </strong></p>
              <p>Bidding closes in {closeDay} Days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowPlace;
