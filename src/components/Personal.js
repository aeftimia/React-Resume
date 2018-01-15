import React from 'react';

export default function Personal(props) {
    var summary;
    if (props.summary === "") {
        summary = null;
    } else {
        summary = <p className='section'>{props.summary}</p>;
    }
    return (
        <div>
            <h1>
                <a href="https://github.com/aeftimia">{props.name}</a>
            </h1>
            <span className='head'>
                <a href={`mailto:${props.email}`}>{props.email}</a>
            </span>
            <span className='meta'>{props.phone}</span> 
            {summary}
        </div>
    )
}
