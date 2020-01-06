import React from 'react';
import styled, {keyframes} from 'styled-components';
import './Nav.css';




const person = {
    name:'LARA TEMEL'
}

const fadeLinks = keyframes`
    from{
        opacity: 0;
        transform: translateX(50px);
    }
    to{
        opacity: 1;
        transform: translateX(0px);
    }
`

const anim = {
    animation:"fade 0.5s ease forwards 1.5s"
}

class NavBar extends React.Component{

    state = {
        className:"",
        isBoxVisible:false
      };
    
    toggleBox = () => {
        this.setState(prevState => ({ isBoxVisible: !prevState.isBoxVisible }));

      };
    
    render(){
        const { isBoxVisible } = this.state;
        return(
            <nav className = 'navbar sticky-top d-flex justify-content-around z-depth-4 align-items-center'>
                <div>
                    <h4>{person.name}</h4>
                </div>
                <ul className = {isBoxVisible ? 'nav-links nav-active':'nav-links'}>
                    <li className= {isBoxVisible ? 'anim1':""}><a href = '#' >Education</a></li>
                    <li className= {isBoxVisible ? 'anim2':""}><a href = '#'>Experience</a></li>
                    <li className= {isBoxVisible ? 'anim3':""}><a href = '#'>Skills</a></li>
                    <li className= {isBoxVisible ? 'anim4':""}><a href = '#'>Contact</a></li>
                </ul>
                <div className = {isBoxVisible ? 'burger toggle':'burger'} onClick={this.toggleBox}>
                    <div className='line1'></div>
                    <div className='line2'></div> 
                    <div className='line3'></div>
                </div>
            </nav>
        );
    }
}





export default NavBar;