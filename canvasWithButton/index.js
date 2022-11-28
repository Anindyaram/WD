for(let i=0;i<1765;i++){
    const button = document.createElement('button') 
    // btn.innerText = `${  i}`
    document.body.appendChild(button)
}

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

const btn = document.querySelectorAll('button');
for(let b of btn){
    b.addEventListener('mouseenter',colorize)
}

const h1 = document.querySelector('h1');
h1.addEventListener('click',colorize)

function colorize(){
    this.style.backgroundColor = makeRandColor();
    this.style.color = makeRandColor();
}