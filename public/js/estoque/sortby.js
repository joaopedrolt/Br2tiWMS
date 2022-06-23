var sortButtons = document.querySelectorAll(".sort-switch");

sortButtons.forEach((item) => {
    item.addEventListener("click", ()=>{
        clearActive();
        item.classList.add("active-sort");
    })
});

function clearActive(){
    sortButtons.forEach((item) => {
        item.classList.remove("active-sort");
    });
}