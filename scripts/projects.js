const projectsContainer = document.getElementById('projects-contaier');

const projects = [

    {
        "name": "Battleship",
        "img": "../assets/images/img3.jpg",
        "alt": "",
        "projectPage": "./projects/battleship.html"
    },
    {
        "name": "Snake",
        "img": "../assets/images/img2.2.jpg",
        "alt": "",
        "projectPage": "./projects/battleship.html"
    },
    {
        "name": "HP API",
        "img": "../assets/images/img2.jpg",
        "alt": "",
        "projectPage": "./projects/battleship.html"
    },
    {
        "name": "Rrobofriends",
        "img": "../assets/images/img3.jpg",
        "alt": "",
        "projectPage": "./projects/battleship.html"
    },
    {
        "name": "Hactoberfest",
        "img": "../assets/images/img3.jpg",
        "alt": "",
        "projectPage": "./projects/battleship.html"
    },
]
//Representation of the Single Card
const card = (c) => {
    //Single card Container
    const cardElement = document.createElement('div');
    cardElement.className = 'projects-card';

    // Header for the card
    const h3Element = document.createElement('h3');
    h3Element.innerText = c.name;

    //Image for the card
    const imageElement = document.createElement('img');
    imageElement.src = c.img;
    
    //Discover Button
    const buttonElement = document.createElement('button');
    buttonElement.innerText = 'Discover';
    buttonElement.setAttribute( 'onclick', `showProject('${c.name}')`) ;

    //Append all card children elemens 
    cardElement.appendChild(h3Element);
    cardElement.appendChild(imageElement);
    cardElement.appendChild(buttonElement);
    
    return cardElement;
}

for (const c of projects) {
    projectsContainer.appendChild(card(c))
}

const showProject = (e) => {
    console.log(e);
}