import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBAnimation } from 'mdbreact';
import './Education.css';

const albany = {
    name: 'University at Albany SUNY',
    imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Albany_Great_Danes_logo.svg/1200px-Albany_Great_Danes_logo.svg.png',
    date: 'Aug 2014 - May 2016',
    Gpa:'3.4',
    degree:'Transferred after Sophmore year',
    desc:{
        d1:"-Minor: Computer Science",
        d2: "-Recipient of International Student-Athlete Scholarship"
    }
}
const whitman = {
    name: 'Whitman College',
    imgURL:'https://www.trzcacak.rs/myfile/full/310-3100722_whitman-blues-whitman-college-blues-logo.png',
    date:'Aug 2016 - May 2018',
    Gpa:'3.4',
    degree:'B.A in Economics',
    desc:{
        d1:"-Dean's List Fall and Spring Semesters 2015-2016",
        d2: "-Recipient of Full-Ride Athletic Division I Volleyball Scholarship"
    }
}
const deanza = {
    name: 'De anza College',
    imgURL: "https://www.deanza.edu/civicswatch/img/DAC_Logo-w-t.png",
    date:'Aug 2019 - Present',
    Gpa:'3.92',
    degree:'Certificate of Achivment: Graphic Design',
    desc:{
        d1:"-Dean's List Fall and Spring Semesters 2015-2016",
        d2: "-Recipient of Full-Ride Athletic Division I Volleyball Scholarship"
    }
}


class EduCard extends React.Component{
    render(){
    return(
               
            <MDBCol lg='3' className = 'eduCard d-flex m-4 z-depth-5'>
                    <MDBRow className='cardImage d-flex justify-content-center h-25 '>
                        <img src = {this.props.school.imgURL} className='h-100 mw-50'/>
                    </MDBRow>
                    <MDBRow className='h-50 text-center d-flex justify-content-center m-4'>
                        <MDBCol className='cardText '> 
                            <h1>{this.props.school.name}</h1>
                             <hr/>
                             <MDBRow className = 'd-flex justify-content-around'>
                                 <MDBCol size='7'>
                                    <p className='text-left'>{this.props.school.date}</p>
                                 </MDBCol>
                                 <MDBCol size='5'>
                                    <p className = 'text-right'>GPA: {this.props.school.Gpa}</p>
                                 </MDBCol>
                             </MDBRow>
                             <p className= 'mx-auto'>{this.props.school.degree}</p>
                             <hr/>
                             <p className='text-left'>{this.props.school.desc.d1}</p>
                             <p className='text-left'>{this.props.school.desc.d2}</p>
                        </MDBCol>
                    </MDBRow>
            </MDBCol>
            
        );
    }
}


function Education(){
    return(
        <MDBContainer fluid className="education px-4">
            <MDBRow className='eduRow d-flex justify-content-around'>
               <EduCard school = {albany}/> 
               <EduCard school ={whitman}/>
               <EduCard school ={deanza}/>
            </MDBRow>
        </MDBContainer>
    );
}

export default Education;