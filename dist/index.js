"use strict";
let money = 100;
let cars = ['ferrari', 'BMW', 'Benz'];
let ages = [4, 8, 23, 456];
ages.push(6);
let days = [34, 87, 29, 48];
days.push(46);
let stuff = [5, "HI", false];
let s = stuff[2];
let user = {
    firstName: 'Kevin',
    age: 23,
    id: 457
};
user.id = 284;
let star = {
    fName: 'Roro',
    jersey: 7
};
star.jersey = 17;
// console.log(star.jersey)
// console.log(user)
function addNumbers(a, b) {
    return a + b;
}
const subtractNumbers = (a, b) => {
    return a - b;
};
// console.log(addNumbers(7, 8));
// console.log(subtractNumbers(25, 11));
function addAllNumbers(items) {
    const total = items.reduce((a, c) => a + c, 0);
    console.log(total);
}
// addAllNumbers([4, 7, 2, 5, 7, 1, 34])
function formatGreeting(name, greeting) {
    return `${greeting}, ${name}`;
}
const result = formatGreeting('Mwima', 'Wozzah');
// console.log(result)
let height;
height = 45;
height = false;
// console.log(height)
let car;
let fruits = ['mango', 'banana', 'kiwi', 'apple'];
fruits.push(false, 13);
// console.log(fruits)
function addTogether(value) {
    return value + value;
}
const resultOne = addTogether('hey');
// console.log(resultOne)
const resultTwo = addTogether(15);
// console.log(resultTwo);
//tuple
let many = ['hi', false, 45];
// console.log(many)
let details;
details = ['mark', 77];
const kevin = { name: 'Kevin', avatar: './Desktop/gwag.jpg' };
const newPost = {
    title: 'Neil Degrasse',
    body: 'More Science',
    tags: ['stars', 'galaxy', 'moon'],
    created_at: new Date(),
    author: kevin
};
// console.log(newPost);
function createPost(post) {
    // console.log(`Created post ${post.title}`)
}
function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
const color1 = getRandomColor();
const color2 = getRandomColor();
const userOne = { name: 'Kodak', score: 18 };
function formatUser(user) {
    console.log(`${user.name} has a score of ${user.score}`);
}
// formatUser(userOne)
let someId;
someId = 'Hello';
someId = 34;
