//Representation of the Single Card
export const card = (c, showProject) => {
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
    buttonElement.addEventListener('click', () => {
        showProject(c.name);
    });
    
    //Link  
    // const aElement = document.createElement('a');
    // aElement.innerText = 'Discover';
    // aElement.href = c.source;

    //Append all card children elemens 
    cardElement.appendChild(h3Element);
    cardElement.appendChild(imageElement);
    // cardElement.appendChild(aElement);
    cardElement.appendChild(buttonElement);
    
    return cardElement;
}