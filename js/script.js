/*Media Queries (Toggle Nav Menu - Tablets)*/ 
function toggleNavShow(){
    let openNav = document.querySelector(".nav_menu");
    let openButton = document.querySelector("#open_menu");
    let closeButton = document.querySelector("#close_menu");

    if(openNav.style.display ==="none"){
        openNav.style.display = "flex";
        openButton.style.display = "none";
        closeButton.style.display = "inline-block";  
    }
    else{
        openNav.style.display = "none";
    }
}

function toggleNavHide(){
    let openNav = document.querySelector(".nav_menu");
    let openButton = document.querySelector("#open_menu");
    let closeButton = document.querySelector("#close_menu");

    if(openNav.style.display ==="flex"){
        openNav.style.display = "none";        
        closeButton.style.display = "none"; 
        openButton.style.display = "inline-block";
    }
    else{
        openNav.style.display = "flex";
    }
}



