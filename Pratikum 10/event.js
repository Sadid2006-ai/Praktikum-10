// const app=getElementById("app");

// app.innerHTML=`
// <button id="btnKlik">Klik Saya</button>
// `;

// const button = document.getElementById("btnKlik");

// button.addEventListener("click",function(){
//     alert("Tombol Berhasil Diklik");
// })

// const app = document.getElementById("app");

// app.innerHTML = `
//     <button id="btnKlik">Klik Saya</button>
// `;

// const button = document.getElementById("btnKlik");

// function handleClick(){
//     alert ("Function handleClick diPanggil");
// }

// button.addEventListener("click",handleClick);

// const app = document.getElementById("app");

// app.innerHTML = `
//     <button id="btnKlik">Klik Saya</button>
// `;

// const button = document.getElementById("btnKlik");

// button.addEventListener("click",function(){
//     console.log(this);
//     this.innerText = "Sudah diklik";
// })

const app = document.getElementById("app");

app.innerHTML = `
    <button id="btnKlik">Klik Saya</button>
`;

const button = document.getElementById("btnKlik");

button.addEventListener("click",()=>{
    console.log(this);
})