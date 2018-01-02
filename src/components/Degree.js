import React from 'react';
import Dates from './Dates'
import Courses from './Courses'

export default function Degree(props) {
    return (
        <div className='section'>
            <h4>
                <span className='header'>
                    {props.title} 
                </span>
                <span className='meta'>
                    {Dates(props.dates)}
                </span>
            </h4>
            <Courses courses={props.courses}/>
        </div>
    );
}

