// week 12
/*let stairs = `one step,two steps,stair`;
console.log(stairs.length)*/

let test = `\"you shall not pass!!!\"`
console.log(test);
let position = test.indexOf(`not`);
console.log(position);
//Генератор случайных чисел
console.log (Math.random()*1000)
//настя=>Настя

//тест
const str = "abcdefghij";
console.log("(2,3): "    + str.substr(2,3));

//округление
console.log(Math.round(359.17));


//массивы
let items = new Array();
let items2 = [];

/* Даты
// Текущая дата до секунд
let now = new Date();
console.log(now);
 
милисекунды со дня взятия бастилии
let timestamp =  new Date(48*3600*1000);
console.log(timestamp);

let date1789 = new Date(`1789-07-14`);
console.log(date1789);

//Date (year, month, date) Champ de Mars massacre
let num = new Date(1791,07,17);
console.log(num); 
//Даты всегда создаются со временем, если время не указано по умолчпнию будет 00:00

let num1 = new Date(1986,08,27);
console.log(num1.getDay());
console.log(num1.getHours());

let num2 = new Date(`2021-01-24T22:51`);
console.log(num2);*/

/*День взятия Бастилии И он отсчитывает с нуля
let date = new Date(1789, 6, 14, 5);
console.log(date);*/

/*let date = new Date(2021,0,24,22,51);
console.log(date);
console.log(date.getDate());*/
/*let y = new Date(); 
let d = y.getDate();
console.log(d);*/

//меняем дату
let num = new Date(1789,06,14);
console.log(num);
console.log(num.getDate());
console.log(num.getMonth()+1);
console.log(num.getFullYear());
console.log(`${num.getDate()}.${num.getMonth()+1}.${num.getFullYear()}`);

//получить дату, день недели использовать апостроф
let num1 = new Date(1986,07,27);
console.log(num1);
console.log(num1.getDay());
console.log(num1.getDate());
console.log(num1.getMonth()+1);
console.log(num1.getFullYear());
console.log(`${num1.getDay()+1}.${num1.getDate()}.${num1.getMonth()+1}.${num1.getFullYear()}`)
num1.setFullYear(1987);
console.log(num1);


/*
console.log(num.setFullYear(1791));
console.log(num.setDate(17));
*/ 


//условия
function check(){
    let result = document.getElementById("test").value;
    if (result==``) {
        alert(`ответ неверен!`);
    }
}

//compare
function compare(z,x) {
    if (z>x) 
    { console.log(z);
    return z;}
else { 
    return x;}
}

//compare3
function compare3(a,b,c){
    if (a>b && a>c){
        console.log();
        return a;
}
else if (b>a && b>c) {
    return b;
}
{
    return c;
}
    
}

//tennant operator
function checkAge(age)
{
    /*if (age>=18)
    alert("It`s OK");
    else 
    alert("Go to bed!");*/
    (age>=18)? alert("It`s OK") : alert("Go to bed!");
}  

//switch operator по номеру месяца=>название месяца
function weekDayName(number) 
{
  let name = ``;
  switch(number)
  {
    case 1: name=`Monday`; break;
    case 1: name=`tuesday`; break;
    case 1: name`Wednesday`; break;
    case 1: name`Thursday`; break;
    case 1: name`Friday`; break;
    case 1: name`Saturday`; break;
    case 1: name`Sunday`; break;

    default: name `День-пиздень`;
    return name
  }
}


//ПРАКТИКА


let arr = [17, 'two', true, {name: 'Cat'}, [1, 2, 3]];
console.log(arr[3]);

const students = ["Lena", "Olya", "Ylia", "Roma" ,  "Vova" ];
console.log(students[3]);


// получаем текущую дату и время
let now = new Date();

// получаем количество миллисекунд до полуночи следующего дня
let msUntilMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1) - now;

// преобразуем миллисекунды в секунды
let secUntilMidnight = Math.floor(msUntilMidnight / 1000);

console.log(secUntilMidnight);

//Массивы
let fruits = new Array();
let fruits2 = [];
let salad = [`dragonfruit`,`avocado`,`pear`,`orange`,`mangostine`];
let numbers = [5,17,27,158,95,83,379];
console.log()


//цикл while
//Том Сойер
let numBoards = 54;
let boardsPainted = 0;

while (boardsPainted < numBoards) {
  console.log(`Том красит ${boardsPainted + 1}-ю доску`);
  boardsPainted++;
}

console.log('Весь забор покрашен!');

//10 000 hours
let StudyHours = 0;
let hoursToMaster = 10000;
while (StudyHours<hoursToMaster) {
    console.log (`я просидела за программированием и придумыванием цикло с понятными примерами ${StudyHours}`)
    StudyHours+=100;// любое число часов
}
console.log (`Success!`)

let i = 0;
while (++i < 5) console.log(i);

let x = 0;
while (x++ < 5) console.log(x);