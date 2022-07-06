const rows = Array.from(document.querySelectorAll("tr"));

const e5Button = document.querySelectorAll(".sort-switch")[2];
const gavetaButton = document.querySelectorAll(".sort-switch")[0];
const quantidadeButton = document.querySelectorAll(".sort-switch")[1];

rows.shift();
const rowsLength = rows.length

var tbody = document.querySelector("tbody");

var sortedTableE5 = new Array();

const sortedTableQuantity = function sortTableByQuantity(rows){
    let numbersArray = [];
    let rowsSorted = rows;
    let n = rows.length;
    let a;

    for (let g = 0; g < n; g++) {

        if(rows[g].querySelector(".quantidade-td").innerHTML == "S/Estoque") {
             a = 0;
        }else{
             a = parseInt(rows[g].querySelector(".quantidade-td").innerHTML);
        };

        numbersArray[g] = a;
    }

    for (let i = 1; i < n; i++) {
        let current = numbersArray[i];
        let currentR = rowsSorted[i];
        let j = i-1; 
        while ((j > -1) && (current < numbersArray[j])) {
            numbersArray[j+1] = numbersArray[j];
            rowsSorted[j+1] = rowsSorted[j];
            j--;
        }
        numbersArray[j+1] = current;
        rowsSorted[j+1]  = currentR;
    }

    return rowsSorted.reverse();
}

function sortTableByE5(rows){
    let dualCore = new Array();
    let quadCore = new Array();
    let sixCore = new Array();
    let octaCore = new Array();
    let decaCore = new Array();
    let leftElements = new Array();
    
    rows.forEach(a => {
        let content = a.querySelector(".nucleos-td").innerHTML;

        switch (content) {
            case "Dual-Core":
                dualCore.push(a);
                break;
            case "Quad-Core":
                quadCore.push(a);
                break;
            case "Six-Core":
                sixCore.push(a);
                break;
            case "Octa-Core":
                octaCore.push(a);
                break;
            case "Deca-Core":
                decaCore.push(a);
                break;
            default:
                leftElements.push(a);
                break;
        }

    });

    let sorting;

    sorting = dualCore.concat(quadCore);
    sorting = sorting.concat(sixCore);
    sorting = sorting.concat(octaCore);
    sorting = sorting.concat(decaCore);
    sorting = sorting.concat(leftElements);
    
    sortedTableE5 = sorting; 
};

sortTableByE5(rows);

const sortedTableGaveta = function sortTableByGaveta(rows) {
    let numbersArray = [];
    let rowsSorted = rows;
    let n = rows.length

    for (let g = 0; g < n; g++) {
        numbersArray[g] = parseInt(rows[g].querySelector(".gaveta-td").innerHTML);
    }

    for (let i = 1; i < n; i++) {
        let current = numbersArray[i];
        let currentR = rowsSorted[i];
        let j = i-1; 
        while ((j > -1) && (current < numbersArray[j])) {
            numbersArray[j+1] = numbersArray[j];
            rowsSorted[j+1] = rowsSorted[j];
            j--;
        }
        numbersArray[j+1] = current;
        rowsSorted[j+1]  = currentR;
    }

    return rowsSorted;
}

function addNewElementes(newRows){
    while(tbody.firstChild){
        tbody.removeChild(tbody.firstChild)
    }
    tbody.append(...newRows);
}

gavetaButton.addEventListener("click", ()=>{
    addNewElementes(sortedTableGaveta(rows));
})

e5Button.addEventListener("click", ()=>{
    addNewElementes(sortedTableE5);
})

quantidadeButton.addEventListener("click", ()=>{
    addNewElementes(sortedTableQuantity(rows));
})
