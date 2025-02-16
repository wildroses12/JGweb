
const collapsibleBoxElement = document.querySelector('.collapsible-box');
const burgerMenuButtonElement = document.querySelector('.burger-menu');
const navMobileMenuElement = document.querySelector('.nav-mobile-menu');

burgerMenuButtonElement.addEventListener('click', showCollapsibleBox);

const collapsibleHTML = `</div>
                            <div class="menu-box">
                                <ul>
                                    <li>
                                        <a href="../index.html">POČETNA</a>
                                    </li>
                                    <li>
                                        <a href="../o-meni/index.html">O MENI</a>
                                    </li>
                                    <li>
                                        <a href="../cenovnik/index.html">CENOVNIK</a>
                                    </li>
                                </ul>
                            </div>`

let shown = false;

function showCollapsibleBox(){
    if (window.matchMedia("(min-width: 800px)").matches) {
    if(!shown){
        let currentHeight = parseInt(getComputedStyle(document.body).height);
        document.body.style.height = (currentHeight + 300) + "px";
        collapsibleBoxElement.classList.remove('inactive');
        collapsibleBoxElement.classList.add('invisible');
        setTimeout(() => {
            burgerMenuButtonElement.classList.add('active');
            burgerMenuButtonElement.classList.add('active2');
        },200)
        setTimeout(() => {
            collapsibleBoxElement.classList.remove("invisible");
        }, 500);
        if(window.location.pathname.includes("/o-meni/") || window.location.pathname.includes("/cenovnik/")){
            collapsibleBoxElement.innerHTML = `<div class="event-type-box">
            <div>
                <a href="../mature/index.html" class="mature-collapsible">MATURE</a>
            </div>
            <div>
                <a href="../krstenja/index.html">KRŠTENJA</a>
            </div>
            <div>
                <a href="../rodjendani/index.html">ROĐENDANI</a>
            </div>` + collapsibleHTML;
        }
        else{
            collapsibleBoxElement.innerHTML = `<div class="event-type-box">
            <div>
                <a href="/mature/index.html" class="mature-collapsible">MATURE</a>
            </div>
            <div>
                <a href="/krstenja/index.html">KRŠTENJA</a>
            </div>
            <div>
                <a href="/rodjendani/index.html">ROĐENDANI</a>
            </div>` + collapsibleHTML;
        }
        if (window.location.pathname.includes("/rodjendani/")) {
            collapsibleBoxElement.innerHTML = `<div class="event-type-box">
            <div>
                <a href="../mature/index.html">MATURE</a>
            </div>
            <div>
                <a href="../krstenja/index.html">KRŠTENJA</a>
            </div>
        </div>` + collapsibleHTML;
        }
        if (window.location.pathname.includes("/mature/")) {
            collapsibleBoxElement.innerHTML = `<div class="event-type-box">
        <div>
            <a href="../krstenja/index.html">KRŠTENJA</a>
        </div>
        <div>
            <a href="../rodjendani/index.html">ROĐENDANI</a>
        </div>
    </div>` + collapsibleHTML;
        }
        if(window.location.pathname.includes("/krstenja/")){
            collapsibleBoxElement.innerHTML = `<div class="event-type-box">
            <div>
                <a href="../mature/index.html">MATURE</a>
            </div>
            <div>
                <a href="../rodjendani/index.html">ROĐENDANI</a>
            </div>
        </div>` + collapsibleHTML;
        } 
        
        
        shown = true;
    }
    else{
        let currentHeight = parseInt(getComputedStyle(document.body).height);
        document.body.style.height = (currentHeight - 300) + "px";
        setTimeout(() => {
            collapsibleBoxElement.classList.add('inactive');
        }, 50);
        setTimeout(() => {
            burgerMenuButtonElement.classList.remove('active');
            burgerMenuButtonElement.classList.remove('active2');
        }, 500);
        collapsibleBoxElement.classList.add("invisible");
        collapsibleBoxElement.innerHTML = "";
        shown = false;
    }
    
}else{
    if(!shown){
        
        setTimeout(() => {
            burgerMenuButtonElement.classList.add('active');
            navMobileMenuElement.classList.remove('nav-mobile-not-active');
        }, 500);
        shown=true;
    }
    else{
        burgerMenuButtonElement.classList.remove('active');
        navMobileMenuElement.classList.add('nav-mobile-not-active');
        shown=false;
    }
}
}

