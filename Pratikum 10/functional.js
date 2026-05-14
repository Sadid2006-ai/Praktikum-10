//const numbers = [1,2,3,4];

//const hasilMap = numbers.map(function(n){
//    return n*2;
//});

//console.log("Map:",hasilMap);

//const hasilFilter = numbers.filter(function(n){
  //  return n % 2 === 0;
//});

//console.log("Filter:",hasilFilter);

//const numbers =  [1,2,3,4];
//const hasilReduce = numbers.reduce(function(acc,n){
 //   return acc + n;
//}, 0);

//console.log("Reduce:" , hasilReduce);

const tambah = (a,b) => a+b;
console.log("pure:",tambah(3,5));

let nilai = 0;

function tambahGlobal(x){
    nilai += x;
    return nilai;
}

console.log("Non-Pure:", tambahGlobal(5));
console.log("Non-Pure:", tambahGlobal(5));
