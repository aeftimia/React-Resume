import React from 'react';
import Project from './Project'

export default function Projects(props) {
    return (
        <div className='section'>
            <h2>Projects</h2>
            {props.projects.map(project => (
                <Project
                    project={project.project}
                    url={project.url}
                    dates={project.dates}
                    summary={project.summary}
                />
            ))}
        </div>
    );
}
