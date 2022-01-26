import React from 'react';
import SectionTitle from './SectionTitle';
import { FaJs, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaDatabase } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'

import '../stylesheets/Skills.css'

export default class Skills extends React.Component {
	render() {
		return (
			<div id="skills" className="section">
				<SectionTitle title={'My Skills'} />
                
				<div className="skills-content" data-aos="fade" data-aos-delay="200">
					<div className="skills-content-text-wrapper" data-aos="fade" data-aos-delay="300">
                        <div style={{ 'display': 'flex', 'flexDirection': 'column', 'align-items': 'center' }}>
                            <div style={{ 'padding-bottom': '5rem'}}>Utilizing my skills of front-end and back-end languages, frameworks, and libraries, I can create modern full-stack web applications that are sleek and performant. I am continuously striving to learn new technologies and keeping my skills as up-to-date as possible.</div>
							<div  style={{ 'display': 'flex', 'flexDirection': 'row' }}>
                                <div> <FaJs className='skills-icon' />
                                <div className='skills-title'> Javascript</div>
                                    <div style={{ 'display': 'flex', 'flexDirection': 'column' }}>
                                        {['React', 'Node.js', 'jQuery'].map(skill => <Skill skill={skill} />)}
                                    </div>
                                </div>

								<div> <FaReact className='skills-icon' />
                                <div className='skills-title'> React</div>
                                    <div style={{ 'display': 'flex', 'flexDirection': 'column' }}>
                                        {['React Native', 'Redux', 'Next.js', 'Material-UI', 'Chakra-UI'].map(skill => <Skill skill={skill} />)}
                                    </div>
                                </div>

                                <div> <FaHtml5 className='skills-icon' /> <FaCss3Alt className='skills-icon' />
                                <div className='skills-title'> HTML/CSS</div>
                                    <div style={{ 'display': 'flex', 'flexDirection': 'column' }}>
                                        {['Flexbox', 'Sass', 'Bootstrap'].map(skill => <Skill skill={skill} />)}
                                    </div>
                                </div>
							</div>

                            <div style={{ 'display': 'flex', 'flexDirection': 'row' }}>
                                <div> <FaNodeJs className='skills-icon' />
                                <div className='skills-title'> Node.js</div>
                                    <div style={{ 'display': 'flex', 'flexDirection': 'column' }}>
                                        {['Express', 'Bcrypt', 'Socket.io'].map(skill => <Skill skill={skill} />)}
                                    </div>
                                </div>

                                <div> <FaDatabase className='skills-icon' />
                                <div className='skills-title'> PostgreSQL</div>
                                    <div style={{ 'display': 'flex', 'flexDirection': 'column' }}>
                                        {['Sequelize'].map(skill => <Skill skill={skill} />)}
                                    </div>
                                </div>
							</div>
                            <div style={{ 'display': 'flex', 'flexDirection': 'row' }}>
                                <div> <FaPython className='skills-icon' />
                                <div className='skills-title'> Python</div>
                                </div>
							</div>
                        </div>
					</div>
				</div>
                <a  href="#projects" className="scroll-button">
                    <FontAwesomeIcon icon={faAngleDoubleDown} />
                </a>
			</div>
		)
	}
}

function Skill(props) {
	return (
		<p style={{ 'margin': 0, 'padding': 0, 'fontSize': '0.8em' }}><span style={{ 'color': 'var(--primary-color)', 'padding': '0 5px 0 0' }}>&#11041;</span>{props.skill}</p>
	)
}