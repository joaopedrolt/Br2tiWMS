const erroAlert = document.querySelector('.alert');
const closeAlert = document.querySelector('.close-alert');

setTimeout(() => { erroAlert.classList.add('active-warning') }, 75);
setTimeout(() => { erroAlert.classList.remove('active-warning') }, 7000);

let Xbutton = erroAlert.children[0];

Xbutton.addEventListener("click", ()=>{
    erroAlert.classList.remove('active-warning');
});
