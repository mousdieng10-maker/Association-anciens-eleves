const navLink = document.getElementById("navLink");
const navLinkTwo = document.getElementById('navLinkTwo');
const navLinkThree = document.getElementById("navLinkThree"); 
const navBar = document.getElementById("navBar"); 
const navEl = document.getElementById("nav"); 
const lightToggle = document.getElementById("lightToggle");
const body = document.getElementById("body");
const navDroite = document.querySelector("#navDroite");
const greytxt = document.querySelector("#greytxt");
const contacts = document.querySelectorAll(".contact");
const imgs = document.querySelectorAll("img");
const nav = document.querySelector("nav");
const even = document.querySelector("#Evenements");
const firstContacts = document.querySelectorAll(".firstContact")
const sectionTitres = document.querySelectorAll(".sectionTitre")
function hide(element){
    element.style.display = "none";
}
function visible(element){
    element.style.display = "block"
}

hide(navEl)

navBar.onclick = function(){
    if(navEl.style.display == "block"){
        hide(navEl)
    }
    else{
        visible(navEl)
    }
    
}

lightToggle.onclick = function(){
    body.style.background = "#303030";
    body.style.color = "white";
    greytxt.style.color = "#bdbdbd";
    for(const image of imgs){
        image.style.boxShadow = `1px 1px 10px rgba(0, 0, 0, 0.6)`
    }
    for(const sectionTitre of sectionTitres){
        sectionTitre.style.color = "gold";
    }
    nav.style.boxShadow = `1px 1px 10px rgba(0, 0, 0, 0.6)`;
    for(const contact of contacts){
        contact.style.color = "white"
    }
    for(const first of firstContacts){
        first.style.color = "#6e88fa"
    }
    even.style.background = `linear-gradient(70deg, rgba(0,0,0,.5),rgba(0,0,0,.5)),url("assets/silhouette.jpg")`
    even.style.backgroundSize  = "cover";
    hide(lightToggle)
    const darkToggle = document.createElement("i")
    darkToggle.classList.add("fa-solid");
    darkToggle.classList.add("fa-toggle-off");
    darkToggle.style.fontSize = "2em";

    navDroite.appendChild(darkToggle);
    darkToggle.onclick = function(){
        body.style.background = "white";
        body.style.color = "black";
        for(const contact of contacts){
            contact.style.color = "black"
        }
        for(const image of imgs){
            image.style.boxShadow = `1px 1px 10px rgba(0, 0, 0, 0.6)`
        }
        for(const first of firstContacts){
            first.style.color = "blue"
        }
        nav.style.boxShadow = `1px 1px 10px rgba(0, 0, 0, 0.4)`;
        
        greytxt.style.color = "#383838";
        hide(darkToggle);
        visible(lightToggle);
    }
}