import {card} from './card.js';
import {projectsList} from './projects-list';

const projectsContainer = document.getElementById('projects-contaier');

for (const c of projectsList) {
    projectsContainer.appendChild(card(c))
}

const showProject = (e) => {
    console.log(e);
}