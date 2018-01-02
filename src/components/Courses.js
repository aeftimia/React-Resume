import React from 'react';
import Summary from './Summary';

export default function Courses(props) {
    if (props.courses.length === 0) {
        return null;
    }
    return (
            <div className='section'>
                <h5>Courses</h5>
                {Summary(props.courses)}
            </div>
        );
}
