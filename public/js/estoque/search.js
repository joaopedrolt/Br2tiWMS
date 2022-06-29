const search = document.querySelector(".search--text")

const Tablerows = Array.from(document.querySelectorAll("tr"));

Tablerows.shift();

search.addEventListener("keyup", ()=>{

    let input = search.value, td;

    for (let i = 0; i < Tablerows.length; i++){
        if(Tablerows[i].getAttribute("style") != null){
            Tablerows[i].removeAttribute("style");
        }
    };

    for (let i = 0; i < Tablerows.length; i++){
        td = Tablerows[i].getElementsByTagName("td")[0];
        if(td.textContent.indexOf(input.toUpperCase()) == -1){
            Tablerows[i].style.display = "none";
        };
    };

    if(input == ""){
        for (let i = 0; i < Tablerows.length; i++){
            if(Tablerows[i].getAttribute("style") != null){
                Tablerows[i].removeAttribute("style");
            };
        };
    };

});