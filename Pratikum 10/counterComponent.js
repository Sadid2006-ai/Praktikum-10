export function Counter(){
    let count = 0;

    function increment(){
        count++;
        render();
    }

    function render(){
        document.getElementById("app").innerHTML =`
        <h3>${title}</h3>
        <p>Count: ${count}</p>
        <button id="btn">Tambah</button>
        `;

        document.getElementById("btn").onclick = increment;
    }

    render();
}