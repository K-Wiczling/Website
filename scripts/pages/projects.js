import { projectsList } from '../components/projects-list.js';
import { card } from '../components/card.js'


const showProject = (name) => {
    console.log(name);
}
for (const project of projectsList) {
    document.getElementById('projects-contaier').appendChild(card(project, showProject));
}