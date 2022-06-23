const burguer = document.querySelector(".menu-burger--area");
const navMobile = document.querySelector(".mobile-nav--area");

burguer.addEventListener("click", ()=>{
    burguer.classList.toggle('active');
    navMobile.classList.toggle('active-mobile');
})