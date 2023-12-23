let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x-circle");
    navbar.classList.toggle("active");
}




let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offsetNumber = 150;
        let offset = sec.offsetTop - offsetNumber;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
            })
        }
    })
}




ScrollReveal({
    distance: "80px",
    duration: 2000,
    delay: 200
});

// dom
ScrollReveal({reset: true,}).reveal('.home-txt .vitej, .home-txt .vitej2, .home-txt .jsme_zu, .jsme_zu2, .home-txt .text', { origin: "top" });
ScrollReveal({reset: true,}).reveal('.button-d', { origin: "bottom" });
//o-nas
ScrollReveal({reset: true,}).reveal('.circle1', { origin: "left" });
ScrollReveal({reset: true,}).reveal('.o-nas-content p', { origin: "right" });
ScrollReveal({reset: true,}).reveal('h3.onas', { origin: "top" });
ScrollReveal({reset: true,}).reveal('.button-d2', { origin: "bottom" });
// sluzby
ScrollReveal({reset: true,}).reveal('h3.sluzby', { origin: "top" });
ScrollReveal({reset: true, distance: "540px"}).reveal('.gen1', { origin: "left" });
ScrollReveal({reset: true, distance: "540px"}).reveal('.gen3', { origin: "right" });
ScrollReveal({reset: true, distance: "540px"}).reveal('.gen2', { origin: "bottom" });
if(innerWidth < 750){
    ScrollReveal({reset: true, distance: "540px"}).reveal('.gen1, .gen3', { origin: "left" });
    ScrollReveal({reset: true, distance: "540px"}).reveal('.gen2', { origin: "right" });
}
if(innerWidth < 729){
    ScrollReveal({reset: true, distance: "540px"}).reveal('.gen1, .gen3, .gen2', { origin: "left" });
}

if(innerWidth < 694){
    ScrollReveal({reset: true,}).reveal('.o-nas-content p', { origin: "left" });
}
