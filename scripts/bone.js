const headerElement = document.getElementById('header');
const mainElement = document.getElementById('main');
const footerElement = document.getElementById('footer');

const header = 
`
        <div id="logo">
            <a href="index.html">
                <img id="logo-img" src="./assets/favicon.png">
            </a>
        </div>
        <menu id="navbar">
            <button id="1" class="nav-bar-buttons " >Home</button>
            <button id="2" class="nav-bar-buttons" >Projects</button>
            <button id="3" class="nav-bar-buttons" >About Me</button>
            <button id="4" class="nav-bar-buttons" >Contact</button>
            <button id="4" class="nav-bar-buttons blog-btn" >Blog</button>

        </menu>

        <svg id="hamburger" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"/></svg>
        <menu id="popup-menu">
        <button id="1" class="popup-menu-buttons " >Home</button>
        <button id="2" class="popup-menu-buttons" >Projects</button>
        <button id="3" class="popup-menu-buttons" >About Me</button>
        <button id="4" class="popup-menu-buttons" >Contact</button>
        <button id="4" class="popup-menu-buttons blog-btn" >Blog</button>
        </menu>
`;

const main = 
`
    <img src="assets/images/img3.jpg">
`;

const footer = 
`
    Created by Karol Wiczling 
`;

headerElement.innerHTML = header;
mainElement.innerHTML = main;
footerElement.innerHTML = footer;