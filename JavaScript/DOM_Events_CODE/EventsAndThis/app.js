const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

const buttons = document.querySelectorAll('button');

for (let button of buttons) {
    button.addEventListener('mouseover', colorize)
}

const h1s = document.querySelectorAll('h1');
for (let h1 of h1s) {
    h1.style.marginTop = '0';
    h1.style.marginBottom = '0';
    h1.style.textAlign = 'center';
    h1.addEventListener('mouseover', colorize)
}

function colorize() {
    this.style.backgroundColor = makeRandColor();
    this.style.color = makeRandColor();
}

const h2s = document.querySelector('h2');
h2s.style.textAlign = 'center';
h2s.style.margin = 0;
h2s.style.padding = '20px';
h2s.style.fontSize = '50px'
h2s.addEventListener('mouseover',()=>{
    h2s.style.backgroundColor=makeRandColor();
    h2s.style.color = makeRandColor();
})

const html = querySelector('body')
html.addEventListener('click',()=>{
    html.style.backgroundColor = makeRandColor();
    console.log('hello')
})
