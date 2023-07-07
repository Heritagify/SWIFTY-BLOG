document.getElementById("Open").addEventListener("click", ()=> {
    document.querySelector(".nav-link").style.display= "flex";
    document.getElementById("Open").style.display = "none";
    document.getElementById("Close").style.display = "block";
})


document.getElementById("Close").addEventListener("click", ()=> {
    document.querySelector(".nav-link").style.display= "none";
    document.getElementById("Open").style.display = "inline-block";
    document.getElementById("Close").style.display = "none";
})