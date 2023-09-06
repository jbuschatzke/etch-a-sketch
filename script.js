const container = document.querySelector('.container');
console.log(container);


for (i = 0; i < 256; i++){                    // create 256 divs and put inside container
    let box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);
    box.onmouseover = () => {                 // add new "sketch" class to any box that is moused over
        box.classList.add('sketch');
    }
    box.textContent = `${i + 1}`;
}