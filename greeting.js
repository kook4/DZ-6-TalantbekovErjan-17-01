// const name = prompt("Ваше имя?")
//     alert("Приветствую, " + name)
//
// const arr =["nick",true,false,45]
// const arr2 =["nick",true,false,45]
// console.log(arr.length)
// console.log(arr2.length)
//
// if (arr < arr2){
//     alert("arr меньше arr2")
// }else if (arr > arr2){
//     alert ("arr больше arr2")
// }
// console.log(arr, arr2)
let str = ''
for (let i = 0; i <= 7; i++){
    console.log(str)
    str += '*'
}

let num = 1;
for (; num < 100; num++){
    if(num % 5 === 0 && num % 3 === 0) {
        console.log('Fizzbuzz' + num)
    }else if (num % 5 === 0) {
        console.log('Buzz' + num)
    }else if (num%3 === 0){
        console.log('Fizz'+num)
    }else{
        console.log(num)
    }
}
let a = 5
let b = '5'
if (a === b){
    console.log('true')
}else{
    console.log('false')
}