const words = [
    "Front-End Developer",
    "Flutter Developer",
    "UI Designer",
    "Web Developer"
];

let index = 0;
let char = 0;
let current = "";
let isDeleting = false;

function typingEffect(){

    current = words[index];

    if(!isDeleting){

        document.getElementById("typing").textContent =
        current.substring(0,char++);

        if(char > current.length){

            isDeleting = true;

            setTimeout(typingEffect,1000);

            return;
        }

    }else{

        document.getElementById("typing").textContent =
        current.substring(0,char--);

        if(char == 0){

            isDeleting = false;

            index++;

            if(index==words.length){

                index=0;
            }

        }

    }

    setTimeout(typingEffect,isDeleting?60:120);

}

typingEffect();

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

})

})

document.querySelectorAll(".hidden").forEach(el=>{

observer.observe(el)

})
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
});
document.querySelectorAll("#navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

    });

});