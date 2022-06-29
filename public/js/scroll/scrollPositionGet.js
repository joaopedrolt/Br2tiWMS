const addButton = document.querySelectorAll(".edit-add");
const decButton = document.querySelectorAll(".edit-remove");
var clickedElement;
 
addButton.forEach((item) => {
    item.addEventListener('click', ()=>{
        let y = document.documentElement.scrollTop;
        sessionStorage.setItem("currentscroll", y);
        sessionStorage.setItem("clicked", true);
    });
});

decButton.forEach((item) => {
    item.addEventListener('click', ()=>{
        let y = document.documentElement.scrollTop;
        sessionStorage.setItem("currentscroll", y);
        sessionStorage.setItem("clicked", true);
    });
});