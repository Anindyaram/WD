// spread as function call
const nums = [3,5,6,3,1,2,7,9]
console.log(Math.max(...nums))
console.log(Math.min(...nums))
console.log(...nums)
console.log(...'Anindya')
//Spread with array

const num = [32,4,6,73,43]
const str = ['asd','sdf','sdfs','dsf']
const Numstr = [...num , ...str]
console.log(Numstr)

//Spread in object literals

const tic = {a:1,b:2,c:3,d:4,e:5}
const toc = {f:6,g:7,h:8,i:9,j:10}
const tc = {q:8,g:34,h:55,y:65,k:10}
const ticToc = {...tic,...toc}
const tocTc = {...toc,...tc} //Order matters if objects have same pair
console.log(tocTc)//right side overRides first one pairs
console.log(ticToc)

console.log({...[2,1,4,5,3]})//indices are taken as key

const tictc = {...toc,...tc,g:111}
console.log(tictc)

console.log({...['asd','sad','dasdsa','fdfv','vfdb']})//indices are taken as key





