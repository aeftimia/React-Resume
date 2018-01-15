import React from 'react';
import Personal from './Personal';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';
//import './css/resume.css';
import './css/section.css';

export default function Resume(props) {
    return (
        <div className='resume columns'>
            <div className='sidbar-left' />
            <div className='sidbar-right' />
            <div className='main section'>
                <Personal
                    name={props.personal.name}
                    url={props.personal.url.github}
                    email={props.personal.email}
                    phone={props.personal.phone}
                    summary={props.personal.summary}
                />
                <Experience experience={props.experience} />
                <Projects projects={props.projects} />
                <Education education={props.education} />
            </div>
        </div>
    )
}
