
// Début script menu responsive
function toggleMenu() {
    const menu = document.querySelector('.menu');
    const icon = document.getElementById('menu-icon');
    const burger = document.querySelector(".burger-menu");


    menu.classList.toggle('active');
    burger.classList.toggle("open");
    // Change the icon based on menu state
    if (menu.classList.contains('active')) {
        icon.textContent = '✖'; // Close icon
    } else {
        icon.textContent = '☰'; // Menu icon
    }
}

// Fin script menu responsive

// Diaporama carousel 
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".dots-container");
let currentIndex = 0;

// Générer les dots dynamiquement
slides.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
});

// Mettre à jour l'affichage des dots
function updateDots() {
    document.querySelectorAll(".dot").forEach((dot, i) => {
        dot.classList.toggle("active", i === currentIndex);
    });
}

// Aller à un slide précis avec un effet de fondu
function goToSlide(i) {
    slides.forEach((slide, index) => {
        slide.classList.toggle("active", index === i);
    });

    currentIndex = i;
    updateDots();
}

// Défilement automatique toutes les 10 secondes
function autoSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    goToSlide(currentIndex);
}

// Initialisation
goToSlide(0);
setInterval(autoSlide, 7000);
// Fin diaporama carousel


function openTab(evt, tabName) {
    let i, tabContent, tabLinks;
        
    // Cacher tous les contenus
    tabContent = document.querySelectorAll(".tab-content");
    tabContent.forEach(content => content.classList.remove("active"));
        
    // Désactiver tous les onglets
    tabLinks = document.querySelectorAll(".tab-link");
    tabLinks.forEach(link => link.classList.remove("active"));
        
    // Activer l'onglet cliqué et son contenu
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}
   // scroll drag 
document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelector(".tabs");

    let isDown = false;
    let startX;
    let scrollLeft;
    if(tabs){
        tabs.addEventListener("mousedown", (e) => {
            isDown = true;
            startX = e.pageX - tabs.offsetLeft;
            scrollLeft = tabs.scrollLeft;
        });
    
        tabs.addEventListener("mouseleave", () => {
            isDown = false;
        });
    
        tabs.addEventListener("mouseup", () => {
            isDown = false;
        });
    
        tabs.addEventListener("mousemove", (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - tabs.offsetLeft;
            const walk = (x - startX) * 2; // Vitesse du scroll
            tabs.scrollLeft = scrollLeft - walk;
        });
    }
    
});

        // Menu responsive
        const hamburger = document.querySelector(".hamburger");
        const menu = document.querySelector(".menu");

        if(hamburger){
            hamburger.addEventListener("click", () => {
                menu.classList.toggle("active");
            });
        }
       
       

        document.querySelectorAll('.info-card.text').forEach(card => {
            card.addEventListener('click', function () {
                this.classList.toggle('active');
            });
        });
        

        const scrollBtn = document.querySelector(".scroll-top");
        if(scrollBtn){
            window.onscroll = function() {
                if (document.documentElement.scrollTop > 200) {
                    
                    scrollBtn.style.display = "block";
                } else {
                    scrollBtn.style.display = "none";
                }
            };
    
            function scrollToTop() {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
        }
       
