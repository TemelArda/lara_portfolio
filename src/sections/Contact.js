import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBAnimation } from 'mdbreact';
import './Contact.css';

class ContactMe extends React.Component{
    render(){
        return(
                <MDBCol lg='5' className='mx-auto'>
                    <div>
                        <MDBRow className='d-flex justify-content-center'>
                            <h1>Contact Info</h1>
                        </MDBRow>
                        <MDBRow className='mt-3'>
                            <MDBCol>
                                <p className='text-left'>Phone:</p>
                            </MDBCol>
                            <MDBCol>
                                <a className='text-right'href='#'>+1 917 574 2295</a>
                            </MDBCol>
                        </MDBRow>
                        <hr/>
                        <MDBRow className='mt-3'>
                            <MDBCol>
                                <p className='text-left'>Adress:</p>
                            </MDBCol>
                            <MDBCol>
                                <p className='text-center'href='#'>Harvard Ave, Santa Clara CA 95051</p>
                            </MDBCol>
                        </MDBRow>
                        <hr/>
                        <MDBRow className='mt-3'>
                            <MDBCol>
                                <p className='text-left'>E-mail:</p>
                            </MDBCol>
                            <MDBCol>
                                <a className='text-right'href='mailto: laratemel@gmail.com' target="_blank">laratemel@gmail.com</a>
                            </MDBCol>
                        </MDBRow>
                        <div className= 'mt-5'>
                            <h4>Social Media</h4>
                        <span>
                            <a href="https://www.linkedin.com/in/lara-temel/" target="_blank"><MDBIcon fab icon="linkedin" className = "mx-md-2 mx-1" size = "2x"/> </a>
                            <a href="https://www.instagram.com/laratml/?hl=en" target='_blank'><MDBIcon fab icon="instagram" className = "mx-md-2 mx-1" size = '2x'/></a>
                            <a href="https://www.facebook.com/LaraTemel2" target="_blank"><MDBIcon fab icon="facebook-square" className = "mx-md-2 mx-1" size = '2x'/></a>
                        </span>
                        </div>
                    </div>
                </MDBCol>
        );
    }
}

function Contact(){
    return(
        <MDBContainer fluid className = 'contact exp p-5'>
          <ContactMe/>  
        </MDBContainer>
    );
}

export default Contact;