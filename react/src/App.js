import React from 'react';
import './App.css';
import LocationForm from './components/LocationForm';
import Location from './components/location';
import ErrorPage from './components/error';
import ErrorPage1 from './components/error1';


function App() {
  
  return (
    <div className="App">
      <LocationForm />
      {/* <Location /> */}
      {/* <ErrorPage/> */}
      <ErrorPage1 errorMessage="Coupon is not Valid Sorry"/>
    </div>
  );
}

export default App;