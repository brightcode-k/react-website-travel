import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';



function App() {
  return (
    <>
    <Router>
      <NavigationBar />
      <Routes>
       <Route path='/' exact element={<Home/>}/>
       <Route path='/services' element={<Services/>}/>
       <Route path='/sign-up' element={<SignUp />}/>
      </Routes>
      </Router>
    </>
  );
}

export default App;
