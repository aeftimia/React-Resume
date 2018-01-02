import React from 'react';
import Location from './Location';
import Position from './Position';

export default function Company(props) {
    return (
        <div clsasName='section'>
            <h3>
                <span className='header'>
                    <a href={props.url}>{props.company}</a>
                </span>
                <span className='meta'>
                    {Location(props.location)}
                </span>
            </h3>
            {props.positions.map(position => (
                <Position
                    title={position.title}
                    dates={position.dates}
                    summary={position.summary}
                />
            ))}
        </div>
    )
}
