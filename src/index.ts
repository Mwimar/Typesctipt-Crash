
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

// console.log(addNumbers(7, 8));
// console.log(subtractNumbers(25, 11));

function addAllNumbers(items: number[]):void {
    const total = items.reduce((a, c) => a + c, 0);
    console.log(total);
}

// addAllNumbers([4, 7, 2, 5, 7, 1, 34])

function formatGreeting(name: string, greeting: string) {
    return `${greeting}, ${name}`
}

const result = formatGreeting('Mwima', 'Wozzah');
// console.log(result)

let height: any
height = 45;
height = false
// console.log(height)

let car;

let fruits: any[] = ['mango', 'banana', 'kiwi', 'apple']
fruits.push(false, 13)
// console.log(fruits)

function addTogether(value: any): any{
    return value + value
}

const resultOne = addTogether('hey');
console.log(resultOne)
const resultTwo = addTogether(15);
// console.log(resultTwo);

//tuple
let many: [string, boolean, number] = ['hi', false, 45]
// console.log(many)
 
let details: [name: string, marks: number];
details = ['mark', 77]
// console.log(details)

interface Author{
    name: string,
    avatar: string
}

const kevin: Author = { name: 'Kevin', avatar: './Desktop/gwag.jpg' }

interface Post{
    title: string,
    body: string,
    tags: string[],
    created_at: Date,
    author:Author
}

const newPost: Post = {
    title: 'Neil Degrasse',
    body: 'More Science',
    tags: ['stars', 'galaxy', 'moon'],
    created_at: new Date(),
    author:kevin
}