//Representation of the Single Card
export const card = (index, c, showProject) => {
    
    //Card Wrapper
    const cardWrapper = document.createElement('div');
    cardWrapper.className = 'card-wrapper';

    //Single card Container
    const cardElement = document.createElement('div');
    cardElement.className = 'projects-card';
    

    // Header for the card
    const h3Element = document.createElement('h3');
    h3Element.innerText = c.name;

    // Image for the card
    const imageElement = document.createElement('img');
    imageElement.src = c.img;

    // Explore button
    const exploreButton = document.createElement('button');
    exploreButton.className = 'explore-button';
    exploreButton.innerText = "Explore"
    exploreButton.addEventListener('click', () => {
        showProject(index);
    });

    // Append all card children elemens 
    cardWrapper.appendChild(cardElement);
    cardElement.appendChild(h3Element);
    cardElement.appendChild(imageElement);
    cardElement.appendChild(exploreButton);
   
    return cardWrapper;
}