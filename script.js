let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x-circle");
    navbar.classList.toggle("active")
}




let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
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
ScrollReveal({reset: true,}).reveal('.home-txt .vitej, .home-txt .jsme_zu, .home-txt .text', { origin: "top" });
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
ScrollReveal({reset: true, distance: "140px"}).reveal('.gen2', { origin: "bottom" });
ScrollReveal({reset: true, distance: "140px"}).reveal('.st_mean', { origin: "bottom" });


