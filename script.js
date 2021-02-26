
// let user = {
//   name: "Вася",
//   age: 20,
//   sayHi() {
//     console.log("Hello");
//   },
//   introduce() {
//     console.log(`My name is ${this.name}, i am ${this.age}.`);
//   }
// };


// (user.sayHi)();
// (user.introduce)();

// let A = +prompt("a?", 0);
// console.log(A);

// let whatToDo = prompt("what To Do?", "+");
// console.log(whatToDo);

// let B = +prompt("b?", 0);
// console.log(B);

// if (whatToDo == "+") {
//   alert(A + B);
// }
//  else if (whatToDo == "*"){
//   alert(A * B);
// }
//  else if (whatToDo == "-"){
//   alert(A - B);
// } 
// else if (whatToDo == "/"){
//   alert(A / B);
// } 
// else alert("It`s not an action");


// let word = "";

// do {
//   word = prompt("enter your word", "радар");
// } while (typeof word != "string");


// word.toLowerCase();
// let newWord = word.split("").reverse().join("");
// console.log(word);
// console.log(newWord);

// if (word === newWord) {
//   alert("This is palindrome.")
// } else console.log("this isn't a palindrome");


/*
let person = [
  { name: "Olga", budget: 300 },
  { name: "Yaroslaw", budget: 900 },
  { name: "Viktor", budget: 800 },
]

// let index = person.find( function (person) {
//   return person.budget === 300;
// })
// console.log(person);
let findedPerson;
for (let man of person) {
  console.log(man);
}
*/


// let word = "Канікули через мяч".split("");
// let object = {
//   "а": "@",
//   "ч": "4",
//   "з": "3",
//   "і": "1",
//   "в": "8",
//   "б": "6",
//   "я": "9|"
// };

// word.forEach( (item, i, word) => {  //run the word

//   for (let key in object) {  //run the object
//     if (object.hasOwnProperty(key)) {  // proto trap
//       if (item == key) {
//         word[i] = object[key];
//       }

//     }
//   }

// });
// console.log(word);
// console.log(word.join(''));


/*
function ucFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(ucFirst(""));
*/

/*
function checkSpam(str) {
  let rString = str.toLowerCase();
  return rString.includes("viagra") || rString.includes("xxx");
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));
*/

// function truncate(str, maxlength) {
//   if (str.length > maxlength) {
//     console.log(str.slice(0, maxlength) +"…");
//   }return str;
// }

/*
function truncate(str, maxlength) {
  let correctText = str.slice(0, maxlength - 1);
  return (str.length > maxlength) ?   
    correctText.slice(0, correctText.lastIndexOf(' ')) + "…" : str;
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));

console.log(truncate("Всем привет!", 20));
*/

/*
let num1 = +prompt("Enter a number", 3);
let num2 = +prompt("Enter a number", 3);

console.log(num1 + num2);
*/

//smells like teen spirit 

// let word = [];
// let desirableWord = prompt("enter a string","Smells like teen spirit");

// documen=t.write(desirableWord);
// document.write(word);
/* 
let number1 = +prompt("enter a number", 7);
let number2 = +prompt("enter a number", 4);
alert(number1 + number2); */

/* function random(min, max) {
  let rnumber = Math.floor(min + Math.random() * (max - min + 1));
  return rnumber;
}
 */
/*  
let str = prompt("Enter a word");

 function ucFirst(str) {
   return str[0].toUpperCase() + str.slice(1);
 }
 console.log(ucFirst(str)); */
/* 
 let fruits = ["Яблоко", "Апельсин", "Слива"];
  fruits[6] = "Груша";
 for (let fruit of fruits) {
   console.log(fruit);
 }
 console.log( fruits.length) ;
console.log(fruits); */

/* let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
alert(styles.shift());
styles.unshift("Рэп", "Регги");
console.log(styles); */

/* let arr = [];
let value;
let answer;

function sumInput() {
  while(true) {
    value = prompt("Enter a number",5);
    console.log();
    if (value === "" || value == null || !isFinite(value)) {
      break;
    }
    arr.push( +value);
  }
}


sumInput();
 */

let people = [
  { name: "Максим", age: 27, budget: 4500 },
  { name: "Остап", age: 31, budget: 7000 },
  { name: "Дмитро", age: 19, budget: 2100 },
  { name: "Арсен", age: 22, budget: 2500 },
  { name: "Оленка", age: 12, budget: 200 },
  { name: "Місько", age: 16, budget: 1200 }
]

//Usual
/* for( let i = 0; i < people.length; i++){
  console.log(people[i]);
} */

//ForOf
/* for( person of people){
  console.log(person);
} */

//forEach
/*  people.forEach(person => console.log(person)); */

//Map
/*  let newPeople = people.map((person) => ++person.age)
 console.log(newPeople); */

//Filter
/* let adults = [];
for (const person of people) {
  if(person.age >= 18) adults.push(person);
}
console.log(adults); */
/* let adults = people.filter(person => person.age >= 20);
  console.log(adults); */

//Reduce
/* let amount = 0;
for( let person of people){
amount += person.budget;
}
console.log(amount); */
/* let amount = people.reduceRight((total, person) => total + person.budget, 0);
console.log(amount); */
//Find
/* let filtredName = people.find(person => person.name === "Місько");
console.log(filtredName); */
//FindIndex
/* let filtredNameIndex = people.findIndex(person => person.name === "Місько");
console.log(filtredNameIndex); */


/* let str = "background-color";

function camelize(){
  let newArr = str
  .split("-")
  .map( (word, index) => {
    // return index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    if (index == 0) {
      return word
    } else{
      return ( word[0].toUpperCase() + word.slice(1));
    }
  })
  .join("");
  return newArr;
}
console.log( camelize() ); */

/* let filtred;
let array = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  return arr.filter(item => (a <= item && item <= b) );
}

console.log(filterRange(array, 1, 4) ); */

/* let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];

function filterRangeInSpace(arr, a, b) {

  for(let i = 0; i < arr.length; i++) {
    let val = arr[i];

    // удалить, если за пределами интервала
    if (val < a || val > b) {
      arr.splice(i, 1);

      i--;
      console.log(i);
    }
  }
};

filterRangeInSpace(arr, 1, 3);
console.log(arr); */


/* let arr = [5, 2, 1, -10, 8];
console.log(arr.sort((a, b) => b - a )); */


/* let arr = ['Alfa', 'Gama', 'Beta'];

copySorted = arr => arr.slice().sort();

console.log('arr: ', arr);
console.log('sorted: ', copySorted(arr));
 */


/* let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha];

let names = users.map( item => item.name );

console.log(names); */


/* let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [vasya, petya, masha];

let usersMapped = users.map( user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

console.log(usersMapped);
console.log( usersMapped[0].id);
console.log( usersMapped[0].fullName ); */

/*
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let arr = [vasya, petya, masha];

sortByAge(arr);

function sortByAge(arr) {
  arr.sort((a, b) => a.age > b.age ? 1 : -1);
}

console.log(arr);
console.log(arr[0].name);
console.log(arr[1].name);
console.log(arr[2].name);
 */



/* function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

// подсчёт вероятности для всех возможных вариантов
let count = {
  '123': 0,
  '132': 0,
  '213': 0,
  '231': 0,
  '321': 0,
  '312': 0
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join('')]++;
}
// показать количество всех возможных вариантов
console.log(count); */

/*
let vasya = { name: "Вася", age: 25 },
    petya = { name: "Петя", age: 30 },
    masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

let getAverageAge = people => ( Math.round(
  people.reduce( (current, user) => current + user.age, 0) / people.length)
  );

console.log(getAverageAge(people));// масив Владілена Мініна */

/* let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

let result = [];
function unique(arr) {
  arr.forEach( element => {
    (!result.includes(element)) ? (result.push(element)) : false;
  });
  return result;
}
console.log(unique(strings)); */

/* let name = 'Dan',
  job = "frontend",
  age = 27;

let person = {
  name,
  job,
  age,
  greet() {
    return `Hi, I am ${this.name}, ${this.job} developer, ${this.age} years old`;
  }
}

 */

/* const person = Object.create(
  {},
  {
    name: {
      value: 'Vladilen',
      enumerable: true,
      writable: true,
    },
    birthyear: {
      value: 1993,
      enumerable: true,
      writable: false
    },
    age: {
      enumerable: true,
      get() {
        return new Date().getFullYear() - this.birthyear
      },
      set() { }
    }
  }
)

for (const key in person) {
  if (Object.hasOwnProperty.call(person, key)) {
    const element = person[key];
    console.log(key, element);
  }
} */

/* let names = ["Jack", "Alex", 'Dan']

for (const name of names) {
  console.log(name);
} */

/* let range = {
  from: 1,
  to: 10
};

// 1. вызов for..of сначала вызывает эту функцию
range[Symbol.iterator] = function () {

  // ...она возвращает объект итератора:
  // 2. Далее, for..of работает только с этим итератором, запрашивая у него новые значения
  return {
    current: this.from,
    last: this.to,

    // 3. next() вызывается на каждой итерации цикла for..of
    next() {
      // 4. он должен вернуть значение в виде объекта {done:.., value :...}
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
};

for (let num of range) {
  console.log(num)
} */

/* function* generator() {
  yield "H"
  yield "e"
  yield "l"
  yield "l"
  yield "o"
  yield "!"
}

let cnsl = generator();

let i = 7;
while (i > 0) {
  console.log(cnsl.next().value);
  i--;
} */

/* let str = '𝒳😂';

// разбивает строку на массив её элементов

console.log(str[0]); // 𝒳
console.log(str[1]); // 😂
console.log(str.length); // 2 */
/* 
let map = new Map();

map.set(1, "number")
map.set(true, "Boolean")

console.log(map);
console.log(map.size);
console.log(map.has("1"));

console.log(`Size is ${map.size}`);

console.log('-----');

console.log(map.get(1))
console.log(map.get(true))
console.log('-----');

map.set('1', 'str')

console.log(map.get("1"))
console.log(map.has("1"))
console.log(`Size is ${map.size}`); */

/* let recipeMap = new Map([
  ["огурец", 500],
  ["помидор", 350],
  ["лук", 50]
]);

console.log(recipeMap);

for (let vegetables of recipeMap.entries()) {
  console.log(vegetables);
} */

const obj = {
  name: "Vladilen",
  age: 26,
  job: "fullstack"
}
console.log("🚀 ~ file: script.js ~ line 558 ~ obj", obj)





