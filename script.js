const container = document.querySelector('.container');
console.log(container);

// create 32 divs and put inside container
for (i = 0; i < 256; i++){
    box = document.createElement('div');
    box.classList.add('box');
    box.textContent = `${i + 1}`;
    container.appendChild(box);
}


console.log(box);