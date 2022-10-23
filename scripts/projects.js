const cards = document.getElementsByClassName('projects-card');
for (const card of cards) {
    card.addEventListener('click', (e) => {
        showProject(e.target.id);
    })
}

const showProject = (e) => {
    console.log(e);
}