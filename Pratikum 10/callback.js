function prosesData(data, callback){
    console.log("Data diterima:",data);
    callback(data);
}

function tampilkanData(data){
    console.log("Menampilkan data:",data);
}

//prosesData("Belajar Callback",tampilkanData);
prosesData("Callback Arrow",(data)=>{
    console.log("Menampilkan data:",data);
});

prosesData("Belajar Callback",tampilkanData);