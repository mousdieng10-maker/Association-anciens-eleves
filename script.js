const navLink = document.getElementById("navLink");
const navLinkTwo = document.getElementById('navLinkTwo');
const navLinkThree = document.getElementById("navLinkThree"); 
const navBar = document.getElementById("navBar"); 
const navEl = document.getElementById("nav"); 

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