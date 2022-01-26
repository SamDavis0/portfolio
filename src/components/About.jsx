import React from 'react';

import SectionTitle from './SectionTitle';
import Image from './Image';
import picofme from '../assets/images/picofme.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'

import '../stylesheets/About.css'
export default class About extends React.Component {
	render() {
		return (
			<div id="about" className="section">
				<SectionTitle title={'About'} />

				<div className="about-content">
					<Image
						imageSize='large'
						imageLink={picofme}
						projectLink='https://www.linkedin.com/in/samdavis0/'
					></Image>
					<div className="about-content-text-wrapper" data-aos="fade" data-aos-delay="300">
						<p className="about-content-text">
							I'm passionate and dedicated to my work. I love everything technology, coding, and design related so I can't wait to get to work! 
							
						</p>
					</div>
				</div>
				<a href="#skills" className="scroll-button">
                    <FontAwesomeIcon icon={faAngleDoubleDown} />
                </a>
			</div>
		)
	}
}
