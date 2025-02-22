let tablinks=document.getElementsByClassName("tab-links");
let tabcontents=document.getElementsByClassName("tab-content");

function opentab(tabname){
    for(let tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(let tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
let menuicon=document.querySelector(`#menu-icon`);
let navbar=document.querySelector(`.navbar`)

menuicon.onclick=()=>{
menuicon.classList.toggle(`bx-x`);
navbar.classList.toggle(`active`);
};

let sections=document.querySelectorAll(`section`);
let navlinks=document.querySelectorAll(`header nav a`);

window.onscroll=()=>{
 sections.forEach(sec=>{
    let top=window.scrollY;
    let offset=sec.offsetTop-150;
    let height=sec.offsetHeight;
    let id=sec.getAttribute(`id`);
    if(top>=offset && top<offset+height){
        navlinks.forEach(links=>{
         links.classList.remove(`active`);
         document.querySelector(`header nav a[href*=` + id + `]`).classList.add(`active`);
        });
    };
 });
 let header=document.querySelector(`header`);
 header.classList.toggle(`sticky`,window.scrollY>100);

 menuicon.classList.remove(`bx-x`);
 navbar.classList.remove(`active`);
};
ScrollReveal({
    distance: `80px`,
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal(`.home-content, .heading`,{origin:`top`});
ScrollReveal().reveal(`.portfolio-box, .home-img, .services-container, .contact form`,{origin:`bottom`});
ScrollReveal().reveal(`.home h1, .about-img, .det, .icons, .btn2`,{origin:`left`});
ScrollReveal().reveal(`.home p, .about-content, .btn3`,{origin:`right`});

const scriptURL = 'https://script.google.com/macros/s/AKfycbyX_73QldGYAUqZhDNakWPhwwHm06iWJuOQlY0jBBiFEhz9o2EZFZZAs6f4ei1gta7mTg/exec';
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
});