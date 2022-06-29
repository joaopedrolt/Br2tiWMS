var getClicked = sessionStorage.getItem("clicked");
sessionStorage.setItem("clicked", false);

window.onload = ()=>{
    if(getClicked == "true"){
        let getY = sessionStorage.getItem("currentscroll");
        setTimeout(function () {
            window.scrollTo(0, getY);
        },2);
    }
};
