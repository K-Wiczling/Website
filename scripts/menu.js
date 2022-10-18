
// Buttons in the navbar
const fetchButtons = document.getElementsByClassName('nav-bar-buttons');
for (const btn of fetchButtons) {
    btn.addEventListener('click', (e) => {
        toggleContent(e.target.id);
    })
}

// Toggle popoup menu
const togglePopupMenu = () => {

    if (popupMenu.style.height === '100%') {
        popupMenu.style.height = '0%'
    } else {
        popupMenu.style.height = '100%';
    }
}

// Reference to the popup menu and hamburger icon
const popupMenu = document.getElementById('popup-menu');
const hamburger = document.getElementById('hamburger');

popupMenu.addEventListener('click', togglePopupMenu);
hamburger.addEventListener('click', togglePopupMenu);
