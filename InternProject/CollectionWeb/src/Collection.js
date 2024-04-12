import React from 'react';
import './CollectionStyle.scss';
import { CiPlay1 } from 'react-icons/ci';
import { PiBuildings } from 'react-icons/pi';
import { GoTrophy } from 'react-icons/go';
import { LiaShareAltSolid } from 'react-icons/lia';

function Collection(props) {
    const { image, CollectionYear, country, CollectionBids } = props;

    return (
        <div className="collection-container">
            <div className="left-column">
                <h1 className='header-bigs'>World’s Biggest</h1>
                <h2 className='header-bigs' style={{ color: '#263FA3' }}>Antique Collection</h2>
                <p style={{ color: '#949494', fontSize: '18px' }}>From they fine john he give of rich he. They age and draw
                    mrs like. Improving end distruts may instantly was
                    household applauded incommode.</p>
                <div className="button-group">
                    <button className='button-navbar collection-button'>Discover Now</button>
                    <div className="circle-button-container">
                        <button className="circle-button">
                            <CiPlay1 size={20}/>
                        </button>
                        <p className="watch-video-text" style={{ width: '500px' }}>Watch Video</p>
                    </div>
                </div>
            </div>
            <figure className="images-icon">
                <img src={image} alt='img' />
            </figure>
            <div className="right-column">
                <div className="button-container">
                    <div className="icon-box-container">
                        <div className="icon-box">
                            <div className='border-with-shadow'>
                            <LiaShareAltSolid size={40} color="#FF7B29"/>
                            </div>
                            <div className="icon-info">
                                <h3>{CollectionYear}</h3>
                                <p className='origins'>Year</p>
                            </div>
                        </div>
                        <div className="icon-box">
                        <div className='border-with-shadow'>
                            <GoTrophy size={40} color="#FF7B29"/>
                            </div>
                            <div className="icon-info">
                                <h3>{CollectionBids}</h3>
                                <p className='origins'>Bids so far.</p>
                            </div>
                        </div>
                        <div className="icon-box">
                            <div className='border-with-shadow'>
                            <PiBuildings size={40} color="#FF7B29"/>
                            </div>
                            <div className="icon-info">
                                <h3>{country}</h3>
                                <p className='origins'>origin</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Collection;
