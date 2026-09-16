// Import the React and ReactDOM libraries 
import React from 'react';
import ReactDOM from 'react-dom/client';

// 2) Get a reference to the div with ID root
const el= document.getElementById('root');

// Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// create an component
function App(){
// let message = [1,2,3];
 return <h1>{new Date().toLocaleString()}</h1>;

}

root.render(<App/>);
