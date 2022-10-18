const homeEl = document.getElementById('home-contaier');
const projectsEl = document.getElementById('projects-contaier');
const aboutEl = document.getElementById('about-me-contaier');
const conntactEl = document.getElementById('contact-contaier');

const toggleContent = (content) => {
    
    homeEl.style.display = 'none';
    projectsEl.style.display = 'none';
    aboutEl.style.display = 'none';
    conntactEl.style.display = 'none';

    switch (content) {
        case 'home':
            homeEl.style.display = 'block';
            break;
        case 'projects':
            projectsEl.style.display = 'block'
            break;
        case 'about-me':
            aboutEl.style.display = 'block'
    
            break;
        case 'contact':
            conntactEl.style.display = 'block'

            break;

        default:
            homeEl.style.display = 'block';
            break;
    }
} 
toggleContent();
// mainElement.innerHTML = main;