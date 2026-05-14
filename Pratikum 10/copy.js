const user = {
    name: "Aubrey",
    address: {
        city : "bandung",
    },
};

const userCopy = {...user};

userCopy.name = "Karin";
userCopy.address.city = "Jakarta";

console.log("User Asli: ",user);
console.log("User Copy: ",userCopy);


const numbers = [{value : 1 },{value: 2}];

const numberCopy = [...numbers];

numberCopy[0].value=99;

console.log("Array Asli: ",numbers);
console.log("Array Copy: ",numberCopy);

const userDeep = JSON.parse(JSON.stringify(user));

userDeep.address.city = "Surabaya";

console.log("user asli: ",user);
console.log("user copy: ",userDeep);


