import { projectsList } from '../components/projects-list.js';
import { card } from '../components/card.js'

// References
const modal = document.getElementById('modal');
const repoBtn = document.getElementById('repo-ref');
const projectBtn = document.getElementById('app-ref');
const header = document.getElementById('modal-header');
const projectDispaly = document.getElementById('project-display')

// Set default style to not display modal
modal.style.display = 'none';

// Toggle modal window
const toggleModal = (index) => {
    modal.style.display === 'none' ? modal.style.display = 'block' : modal.style.display = 'none';
    if(modal.style.display === 'block') {
        fillModal(index);
    }
}

const fillModal = (index) => {
    console.log(projectsList[index]);

    const project = projectsList[index]
    header.innerText = project.name;
    
    repoBtn.href = project.repoSrc;
    projectBtn.href = project.appSrc;

    projectDispaly.src = project.appSrc;
} 

document.getElementById('close-modal').addEventListener('click', toggleModal);

// Dispaly all projects
projectsList.map((current, index) => {
    document.getElementById('projects-contaier').appendChild(card(index, current, toggleModal));
});
