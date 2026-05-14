// const products =["Laptop", "Mouse","Keyboard"];
// const app= document.getElementById("app");

// const listHtml = products
//     .map(item => `<li>${item}</li>`)
//     .join("");

//         app.innerHTML = `<ul>${listHtml}</ul>`;

const products = [
    {name: "Laptop",price: 10000000},
    {name: "Mouse",price: 150000},
    {name: "keyboar",price: 300000},

];

const app = document.getElementById("app");

const listHtml = products
    .map(item=>`
        <div>
            <h4>${item.name}</h4>
            <p>Harga: ${item.harga}</p>
        </div>
        `)
        .join("");

app.innerHTML= listHtml;