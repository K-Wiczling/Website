// Toggle popoup menu
const togglePopupMenu = () => {
    console.log('23');
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