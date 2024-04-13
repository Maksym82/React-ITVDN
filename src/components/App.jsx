import React from 'react';
import './App.css';

export const App = () => {

  const el1 = React.createElement('h1', {
    'id': 123,
    'style': {
      'fontSize' : 45,
      'color': 'green',
      'background' : 'brown'
    }
  }, 'some text');

  const parag = React.createElement('p', {}, 'textcmfkvnksdnvksd');
  const block = React.createElement('div', {}, parag);
    return (
    <>
        {el1}
        <h1 id={123} style={{ fontSize: 45, color: 'green', background: 'brown' }}>some text</h1>
        {block}
    </>
  );
};
