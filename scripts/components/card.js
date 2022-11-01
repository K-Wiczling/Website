//Representation of the Single Card
export const card = (c) => {
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