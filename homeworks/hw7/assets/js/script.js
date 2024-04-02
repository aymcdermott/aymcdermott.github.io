//PART 2 - Writting Functions
function averageThreeNumbers (x, y, x) {
    let sum = x + y + x ;
    let avg = sum / 3 ;
    return avg;
}


function createSentence(num, noun) {
    return `On average, a Berkeley student has ${num} ${noun}s.`;
    // return "On average, a Berkeley student has " + num + " " + noun + "s.";
}

console.log(createSentence(5, "squirrel"));


function getRandomNum(max) {
    return Math.floor(Math.random() * max);
}


//PART 3 - Playing with the web console


//PART 3.1 - Function calling and variables
let x = getRandomNum(20);
let y = getRandomNum(10);
let z = getRandomNum(13);

let avg = averageThreeNumbers(x, y, z);
let redpanda = "red panda";

let sentence = createSentence(avg, redpanda)
console.log(sentence);



