//function buatCounter(){
//    let count = 0;

//    return function (){
//        count++;
//        console.log(count);
//    };
//}

//const counter = buatCounter();
//counter();
//counter();
//counter();

function buatState(nilaiAwal){
    let state = nilaiAwal;

    return function (nilaiBaru){
        if(nilaiBaru !== undefined){
            state = nilaiBaru;
        }
        return state;
    };
}

const hitung = buatState(0);

console.log(hitung());
console.log(hitung(5));
console.log(hitung());
