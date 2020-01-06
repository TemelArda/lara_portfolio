import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBAnimation } from 'mdbreact';
import './Experience.css';

const entrprise = {
    name: 'Enterprise Holdings',
    pos: 'Managment Assistant',
    date: 'Sept 2018 - July 2019',
    location: 'Sunnyvale, CA',
    responsibilities:{
        resp1:';alsdakdlasdadad',
        resp2:';alsdakdlasdadad',
        resp3:';alsdakdlasdadad',
        resp4:';alsdakdlasdadad'
    }
}

class ExpCard1 extends React.Component{
    render(){
        return(
            <MDBRow className = "expCard2">
                <MDBCol lg='6' className='myCard'>
                    <div className = "face face1 mx-auto text-center">
                        <div className='content'>
                            <h1>{this.props.job.name}</h1>
                            <h3>{this.props.job.pos}</h3>
                            <h5>{this.props.job.date}</h5>
                            <h5>{this.props.job.location}</h5>
                        </div>
                    </div>
                        <div className='face face2 mx-auto'>
                        <div className='content'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Vestibulum blandit massa iaculis ante rutrum commodo. Fusce lacinia ut diam vel faucibus. 
                                Fusce imperdiet, ipsum in fringilla consectetur, erat arcu porta nunc, quis vestibulum mi nisl quis ex. 
                                Aliquam nisi ante, pretium eget eros a, tristique tincidunt libero. Sed interdum ligula dui, mollis lacinia 
                                quam auctor vitae. Curabitur semper eros eget dolor tempus faucibus. In orci magna, accumsan iaculis pretium viverra, 
                                tempus sed arcu. Sed eu semper ipsum, at dictum augue.
                                Vivamus maximus sed erat ac ullamcorper. Quisque ac odio sit amet ex iaculis finibus et vel mi.
                                Aenean fermentum bibendum odio eget malesuada.
                            </p>
                        </div>
                    </div>
                </MDBCol>
            </MDBRow>
        );
    }
}

class ExpCard2 extends React.Component{
    render(){
        return(
            <MDBRow className = "expCard1 my-2 d-felx">
                <MDBCol lg='6' className='myCard'>
                    <div className = "face face1 text-center mx-auto">
                        <div className='content'>
                            <h1>{this.props.job.name}</h1>
                            <h3>{this.props.job.pos}</h3>
                            <h5>{this.props.job.date}</h5>
                            <h5>{this.props.job.location}</h5>
                        </div>
                    </div>
                        <div className='face face2 mx-auto'>
                        <div className='content'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Vestibulum blandit massa iaculis ante rutrum commodo. Fusce lacinia ut diam vel faucibus. 
                                Fusce imperdiet, ipsum in fringilla consectetur, erat arcu porta nunc, quis vestibulum mi nisl quis ex. 
                                Aliquam nisi ante, pretium eget eros a, tristique tincidunt libero. Sed interdum ligula dui, mollis lacinia 
                                quam auctor vitae. Curabitur semper eros eget dolor tempus faucibus. In orci magna, accumsan iaculis pretium viverra, 
                                tempus sed arcu. Sed eu semper ipsum, at dictum augue.
                                Vivamus maximus sed erat ac ullamcorper. Quisque ac odio sit amet ex iaculis finibus et vel mi.
                                Aenean fermentum bibendum odio eget malesuada.
                            </p>
                        </div>
                    </div>
                    
                </MDBCol>
            </MDBRow>
        );
    }
}


function Experience(){
    return(
        <MDBContainer fluid className = 'exp px-3 mb-4'>
            <ExpCard1 job ={entrprise}/>
            <ExpCard2 job={entrprise}/>
            <ExpCard1 job={entrprise}/>
            <ExpCard2 job={entrprise}/>
        </MDBContainer>
    );
}

export default Experience;