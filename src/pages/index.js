import React from "react"
import Resume from "../components/Resume"

const resume = require('../resume.json');
export default () => (
    <Resume
        personal={resume.personal}
        experience={resume.experience}
        projects={resume.projects}
        education={resume.education}
    />
)
