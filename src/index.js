import './styles/general.css';
import './styles/header.css';
import './styles/main.css';

import { projectData } from './scripts/data';

let projects = '';
projectData.forEach(project => {
    projects += `
    <div class="project-list" id="${project.projectId}">
        <img src="${project.projectImg}" alt="${project.projectName} Image" class="project-image"/>
        <h3 class="project-name">${project.projectName}</h3>
        <p class="project-desc">${project.projectDesc}</p>
    </div>
    `;
});

document.querySelector('.projects-list').innerHTML = projects;

