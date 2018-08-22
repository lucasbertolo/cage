import React from 'react';
import Elephant from "./elephant.png";
import './Header.css';
import {FaFacebookF, FaInstagram, FaPinterestP} from 'react-icons/fa';

const Header = (props) => {
	return(
		<header id="header" className="pa1">
			<div id="social" className="mt4 ma3">
				<FaFacebookF className="ml3 pointer"/>
				<FaInstagram className="ml3 pointer"/>
				<FaPinterestP className="ml3 pointer"/>
			</div>
			<img src={Elephant} id="img-logo" alt="logo"/>			
			<h1 className="mr4">{props.section}</h1>
		</header>
	);
}

export default Header;