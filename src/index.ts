
let money = 100;

let cars: string[] = ['ferrari', 'BMW', 'Benz']
let ages: number[] = [4, 8, 23, 456]
ages.push(6)

let days = [34, 87, 29, 48]
days.push(46)

let stuff = [5, "HI", false]
let s = stuff[2]

let user: { firstName: string, age: number, id: number } = {
    firstName: 'Kevin',
    age: 23,
    id:457    
}
user.id=284

let star = {
    fName: 'Roro',
    jersey:7
}

star.jersey = 17
// console.log(star.jersey)

// console.log(user)


function addNumbers(a:number, b:number):number {
    return a + b 
}

const subtractNumbers = (a: number, b: number): number => {
    return a - b    
}

console.log(addNumbers(7, 8));
console.log(subtractNumbers(25, 11));