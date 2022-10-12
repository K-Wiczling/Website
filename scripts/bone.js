const mainContainer = document.getElementById('main-container');

const main = 
`
    <header>
        <div id="logo">
            <a href="index.html">
                <img id="logo-img" src="./assets/favicon.png">
            </a>
        </div>
        <menu id="navbar">
            <button id="one" class="nav-bar-buttons" >All Students</button>
            <button id="2" class="nav-bar-buttons" >Gryffindor</button>
            <button id="3" class="nav-bar-buttons" >Slytherin</button>
            <button id="4" class="nav-bar-buttons" >Hufflepuff</button>
            <button id="5" class="nav-bar-buttons" >Ravenclaw</button>
            <a href="html/blog.html"><button id="favorites" class="main-buttons" >Blog</button></a>
        </menu>

        <svg id="hamburger" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"/></svg>
        <menu id="popup-menu">
            <button id="one" class="nav-bar-buttons" >All Students</button>
            <button id="2" class="nav-bar-buttons" >Gryffindor</button>
            <button id="3" class="nav-bar-buttons" >Slytherin</button>
            <button id="4" class="nav-bar-buttons" >Hufflepuff</button>
            <button id="5" class="nav-bar-buttons" >Ravenclaw</button>
            <a href="html/blog.html"><button id="favorites" class="main-buttons" >blog</button></a>
        </menu>
    </header>

    <main>
        <h1>Karol Wiczling Personal website</h1>
    </main>

    <footer id="footer">
        Created by Karol Wiczling 
    </footer>
`

mainContainer.innerHTML = main;