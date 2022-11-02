//Representation of the Single Card
export const card = (c, showProject) => {
    
    //Card Wrapper
    const cardWrapper = document.createElement('div');
    cardWrapper.className = 'card-wrapper';

    //Single card Container
    const cardElement = document.createElement('div');
    cardElement.className = 'projects-card';
    cardElement.addEventListener('click', () => {
        showProject(c.name);
    });

    // Header for the card
    const h3Element = document.createElement('h3');
    h3Element.innerText = c.name;

    //Image for the card
    const imageElement = document.createElement('img');
    imageElement.src = c.img;

    //Append all card children elemens 
    cardWrapper.appendChild(cardElement);
    cardElement.appendChild(h3Element);
    cardElement.appendChild(imageElement);
   
    return cardWrapper;
}