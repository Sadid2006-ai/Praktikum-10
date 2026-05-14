//let tasks = ["Belajar JavaScript","Belajar ES6"];

//tasks.push("Belajar React");
//console.log("Mutable:",tasks);

//let newTasks = [...tasks,"Belajar React"];

//console.log("Original:", tasks);
//console.log("Immutable:",newtasks);

let state = {
    count: 0,
};

function increment(){
    state = {
        ...state,
        count: state.count + 1, 
    };
    console.log(state);
}

increment();
increment();
increment();