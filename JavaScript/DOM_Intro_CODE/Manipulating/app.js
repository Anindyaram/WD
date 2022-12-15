// for (let link of allLinks) {
    //     link.innerText = 'I AM A LINK!!!!'
    // }
    
    // document.querySelector('p').innerHTML = '<i>lklmklm</i>'
    // document.querySelector('p').innerHTML += '<sup>lklmklm</sup>'
    
    //id
    
    // document.querySelector('#banner').id = 'try'
    
    /*
    -------------------HTML--------------------
    Egg and Chicken
    
    
    <h4>Which Came First?</h4>
    <img src="https://devsprouthosting.com/images/egg.jpg" width="200px"></img>
    //-----------------JS----------------------
    
    const image = document.querySelector('img')
    
    image.setAttribute('src','https://devsprouthosting.com/images/chicken.jpg')
    image.setAttribute('alt','chicken')
    */
const allLinks = document.querySelectorAll('a');
   
for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'solid'
}






