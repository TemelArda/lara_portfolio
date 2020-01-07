import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBAnimation } from 'mdbreact';
import './Skills.css';

const TechSkills={
    s1:'Python', s2:'C++',
    s3: 'MS Office 365', s4:'Expensify',
    s5:'Quick Books', s6:'Adobe Photoshop',
    s7:'iMovie'
}
const BSkills={
    s1:'Financial', s2:'Marketting',
    s3: 'Invesments', s4:'Sales',
    s5:'Portfolio Managment'
}

class Skil extends React.Component{
    render(){
        return(
            <MDBRow className='skill-content d-flex mx-auto my-5 justify-content-center'>
                <MDBCol lg='5' className='text-left'>
                    <h1 className='skill-title'>Technichal Skills</h1>
                    <hr className='skill-line'/>
                    <ul className='skill-list text-left'>
                        <li>{this.props.TechSkills.s1}</li>
                        <li>{this.props.TechSkills.s2}</li>
                        <li>{this.props.TechSkills.s3}</li>
                        <li>{this.props.TechSkills.s4}</li>
                        <li>{this.props.TechSkills.s5}</li>
                        <li>{this.props.TechSkills.s6}</li>
                        <li>{this.props.TechSkills.s7}</li>
                    </ul>
                </MDBCol>
                <MDBCol lg='5' className='text-left'>
                    <h1 className='skill-title'>Business and Analytical Skills</h1>
                    <hr className='skill-line'/>
                    <ul className='skill-list text-left'>
                    <li>{this.props.BSkills.s1}</li>
                        <li>{this.props.BSkills.s2}</li>
                        <li>{this.props.BSkills.s3}</li>
                        <li>{this.props.BSkills.s4}</li>
                        <li>{this.props.BSkills.s5}</li>
                    </ul>
                </MDBCol>
            </MDBRow>
        );
    }
}

function Skills(){
    return(
        <MDBContainer fluid className = 'skills exp px-5'>
          <Skil TechSkills = {TechSkills} BSkills={BSkills}/>  
        </MDBContainer>
    );
}

export default Skills;