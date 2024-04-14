import React from 'react';
import './App.css';
import logo from '../image/logo192.png';

export const App = () => {

  const parag = React.createElement('p', {}, 'text about home work');
  const block = React.createElement('div', {}, parag);
 
    return (
    <>
      
      <h1 id={123} style={{ fontSize: 45, color: 'green', background: 'brown' }}>Title</h1>
      {block}
      <img src={logo} className='logo' alt="" />
              
    </>
  );
};


