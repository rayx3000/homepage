import './styles/general.css';
import './styles/header.css';
import './styles/main.css';

import { projectData } from './scripts/data';

let projects = '';
projectData.forEach(project => {
    projects += ` <div class="project" id="${project.projectId}">
                    <div class="project-image">
                        <img src="${project.projectImg}" alt="${project.projectName} Image">
                    </div>
                    <div class="project-info">
                        <h3>${project.projectName}</h3>
                        <p>${project.projectDesc}</p>
                    </div>
                    <div class="project-links">
                        <a href="https://rayx3000.github.io/${project.projectId}/" target="_blank"><span><i class="fa-solid fa-globe"></i> <span>Live View</span></span></a>
                        <a href="https://github.com/rayx3000/${project.projectId}" target="_blank"><span><i class="fa-solid fa-code"></i> <span>Source Code</span></span></a>
                    </div>
                    </div>`;
                    ;
});

document.querySelector('.project-list').innerHTML = projects;
