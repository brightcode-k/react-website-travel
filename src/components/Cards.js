import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import photo1 from '../assets/images/Kontraktove_koleso_night.jpg';
import photo2 from '../assets/images/Kontraktova_street_night.jpg';
import photo3 from '../assets/images/peizajna_aleya_night.jpg';
import photo4 from '../assets/images/funiculer1.jpg';
import photo5 from '../assets/images/Andriivskiy_night.jpg';
import photo6 from '../assets/images/Maidan_nezalejnosti_night.jpg'


function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these incredible places in Kyiv</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
            src={photo1}
            text='Observe beautiful Ferris wheel in the heart of Kyiv'
            label='Square'
            path='/services'
            />
            <CardItem
            src={photo2}
            text='Near famous Ferris wheel walk through old and breathtaking street filled by cafes and restaurants'
            label='Street'
            path='/services'
            />
            </ul>
            <ul className='cards__items'>
            <CardItem
            src={photo3}
            text='Walk down wriggling stairs with breathtaking view to Peizajna Aleya'
            label='Walkway'
            path='/services'
            />
            <CardItem
            src={photo4}
            text='Take a ride in a famous vehicle with fascinating view on Dnipro river'
            label='Transport'
            path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
            src={photo5}
            text='Walk up the most remarkable streer in Kyiv which is filled up with rumors and history'
            label='Street'
            path='/services'
            />
            <CardItem
            src={photo6}
            text='Visit Maidan Nezalejnosti square in the heart of Kyiv. Here happened almost all events connected to the history of modern Kyiv'
            label='Square'
            path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;