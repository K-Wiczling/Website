
// Buttons in the navbar
const fetchButtons = document.getElementsByClassName('nav-bar-buttons');
for (const btn of fetchButtons) {
    btn.addEventListener('click', (e) => {
        console.log(e.target.id);
    })
}

// Toggle popoup menu
const togglePopupMenu = () => {
    if (popupMenu.style.display === 'block') {
        popupMenu.style.display = 'none'
    } else {
        popupMenu.style.display = 'block';
    }
}

// Reference to the popup menu and hamburger icon
const popupMenu = document.getElementById('popup-menu');
const hamburger = document.getElementById('hamburger');

popupMenu.addEventListener('click', togglePopupMenu);
hamburger.addEventListener('click', togglePopupMenu);
