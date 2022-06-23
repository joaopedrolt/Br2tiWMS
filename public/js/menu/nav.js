const navItens = document.querySelectorAll(".icon-container");
const info = document.querySelectorAll(".hover-info");
const navShow= document.querySelectorAll(".nav-item")
const activeButton = document.querySelectorAll(".icon-container");
const navIcons = document.querySelectorAll(".nav-icons");
const navMenu = document.querySelector(".nav-menu");
const navArea = document.querySelector(".nav-area");

navItens.forEach((item, index) => {
    item.addEventListener("mouseover", ()=>{

        navMenu.style.width = "300px";
        navArea.style.width = "300px";

        info[index].classList.add("active-info");

        navShow.forEach((item) =>{;
            item.className = "nav-item-hover"
        });

    })

    item.addEventListener("mouseout", ()=>{

        navMenu.style.width = "70px";
        navArea.style.width = "70px";

        info[index].classList.remove("active-info");
  
        navShow.forEach((item) =>{
            item.className = "nav-item";
        });

    });

});

activeButton.forEach((item , index) => {
    item.addEventListener("click", ()=>{
        navIcons.forEach((item) => {
            item.classList.remove("active-item");
        });
        clearActiveNav();
        item.classList.add("active-item");
        navIcons[index].classList.add("active-item");
    })
});


function clearActiveNav(){
    activeButton.forEach((item) => {
        item.classList.remove("active-item");
    });
};