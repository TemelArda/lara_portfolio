import React from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBIcon} from 'mdbreact';
import './headerstyle.css';
import LaraTemel from '../images/LaraTemel.JPG'

const p = <div style={{height:'100px', color:'#D9AFA0', fontSize:'36px'}}>
Scroll Up and Down this page to see the parallax scrolling effect.
This div is just here to enable scrolling.
Tip: Try to remove the background-attachment property to remove the scrolling effect.
</div>;


const introParagraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut dolor sapien. Aliquam porta quam placerat lacus aliquam, in ornare libero viverra. Suspendisse eget sem id ligula facilisis lacinia. Duis sed massa mattis, convallis dolor sed, molestie arcu. Vestibulum elementum ligula dolor, quis interdum tellus tempus et. Quisque scelerisque sodales est, vel mattis ipsum lacinia nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean sollicitudin et mi ut facilisis. Nam in neque a quam eleifend laoreet. Suspendisse sagittis erat tincidunt interdum ornare. Aliquam aliquam leo dolor. Phasellus tristique leo risus, quis porttitor leo imperdiet at. Ut quis porttitor tellus. Aenean varius rhoncus sapien, sit amet tempus enim malesuada in. Integer semper augue ut vehicula mattis. Maecenas quis sapien urna."

function Intro(props) {
    let elem = (
      <div className='intro d-flex justify-content-around align-items-center'>
        <MDBRow className='py-0 my-0'>
        <MDBCol lg= '6' className= 'introP mb-5'>
        <h1>{props.name}</h1>
        <p>{props.intro}</p>
        <div>
        <span className="mt-5">
          <a href="https://www.linkedin.com/in/lara-temel/" target="_blank"><MDBIcon fab icon="linkedin" className = "mx-md-2 mx-1" size = "2x"/> </a>
          <a href="https://www.instagram.com/laratml/?hl=en" target='_blank'><MDBIcon fab icon="instagram" className = "mx-md-2 mx-1" size = '2x'/></a>
          <a href="https://www.facebook.com/LaraTemel2" target="_blank"><MDBIcon fab icon="facebook-square" className = "mx-md-2 mx-1" size = '2x'/></a>
        </span>
        </div>
      </MDBCol>
        <MDBCol lg='4' className='imgDiv p-0 ml-lg-5  d-flex align-items-center justify-content-center'>
          <div className = "imgContainer">
          <img src={LaraTemel} alt="Lara Temel Image" className='w-100'/>
          </div>
        </MDBCol>
        </MDBRow>
      </div>
    );
    return elem;
}

function PageHeader(){   
    return(
        <MDBContainer fluid className = 'page-header py-5'>
          <Intro name="Lara Temel" intro = {introParagraph} />
        </MDBContainer> 
    )
}

export default PageHeader;