const fs = require('fs');   //import a built-in module with the help of require in the code
const folderName = process.argv[2] || 'Project';
const htmlFile = process.argv[3] || 'Index.html';
const cssFile = process.argv[4] || 'style.css';
const JsFile = process.argv[5] || 'app.js';

// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log("IN THE CALLBACK!!")
//     if (err) throw err;
// });

try {
    fs.mkdirSync(folderName);
    // fs.writeFileSync(`${folderName}/index.html`, '')
    // fs.writeFileSync(`${folderName}/app.js`, '')
    // fs.writeFileSync(`${folderName}/styles.css`, '')
    fs.writeFileSync(`${folderName}/${htmlFile}`, '');
    fs.writeFileSync(`${folderName}/${cssFile}`, '');
    fs.writeFileSync(`${folderName}/${JsFile}`, '');
} catch (e) {
    console.log("SOMETHING WENT WRONG!!!");
    console.log(e);
}