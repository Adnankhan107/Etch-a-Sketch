const container = document.querySelector("#container");
const resetBtn = document.getElementById("reset-button");
const selectBtn = document.getElementById("select-grid");


selectBtn.addEventListener("click", ()=>{
    let userInput = parseInt(prompt("Select number between 1 t0 100"));

    if(userInput >= 1 && userInput <= 100){
        container.innerHTML = "";
        makeRows(userInput);
        makeColumns(userInput);
    } else{
        alert("Please enter a valid number between 1 to 100");
    }
});

resetBtn.addEventListener("click", () => {
    container.innerHTML = "";
    defaultGrid();
})

function defaultGrid(){
    makeRows(16);
    makeColumns(16);
}

defaultGrid();

function makeRows(rowNUm){
    // creates rows
    for(let r = 0; r < rowNUm; r++){
        let row = document.createElement("div");
        row.className = "gridRow";
        container.appendChild(row);
    }
}

// create columns
function makeColumns(cellNum){
    let rows = document.getElementsByClassName("gridRow");

    for(let i = 0; i < rows.length; i++){
        for(let j = 0; j < cellNum; j++){
            let newCell = document.createElement("div");
            rows[i].appendChild(newCell).className = "cell";
        }
    }
}


container.addEventListener("mouseover", (event)=>{
    if(event.target.classList.contains("cell")){
        event.target.style.backgroundColor = "black";
    }
});

