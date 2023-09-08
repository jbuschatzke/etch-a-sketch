const container = document.querySelector('.container');
let gridRow = 16;
let gridDivs = 16;
createGrid(gridRow, gridDivs);

function createGrid(gridRow, gridDivs){
    for (i = 0; i < gridRow; i++){                    // create x divs and put inside container
        let row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for (j = 0; j < gridDivs; j++){
            let squares = document.createElement('div');
            squares.classList.add('squares');
            row.appendChild(squares);
            squares.onmouseover = () => {                 // add new "sketch" class to any box that is moused over
                squares.classList.add('sketch');
            }
        }
        // box.textContent = `${i + 1}`;
    };
}

function newGame() {
let grid = +prompt("Create a grid of up to 100 squares", "1-100");
gridRow = grid;
gridDivs = grid;
if (grid <= 100 && grid > 0){
    document.querySelectorAll('.squares').forEach(e => e.remove());
    document.querySelectorAll('.row').forEach(e => e.remove());     //grab each currently placed div and remove
    createGrid(gridRow, gridDivs);
} else if (isNaN(grid)){
    alert("This is not a number. Please enter a number between 1 and 100");
    newGame();
} else {
    alert("This is not a valid number. Please enter a number between 1 and 100");
    newGame();
}
};