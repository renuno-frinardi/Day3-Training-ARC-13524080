function myFunction() {
    var x = document.getElementById("top-navbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } 
    else {
        x.className = "navbar";
    }
} 


function collapsible1() {
    var content = document.getElementById("collapsible-content1");
    if (content.style.display === "block") {
        document.getElementById("button-activated1").id = "collapsible-button1";
        content.style.display = "none";
    } 
    else {
        document.getElementById("collapsible-button1").id = "button-activated1";
        content.style.display = "block";
    }
};