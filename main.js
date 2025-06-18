


document.body.addEventListener("DOMContentLoaded", onStart);



function openPage(pageName, elmnt, color) {

    let i, tabcontent, tablinks;
    tabcontent = document.querySelectorAll(".tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }


    tablinks = document.querySelectorAll(".tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }


    document.getElementById(pageName).style.display = "block";


    elmnt.style.backgroundColor = color;
}

function onStart() {
    document.querySelector("#defaultOpen").click();
}




