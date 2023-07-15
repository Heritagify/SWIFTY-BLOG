// >>>>>>>>FOR THE OPEN AND CLOSE BUTTON IN THE NAVBAR>>>>>>
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


// >>>>>>>FOR THE DATE>>>>>>>>>>>>>>
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("todaysDate").innerText= text;



// .................THE SLIDER>>>>>>>>>>>>>>>
let slideIndex = 0;
showSlides();

        function showSlides() {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            let dots = document.getElementsByClassName("dot");
              for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
              }
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1}    
              for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
              }
            slides[slideIndex-1].style.display = "block";  
            dots[slideIndex-1].className += " active";
            setTimeout(showSlides, 3000); // Change image every 2 seconds
        }
        