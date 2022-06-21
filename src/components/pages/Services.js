import React from 'react';
import { Button } from '../Button';
import './Services.css';
import { FaLeaf } from 'react-icons/fa';
import { FaCanadianMapleLeaf } from 'react-icons/fa';
import { FaTree } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';
import Footer from '../Footer';


function Pricing() {
  return (
    <>
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Pricing</h1>
          <div className='pricing__container'>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaLeaf />
                </div>
                <h3>Starter</h3>
                <h4>$9.99</h4>
                <p>per bundle</p>
                <ul className='pricing__container-features'>
                  <li>1 Excursion</li>
                  <li>With Guide</li>
                </ul>
                <Button buttonSize='btn--large' buttonColor='primary'>
                  Choose Plan
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaCanadianMapleLeaf />
                </div>
                <h3>Medium</h3>
                <h4>$24.99</h4>
                <p>per bundle</p>
                <ul className='pricing__container-features'>
                  <li>3 Excursions</li>
                  <li>With Guide</li>
                </ul>
                <Button buttonSize='btn--large' buttonColor='blue'>
                  Choose Plan
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaTree />
                </div>
                <h3>Pro</h3>
                <h4>$79.99</h4>
                <p>per bundle</p>
                <ul className='pricing__container-features'>
                  <li>5 Excursions</li>
                  <li>With Guide</li>
                </ul>
                <Button buttonSize='btn--large' buttonColor='primary'>
                  Choose Plan
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
    <Footer />
    </>
  );
}
export default Pricing;