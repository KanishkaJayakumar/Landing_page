import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Feature from './components/Feature';
import About from './components/About';
import aboutimage from './components/images/about.png'
import aboutimage1 from './components/images/download.jpeg'
import Presentation from './components/Presentation';
import Contact from './components/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
  <Header/>
  <Feature/>
  <About image={aboutimage} title='Comes with All you need for Daily Life' button={'Get the App'}/>
  <Presentation/>
  <About image={aboutimage1} title='Download and Get the App now' button={'Download'}/>
  <Contact/>
  </>,
);

