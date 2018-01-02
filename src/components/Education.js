import React from 'react';
import Institution from './Institution';

export default function Education(props) {
    return (
        <div className='section'>
           <h2>Education</h2>
           {props.education.map(institution => (
               <Institution
                   institution={institution.institution}
                   url={institution.url}
                   location={institution.location}
                   degrees={institution.degrees}
               />
           ))}
        </div>
    );
}
