const navLink = document.getElementById("navLink");
const navLinkTwo = document.getElementById('navLinkTwo');
const navLinkThree = document.getElementById("navLinkThree"); 
const navLinks = document.querySelector("#nav"); 
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
const firstContacts = document.querySelectorAll(".firstContact");
const sectionTitres = document.querySelectorAll(".sectionTitre");
const specialTitre = document.querySelector("#specialTitre");
const sections = document.querySelectorAll(".sect");
const cards = document.querySelectorAll(".carte");
const insideCards = document.querySelectorAll("inside"); 
const goBack= document.querySelector("#goBack");
function hide(element){
    element.style.display = "none";
}
function visible(element){
    element.style.display = "flex"
}

hide(navEl);


navBar.onclick = function(){

        navEl.classList.add("cover");
        navLink.style.color = "white";
        navLinkTwo.style.color = "white";
        navLinkThree.style.color = "white";
        navLink.style.fontSize = "3em";
        navLinkTwo.style.fontSize = "3em";
        navLinkThree.style.fontSize = "3em";
        navLink.style.fontWeight = "800";
        navLinkTwo.style.fontWeight = "800";
        navLinkThree.style.fontWeight = "800";
        document.body.style.overflow = "hidden";
        visible(navEl);
    
    
}
goBack.onclick = function(){
    hide(navEl);
    document.body.style.overflow = "visible";
}


lightToggle.onclick = function(){
    body.style.background = "#303030";
    body.style.color = "white";
    for(const card of cards){
        card.style.borderTop = "2px solid #ff3d775f";

    }
    for(const insideCard of insideCards){
        insideCard.style.color = "white";
    }
    greytxt.style.color = "#bdbdbd";
    for(const image of imgs){
        image.style.boxShadow = `1px 1px 10px rgba(0, 0, 0, 0.6)`
    }
    for(const sectionTitre of sectionTitres){
        sectionTitre.style.background = "linear-gradient(90deg, #FF3D77, #FFA53E)";
        sectionTitre.style.webkitBackgroundClip = "text";
        sectionTitre.style.backgroundClip = "text";
        sectionTitre.style.color = "transparent";
        sectionTitre.style.webkitTextFillColor = "transparent";        
    }
    nav.style.boxShadow = `1px 1px 10px rgba(0, 0, 0, 0.6)`;
    nav.style.background = "linear-gradient(90deg, #FF3D77 0%, #FF6B4A 50%, #FFA53E 100%)";
    for(const contact of contacts){
        contact.style.color = "white"
    }
    for(const first of firstContacts){
        first.style.color = "#6e88fa"
    }
    for(const section of sections){
        section.style.borderTop = `4px solid #ff3d7762`
    }
    even.style.background = `linear-gradient(70deg, rgba(0,0,0,.7),rgba(0,0,0,.7)),url("assets/silhouette.jpg")`
    even.style.backgroundSize  = "cover";
    hide(lightToggle)
    const darkToggle = document.createElement("i")
    darkToggle.classList.add("fa-solid");
    darkToggle.classList.add("fa-sun");
    darkToggle.style.fontSize = "2em";
    darkToggle.style.color = "yellow";
    darkToggle.classList.add("glow");
    navDroite.appendChild(darkToggle);
    darkToggle.onclick = function(){
        body.style.background = "white";
        body.style.color = "black";
        for(const contact of contacts){
            contact.style.color = "black"
        }
        for(const section of sections){
            section.style.borderTop = "4px solid rgba(163, 122, 45, 0.444)";
        }
        even.style.background = `linear-gradient(70deg, rgba(255,255,255,.5),rgba(255,255,255,.5)),url("assets/silhouette.jpg")`
        even.style.backgroundSize = "cover";
        for(const sectionTitre of sectionTitres){
        sectionTitre.style.color = "rgb(163, 122, 45)";
    }
        for(const image of imgs){
            image.style.boxShadow = `1px 1px 10px rgba(0, 0, 0, 0.6)`
        }
        for(const card of cards){
            card.style.borderTop = "2px solid rgb(163, 122, 45)";

        }
        for(const first of firstContacts){
            first.style.color = "blue"
        }
        nav.style.boxShadow = `1px 1px 10px rgba(0, 0, 0, 0.4)`;
        nav.style.background = "rgba(255, 204, 37, 0.975) ";
        for(const sectionTitre of sectionTitres){
            sectionTitre.style.color= "rgb(163, 122, 45)"  
            sectionTitre.style.background = "none";
            sectionTitre.style.webkitBackgroundClip = "none";
            sectionTitre.style.backgroundClip = "none";
            sectionTitre.style.webkitTextFillColor = "rgb(163, 122, 45)";        
        }
        greytxt.style.color = "#383838";
        hide(darkToggle);
        visible(lightToggle);
    }
}