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



// let str = ''
// for (let i = 0; i <= 7; i++){
//     console.log(str)
//     str += '*'
// }
//
// let num = 1;
// for (; num < 100; num++){
//     if(num % 5 === 0 && num % 3 === 0) {
//         console.log('Fizzbuzz' + num)
//     }else if (num % 5 === 0) {
//         console.log('Buzz' + num)
//     }else if (num%3 === 0){
//         console.log('Fizz'+num)
//     }else{
//         console.log(num)
//     }
// }


// let getReturn = function (age) {
//     return (age > 18) ? "true" : "Родители разрешили?"
// }
// console.log(getReturn(18))
//
//
// let result = function (a, b){
//     return (a + b < 4) ? "мало" : "много"
// }
// console.log(result(1,1))
//
//
// let messages = function (login) {
//     return(login === "сотрудник") ? "Привет" : (login === "директор") ? "Здравствуйте" : (login === "") ? "нет логина" : ""
// }
// console.log(messages("директор"))
//
//
// let a = [0]
// let ggg
// if (a > 0){
//     console.log("1")
// } else{
//     console.log("2")
// }
//
// const nick = ["nick",true,false,50]
// const kick = ["nick",true,false,45]
// console.log(nick.length)
// console.log(kick.length)
//
// nick.length =
// kick.length = 6
// function arr(height){
//     return(nick)
// }
// console.log(nick, kick)
//
// let element = (element) => console.log ('Hydrogen', 'Helium', 'Lithium', 'Beryllium')
// console.log(element)




// const block = document.querySelectorAll(".block")
// console.log(block)
//
// const button = document.getElementById('button')
// const input = document.getElementById('input')
//
//
// button.onclick = () => {
//     const div = document.createElement('div')
//
//     const deleteButton = document.createElement('button')
//     deleteButton.innerText = 'delete'
//
//     const changeButton = document.createElement('button')
//     changeButton.innerText = 'change'
//
//     const p = document.createElement('p')
//     div.setAttribute('class','block')
//     p.innerText = input.value
//
//     div.append(p)
//     div.append(deleteButton, changeButton)
//     document.body.append(div)
//
//     deleteButton.onclick = () => {
//         div.remove()
//     }
//     changeButton.onclick = () => {
//         const text = prompt('введите изменения')
//         p.innerText = text
//     }
// }



const fruits = ['яблоко', 'груша']
const car = ['хонда', 'тойота']
const notebook = ['lenovo','macbook']
const name = ['robert', 'paulo']
const age = [19, 25]

const all = [...fruits, car, notebook, name, age]
console.log(all)



const obj = {
    first_name: 'roman',
    age: '20',
    last_name: 'aaron',
    favorite_fruit: 'mango',
    car: 'bmw'
}

const objAll = {
    ...obj,
    key1: 'nick',
    key2: 'kick',
    key3: 'nin'
}
console.log(objAll)


const button = document.getElementById('button')
const input = document.getElementById('input')

    button.onclick = () => {
    const div = document.createElement('div')

    document.body.append(div)
    div.innerText = 'HELLO' + ', ' + input.value
}