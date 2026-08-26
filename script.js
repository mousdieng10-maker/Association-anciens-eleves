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
    for(const contact of contacts){
        contact.style.color = "white"
    }
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
        greytxt.style.color = "#383838";
        hide(darkToggle);
        visible(lightToggle);
    }
}