import { projectsList } from '../components/projects-list.js';
import { card } from '../components/card.js'

document.getElementById('modal').style.display = 'none';

const toggleModal = (name) => {
    if(document.getElementById('modal').style.display === 'none'){
        document.getElementById('modal').style.display = 'block';
    }
    else {
        document.getElementById('modal').style.display = 'none';
    }

    document.getElementById('modal-header').innerText = name;
}

document.getElementById('close-modal').addEventListener('click', toggleModal);

for (const project of projectsList) {
    document.getElementById('projects-contaier').appendChild(card(project, toggleModal));
}