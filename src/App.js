import React from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBIcon,  MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText} from 'mdbreact';
import NavBar from './components/NavBar.js';
import './App.css';
import PageHeader from './sections/pageHeader.js';
import Education from './sections/Education.js';
import Experience from './sections/Experience.js';
import Skills from './sections/Skills.js';
import Contact from './sections/Contact.js';


function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <switch>
        <PageHeader/>
        <Education/>
        <Experience/>
        <Skills/>
        <Contact/>
      </switch>
      <footer className="mt-5 py-4">
            <h4 className="mb-3">Arda Temel</h4>
            <hr/>
            <p>{'\u00A9'} Arda Temel <br/> All rights reserved.</p>
      </footer>
    </React.Fragment>
  );
  
}

export default App;
