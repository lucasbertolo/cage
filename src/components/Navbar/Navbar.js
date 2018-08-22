import React from 'react';
import './Navbar.css';
import Scrollspy from 'react-scrollspy';
import ReactTooltip from 'react-tooltip'

//Icons
import {FaInfoCircle} from 'react-icons/fa';
import {GoCalendar} from 'react-icons/go';
import {IoIosContact} from 'react-icons/io';
import {TiBook} from 'react-icons/ti';
import {MdLibraryMusic} from 'react-icons/md'

class Navbar extends React.Component{
	updateSectionName = (e) => {	
		this.props.updatingSectionName(e.id)
	}

	render(){
		const scroll = ['home', 'about', 'members', 'disco', 'calendar', 'contact']
		return(		
			<div>
				<div id="content-navbar">		 
					<Scrollspy 
						items={scroll} 
						currentClassName="selected" 
						onUpdate={this.updateSectionName}>						
						
					    <li><a href="#home" ><p data-tip="home"><GoCalendar/></p></a></li>
					    <li><a href="#about"><p data-tip="about"><FaInfoCircle/></p></a></li>
					    <li><a href="#members"><p data-tip="members"><TiBook/></p></a></li>
					    <li><a href="#disco"><p data-tip="discography"><MdLibraryMusic/></p></a></li>
					    <li><a href="#calendar"><p data-tip="concerts"><GoCalendar/></p></a></li>
					    <li><a href="#contact"><p data-tip="contact"><IoIosContact/></p></a></li>
					    <ReactTooltip place="right" type="error" effect="solid"/>
					</Scrollspy>
				</div>
			</div>
		);
	}
}
export default Navbar;