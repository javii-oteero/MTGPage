var counterFoto = 1;
var autoSlideInterval;

function startAutoSlide() {
    autoSlideInterval = setInterval(function(){
        document.getElementById('radio' + counterFoto).checked=true;
        counterFoto++;
        if(counterFoto > 5){
            counterFoto = 1;
        }
    }, 4000); 
}

function updateCounter(clickedCounter) {
    clearInterval(autoSlideInterval);
    counterFoto = clickedCounter;
    startAutoSlide();
}

startAutoSlide();

// cookies
document.addEventListener("DOMContentLoaded", function() {
    var avisoCookies = document.getElementById("avisoCookies");
    var cookiesForm = document.getElementById("cookiesForm");

    if (!cookiesAceptadas()) {
        mostrarAvisoCookies();
    }

    function mostrarAvisoCookies() {
        avisoCookies.style.display = "block";
    }

    function aceptarCookies(event) {
        event.preventDefault();
        avisoCookies.style.display = "none";
        almacenarCookiesAceptadas();
    }

    function cookiesAceptadas() {
        return localStorage.getItem("cookiesAceptadas") === "true";
    }

    function almacenarCookiesAceptadas() {
        var checkboxes = cookiesForm.querySelectorAll("input[type=checkbox]:checked");
        localStorage.setItem("cookiesAceptadas", "true");
        checkboxes.forEach(function(checkbox) {
            localStorage.setItem(checkbox.name, "true");
        });
    }

    cookiesForm.addEventListener("submit", aceptarCookies);

    if (cookiesAceptadas()) {
        avisoCookies.style.display = "none";
    }
});

