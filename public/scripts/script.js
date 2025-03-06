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
function collapsible2() {
    var content = document.getElementById("collapsible-content2");
    if (content.style.display === "block") {
        document.getElementById("button-activated2").id = "collapsible-button2";
        content.style.display = "none";
    } 
    else {
        document.getElementById("collapsible-button2").id = "button-activated2";
        content.style.display = "block";
    }
};
function collapsible3() {
    var content = document.getElementById("collapsible-content3");
    if (content.style.display === "block") {
        document.getElementById("button-activated3").id = "collapsible-button3";
        content.style.display = "none";
    } 
    else {
        document.getElementById("collapsible-button3").id = "button-activated3";
        content.style.display = "block";
    }
};