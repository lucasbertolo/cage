import React from 'react';
import './Members.css';

class MembersImage extends React.Component{		

	render(){
		const member = this.props.box;

		//Here I am drawing the circle in their faces, in order to open the modal, I had to sort out
		//the constants.js manually, putting the guys in the order the clarifai gave me
		//ps: I did that, cause I hadn't found a way to find the coordinates without clarifai
		
		const square = member.map((item, index) => {
			return(
				<div 
					className='bounding-box' 
					key={index} 
					id={`member-${index}`}
					style={{top: item.topRow, right: item.rightCol, bottom: item.bottomRow, left: item.leftCol}}
					onClick={this.props.handleShow}>
				</div>
			);
		});

		return(
			<div className="absolute mt6" id="members-image">
	            <img id='inputImage' src={this.props.imageUrl} alt='img' width='615px' height='auto' className="shadow-5"/>
	            {square}
	        </div>
	    );
	}

}

export default MembersImage;