{
// 1. Декларирај променливи од сите примитивни типови.
let name = "Marko";
let age = 12;
let online = true;
let location = undefined;
let employment = null;


// 2. Испечати ги соодветно вредностите и типовите на променливите.
console.log(name + ' so tip ' + typeof(name));
console.log(age + ' so tip ' + typeof(age));
console.log(online + ' so tip ' + typeof(online));
console.log(location + ' so tip ' + typeof(location));
console.log(employment + ' so tip ' + typeof(employment));

// 3. Промени ја вредноста на некоја од променливите.
online = false;


  
/* 4. Креирај константа и обиди се да и доделиш нова вредност. Што се случува? 
    -дава error во конзола и кодот престанува да се извршува понатаму
const school = 'Abraham Lincoln';
school = 'Jorge Washington'; 
*/

// 5. Декларирај променливи и употреби ги аритметичките оператори (да се испечатат резултатите)
let number1 = 5;
let number2 = 10;


console.log(number1 + number2);
console.log(number1 - number2);
console.log(number2 / number1);
console.log(number1 * number2);
console.log(number1 % number2);
console.log(number1++);
console.log(number2--);

// 6. Декларирај променливи и употреби ги операторите за споредба (да се испечатат резултатите)
console.log(number1 == number2);
console.log(number1 === number2);
console.log(number1 != number2);
console.log(number1 !== number2);
console.log(number1 > number2);
console.log(number1 >= number2);
console.log(number1 < number2);
console.log(number1 <= number2);

// 7. Декларирај променливи и употреби ги логичките оператори (да се испечатат резултатите)
console.log(number1 < number2 && number1 <= 5);
console.log(number1 < number2 || number1 < 0);
console.log(!(number1 < number2 && number1 < 0));
}