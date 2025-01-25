// Your code goes here
const rapid = (p1) =>{
    let result = '';
    for (let i = 0; i < p1.length; i++)
    {
        if (!'aeiouAEIOU'.includes(p1[i])){
            result += p1[i].toUpperCase();;
        }
    }
    return result;
}

// Work above this line; do not change code below
let str = "John";
console.log(rapid(str));
