function somar (x, y) {
    return x + y;
}

console.log(somar (10, 5));

let somar2 = function (x, y) {
    return x + y;
}

console.log(somar2 (10, 5));

//arrow function
const somar3 = (x, y) => {
    return x + y;
}

console.log(somar3 (10, 5));

const somar4 = (x, y) => x + y;
console.log(somar4 (10, 5));