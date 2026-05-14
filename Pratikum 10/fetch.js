//fetch("https://jsonplaceholder.typicode.com/posts/1")
//.then(function(response){
//    return response.json();
//})
//.then(function (data){
//    console.log("Data dari API:",data);
//});

//fetch("https://jsonplaceholder.typicode.com/posts/1")
//.then(res => res.json())
//.then(data => console.log("Arrow Fetch", data));

fetch("https://jsonplaceholder.typicode.com/invalid-url")
.then((res) => {
    if (!res.ok){
        throw new Error("Request gagal");
    }
    return res.json();
})
.then((data) => console.log(data))
.catch((error) => console.error("Error:",error.message));