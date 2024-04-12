import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import Footer from './components/Footer.js';
import ShowPlace from './ShowPlace.js';
import vazo from './images/vazo.png'
import data from './data.json';
import chair from './images/chair.png';
import sofa from './images/sofa.png';
import skull from './images/skull.png';
import avatar from './images/avatar.png'
import statue from './images/statue.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Categories from './Categories.js';
import Feedback from './Feedback.js';
import by from './images/by.png';
import news from './images/newsla.png';
import fback from './fback.json';
import EmailContainer1 from './EmailContainer';
import NavbarStroke from './NavbarStroke.js';
import Collection from './Collection.js';
import CollectionData from './collectionData.json';
import SearchBox from './SearchBox.js';
import SearchBoxData from './SearchBoxData.json';
import NavbarStrokeBottom from './NavbarStrokeBottom.js';







function App() {
  return (
    <div className="App">
      <div>
        <section>
          <NavbarStroke />
        </section>
      </div>

      <section>
      <div className='columns'>
            {CollectionData.map((collectdata, index)=> (
              <div className="row" key={index}>
         <Collection image={vazo}
        CollectionYear={collectdata.CollectionYear}
        country={collectdata.country}
        CollectionBids={collectdata.CollectionBids}
        />
        </div>
            ))}
          </div>
      </section>
        
        <section>
            <SearchBox data={SearchBoxData}/>
        </section>

      <div className='container'> 
        <header className='header'>Recently Added
              <div className='arrow-buttons'>
          <button className='circular-button'>
          <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button className='circular-button'>
          <FontAwesomeIcon icon={faArrowRight} />
          </button>
              </div> 
        </header>
        
          <section className='section-recently'>
            <div className='columns'>
            {data.map((course, index) => (
              <div className='column' key={index}>
                <ShowPlace
                  image={index === 0 ? chair : index === 1 ? sofa : skull}
                  title={course.title}
                  price={course.price}
                  year={course.year}
                  bids={course.bids}
                  closeDay={course.closeDay}
                  type={course.type} 
                />
              </div>
            ))}
            </div>
          </section>

        <section>
          <div>
            <header className='header'>Top Categories
            <div className='arrow-buttons'>
          <button className='circular-button'>
          <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button className='circular-button'>
          <FontAwesomeIcon icon={faArrowRight} />
          </button>
              </div> 
            </header>
              <div>
                <h4 className='baslik2'>
                  Party we years to order allow asked of. We so opiniıo firends me message as delight. 
                </h4>
                <Categories images={[skull, skull, statue , sofa,chair , chair]}
                />
            </div>
          </div>
        </section>

        <section className='feedback'>
          <div className='columns'>
            {fback.map((fb, index)=> (
              <div className="row" key={index}>
          <Feedback image={by} 
            description={fb.description}
            avatar={avatar}
          />
          </div>
          ))}
          </div>
        </section>

        <section>
          <EmailContainer1 image={news}/>
        </section>

        <section>
            <Footer />
        </section>

        <section>
            <NavbarStrokeBottom />
        </section>

      </div>
    </div>
  );
}

export default App;
