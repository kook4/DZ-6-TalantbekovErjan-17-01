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


function f1(){
    for (let pk = "*"; pk.length < 8; pk+="*"){
        console.log(pk);
    }
}
f1()

let num =1;
for (; num < 100; num++){
    if(num % 5 === 0 && num % 3 === 0) {
        document.write( num, "= FizzBuzz <br />")
    }else if (num%5 ===0) {
        document.write( num, "= Buzz <br />");
    }else if (num%3 === 0){
        document.write( num, " = Fizz <br/ >" );
    }else{
        document.write( num, "<br/ >" );
    }
}
