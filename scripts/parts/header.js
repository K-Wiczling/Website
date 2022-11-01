const header = 
`<!-- Logo -->
<a href="./index.html" id="logo" >Karol Wiczling</a>

<!-- Normal nav bar -->
<menu id="navbar">
    <a href="./index.html"  >Home</a>
    <a href="./projects.html" >Projects</a>
    <a href="./about.html" >About Me</a>
    <a href="./contact.html" >Contact</a>
    <a href="./blog.html" class=" blog-btn" >Blog</a>
</menu>

<!-- Small divice popup menu -->

<!-- Hamurger icon -->
<svg id="hamburger" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px">
    <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"/>
</svg>

<!-- Menu -->
<menu id="popup-menu">
    <a href="./index.html" >Home</a>
    <a href="./projects.html">Projects</a>
    <a href="./about.html">About Me</a>
    <a href="./contact.html" >Contact</a>
    <a href="./blog.html" class="blog-btn" >Blog</a>
</menu>`;

document.getElementById('header').innerHTML = header;