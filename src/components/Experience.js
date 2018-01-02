import React from 'react';
import Company from './Company';

export default function Experience(props) {
    return (
        <div className='section'>
            <h2>Experience</h2>
            {props.experience.map(company => (
                <Company
                    company={company.company}
                    url={company.url}
                    location={company.location}
                    positions={company.positions}
                />
            ))}
        </div>
    );
}
