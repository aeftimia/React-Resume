import React from 'react';
import Dates from './Dates';
import Summary from './Summary';

export default function Project(props) {
    return (
        <div clsasName='section'>
            <h3>
                <span className='header'>
                    <a href={props.url}>{props.project}</a>
                </span>
                <span className='meta'>
                    {Dates(props.dates)}
                </span>
            </h3>
            {Summary(props.summary)}
        </div>
    )
}
