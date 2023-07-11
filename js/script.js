//recupero il container delle celle
const containerSquare = document.querySelector(".container");

//recupero il button
const playBtn = document.querySelector(".btn-play");


playBtn.addEventListener("click", function () {
    //numero delle celle che compongono la griglia
    let inputNum = 100;
    console.log(createGrid(inputNum));
})


//funzione che crea la griglia di gioco a partire dalle singole celle
//sotto forma di array --> ritorna un array di htmlDivElement
function createGrid(numberCells) {
    //array vuoto che andrà a contenere i vari div creati
    let gridList = [];

    //calcolo il numero di celle in una riga
    let cellsPerRow = Math.sqrt(numberCells);

    //ciclo per numero totale delle celle
    for (let i = 1; i <= numberCells; i++) {
        //creo cella
        let cell = document.createElement("div");
        cell.innerHTML = `<span>${i}</span>`
        cell.classList.add("square"); //aggiungo classe per visualizzazione
        //calcolo dinamicamente la larghezza di ogni cella a partire dal numero per riga
        cell.style.flexBasis = `calc(100% / ${cellsPerRow})`;

        gridList.push(cell);
    }
    return gridList;
}


//funzione che stamperà la griglia nel Dom
function printing(container, list) {
    for (let i = 0; i < list.length; i++) {
        
    }
}