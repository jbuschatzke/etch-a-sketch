const container = document.querySelector('.container');
let gridDimension = 256;
createGrid(gridDimension);

function createGrid(gridDimension){
    for (i = 0; i < gridDimension; i++){                    // create x divs and put inside container
        let box = document.createElement('div');
        box.classList.add('box');
        container.appendChild(box);
        box.onmouseover = () => {                 // add new "sketch" class to any box that is moused over
            box.classList.add('sketch');
        }
        box.textContent = `${i + 1}`;
    };
}

function newGame() {
let grid = +prompt("Create a grid of up to 100 squares", "0-100");
gridDimension = grid * grid;
if (grid <= 100 && grid > 0){
    createGrid(gridDimension);
} else if (isNaN(grid)){
    alert("This is not a number. Please enter a number between 1 and 100");
    newGame();
} else {
    alert("This is not a valid number. Please enter a number between 1 and 100");
}
};


// for (i = 0; i < 256; i++){                    // create 256 divs and put inside container
//     let box = document.createElement('div');
//     box.classList.add('box');
//     container.appendChild(box);
//     box.onmouseover = () => {                 // add new "sketch" class to any box that is moused over
//         box.classList.add('sketch');
//     }
//     box.textContent = `${i + 1}`;
// };

