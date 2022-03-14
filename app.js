// প্রোগ্রামিংয়ের ছয়রত্ন কি তুমি কি জানো: 

// ১. কিভাবে let, const দিয়ে ভেরিয়েবল লিখতে হয়,কখন কোনটা ইউজ করে তুমি কি জানো ?
// const name = 'Mim akter';
// let session = 'wonter';

// ২.১ কিভাবে কন্ডিশন লিখতে হয়, ছয় রকমের কন্ডিশন (>, <, ===, !==, >=. <=) কোনটা কোন জিনিসের জন্য ইউজ করবে। এছাড়াও && বা ।। দিয়ে কিভাবে একাধিক কন্ডিশন এর মধ্যে দুইটাই ফুলফিল করতে হবে আবার দুইটার যেকোন একটা ফুলফিল করতে হবে, সেটা কিভাবে করবে 

//1. 6 basic condition: > greter then , < less then , === ,!== equal na,<= greter then equal, >= less then equal .
// 2. multiple condition: sob condition true hote hobe ar jonno && use kora, je koro 1 ta condition ar jonno || or dite hobe 


// ২.২. এক বা একাধিক কন্ডিশন দিয়ে কিভাবে if-else লিখে আবার কখন if-else-if - else লিখে। সেই রকম একটা উদারহণ চিন্তা করে তুমি লিখে ফেলো 




// ৩. array কিভাবে ডিক্লেয়ার করে array এর মধ্যে length, index, push, pop, indexOf, includes এইগুলা কিভাবে কাজ করে। কোনটা দিয়ে কি করে? সেগুলা কি তুমি জানো?
// const numbers = [45,12,15,46,46,44,44]
// console.log(numbers);
// numbers.push(50);
// console.log(numbers);
// numbers.pop();
// numbers.shift();
// numbers.unshift(55);
// console.log(numbers);
// majkhane element add 
// numbers[5]= 100;
//array 5 number index a 100 add or array magkhane element add 
// console.log(numbers);
// console.log(numbers.length);
//array length check kore: output: 7
// console.log(numbers.indexOf(15));
//indexOf: 15 koto number index a ache ta bojai - output: 2
// console.log(numbers.includes(40));  
// includes holo jodi array ar vitore includes ar manta thake tahoe true dekhabe are na thakle false hobe.// value thakle true are na thakle false hobe 
// output: false
// ৪. দুইটা বেসিক লুপ ,এর মধ্যে for loop তোমাকে জানতেই হবে। while লুপটাও দেখে রাখতে পারো। যদিও আমরা এই দুইটা লুপই কম ইউজ করবো। তাও কখনো লাগলে যেন তুমি বুঝে ফেলতে পারো।  
// const numbers = [45,12,15,46,46,44,44];
// for(let i=0; i<numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }

// for(let number of numbers){
//     console.log(number);
// }

// ৫. function একটা অবশ্য জিনিস। বিশেষ করে সিম্পল একটা ফাংশন কখন ডিক্লেয়ার করতে হয়। কখন ফাংশন থেকে return করে। আর কিভাবে ফাংশন এর মধ্যে parameter নিতে হয়। 
// const numbers = [45,12,15,46,46,44,44];
// function  number(num){
//     for(let i=0; i<numbers.length; i++){
//             const number = numbers[i];
//             console.log(number);
//             return number;
//         }
// }
// const result = number(45,12,15,46,46,44,44);
// console.log(result);

// 2 number multiplication function 
// function multiTwoNumber(num1,num2){
//     const result = num1 * num2;
//     return result
// }
// const output = multiTwoNumber(12,12)
// console.log(output);

// ৬. আখেরি রত্ন হচ্ছে Object তাই কোন একটা অবজেক্ট কিভাবে ডিক্লেয়ার করে। সেখান property কিভাবে কিভাবে একসেস করা যায়। এছাড়াও অবজেক্ট এর প্রপার্টি এর ভ্যালু হিসেবে কিভাবে array, object ইউজ করা যায়। 
// Object 
// 3 ways to access property by name
// const student = {
//     name: 'sakib khan',
//     age: 32,
//     movies: ['king khan','dhaka mastan']

// }
// const studentAge = 'age'
// 3 way 
// console.log(student.age); 
//1.direct by property
// console.log(student['age']); 
//2. access via property name string
// console.log(student[studentAge]); 
//3.access via property name in a variable
// console.log(student['movies']);
// Object ar bitor theke array ke output hisabe dekhate hole object name['property name']

// ES6 রিলেটেড সাতটা জিনিস তোমাকে জানতে হবে 

// ১. একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার মধ্যে অবজেক্ট এর প্রপার্টি এর মান কিভাবে বসায় সেটা জানতে হবে। বিশেষ করে নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। বা কোন একটা অবজেক্ট এর প্রপার্টি array সেই array থেকে ভ্যালু এনে কিভাবে টেমপ্লেট স্ট্রিং এর মধ্যে বসাতে পারবে । 
// const numbers = [45,12,15,46,46,44,44];
// const student = {
//         name: 'sakib khan',
//         age: 32,
//         movies: ['king khan','dhaka mastan']
//     }
// const about = `My Name is ${student.name} . Age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[1]}`;
// console.log(about);

// ২. স্প্রেড অপারেটর (...) কিভাবে কাজ করে। বিশেষ করে একটা array কে কপি করে নতুন করে array বানাবে এবং সেখানে একটা উপাদান যোগ করবে। আবার একটা উপাদান কে বাদ দিয়ে বাকি সব উপাদানকে কিভাবে যোগ করবে (filter ইউজ করে)
// Speed operator: array ar opadan ke new akta array te ropantor kora; new array add korte hole [...number,100]

// let animal = {
//   name: 'dog',
//   color: 'red',
//   age: 24
// };
// jodi basi data ak object thake tahole sob ak shathe onno akta array or object a anar jonno 
// const { ...output} = animal;
// console.log(output);
// || {} error ar hat theke bachar jonno ai ta use kora hoy. tasara aita use korle baki code thik moto kaj korbe error ar jonno code bondo hobe na
//rest mane obosisto data
// const { name,...rest} = animal || {};
// console.log(rest);
// function a destructuring kora 
// const sum = (info) => {
//   console.log(info);
// }
// sum(animal);
   // or 
// const sum = ({name,age}) => {
//   console.log(name);
//   console.log(age);
// }
// sum(animal);


// const numbers = [45,12,15,46,46,44,44];
// const newNumbers = [...numbers,100]
// console.log(numbers);
// console.log(newNumbers);
// create a new array from an older array and add an element


// ৩.১. শূন্য প্যারামিটারওয়ালা একটা অ্যারো ফাংশন লিখবে যেটা ৯ রিটার্ন করবে। 
// const  numbers = () => console.log(52); 
//           numbers()

// const addSixtyFive = num => num + 65;
// const isEven = x => x % 2 == 0;

// ৩.২. এক প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করবে। এই ফাংশনের কাজ হবে যে প্যারামিটার নিবে সেটাকে ১২ দিয়ে গুণ করে গুণফল রিটার্ন করবে। 

// const multipleNum = num => console.log(num * 12);
// multipleNum(5);
  
// ৩.৩ দুই, প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। এই ফাংশনের কাজ হবে যে দুইটা প্যারামিটার ইনপুট নিবে। সেই দুইটা প্যারামিটারকে যোগ করে যোগফলকে চার দিয়ে ভাগ করে ভাগফল রিটার্ণ করে দাও। 
// const twoAddNumber = (num1 , num2) => {
//     const addNumber = num1 + num2;
//     const result = addNumber / 4;
//     return result
// }
// const output = twoAddNumber(4,4);
// console.log(output);
// output: 2
// const twoAddNumber = (num1,num2) => (num1 + num2) / 4;
// twoAddNumber(4,4);
// output dekhar jonno 
// const twoAddNumber = (num1,num2) => console.log((num1 + num2) / 4);
// twoAddNumber(4,4);

// ৩.৪ একাধিক লাইনওয়ালা অ্যারো ফাংশন লিখো। সেটাতে দুইটা প্যারামিটার নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ৫ যোগ করবে তারপর যোগফল দুইটাকে আবার গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 
// solve: 
// const twoAddNumber = (num1 , num2) => {
//     const first = num1 + 5;
//     const second = num2 + 5;
//     const result = first * second;
//     return result
// }
// const output = twoAddNumber(2,2);
// console.log(output);

// output: 49;
// short process:  hoy na
// const twoAddNumber = (num1,num2) => (num1+5,num2+5) * ;


// 

// ৪. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।

// // object destructuring
// const { name, age } = { name: 'alu', age: 14 };
// const { name, age } = { id: 12, name: 'alu', salary: 3400, age: 14 };

// const employee = {
//     ide: 'VS Code',
//     designation: 'developer',
//     machine: 'mac',
//     languages: ['html', 'css', 'js'],
//     specification: {
//         height: 66,
//         weight: 67,
//         address: 'kumarkhali',
//         drink: 'water',
//         watch: {
//             color: 'black',
//             price: 500,
//             brand: 'garmin'
//         }
//     }
// }
//1.object ar bitor theke kono array ke destructuring korte hole array symbol [] dite hobe are object nite hole object symbol {}  dite hobe. 
// 2 . array index ar karone serial menten kore but object serial menten kore na . 
// const [languages] = employee.languages;
// console.log(employee.languages);

// const { machine, ide } = employee;
// console.log(employee.machine);
// const { weight, address } = employee.specification;
// const { brand } = employee?.specification?.watch;
// console.log(employee?.specification?.watch);
// const { brand } = employee.specification.watch;


// ৫. shorthand দিয়ে অবজেক্ট কিভাবে ডিক্লেয়ার করে, {a , b } স্টাইলে। 
// ak line a code kora 
// const student = {name:'sakib', age: 15, class:'Six', Sex:'Male'}
// console.log(student.name);

// ৬. ফাংশন এর মধ্যে ডিফল্ট প্যারামিটার কিভাবে ডিক্লেয়ার করে 
// function multiNumber (num1=2, num2=2){
//     const result = num1 + num2;
//     return result
// }
// const output = multiNumber(3);
// const output = multiNumber();
// console.log(output);

// ৭. অপশনাল চেইনিং কি জিনিস, সেটা কখন কিভাবে ইউজ করে ? না জানলে গুগলে সার্চ দাও 

    // if and else ar kaj kore optional chinning  . optional chinning symbol = ?
    // array or object ar man na thakle tar poriborte optional chinnig  use korte hoy . symbol= ?


// ব্রাউজার API সম্পর্কে চারটা জিনিস 


// ১. লোকাল স্টোরেজ, সেশন স্টোরেজ কোনটা কখন ইউজ করবে। কিভাবে ইউজ করবে 


// ২. location API কিভাবে ইউজ করবে ব্রাউজারে 


// ৩. history API কিভাবে ইউজ করে 


// ৪. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ photos এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা। তারপর কয়েকটা কার্ড বানাবে (হতে পারে বুটস্ট্রাপ এর কার্ড) সেগুলা আবার তুমি html দিয়ে ওয়েবসাইট এ ছবি এবং ছবির নিচে ছবির টাইটেল দেখাবে।
// fetch('api url ')
//  .then(res => res.json())
//  .then(data => console.log(data))

//  or 
// const url = `api link`
// fetch(url)
//  .then(res => res.json())
//  .then(data => console.log(data))

// ------------

// আরো পাঁচটা জিনিস জানতে হবে। 

// ১.১ অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা ২ দিয়ে গুণ করে গুণফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 

// const numbers = [45,15,2,4,8,9,7];
// const multiNumber = numbers.map(number => number*2)
// console.log(multiNumber);

// ১.২. জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয় সেটার একটা সামারি লিখে ফেলো। 

// array ar bitor theke loop tho kore  ar akta array dibe
// const product = [
//     {name:'camera', price:9000, brand: 'casio', color:'gray'},
//     {name:'Laptop', price:10000, brand: 'walton', color:'green'},
//     {name:'Monitor', price:8000, brand: 'casio', color:'yellow'},
//     {name:'mobile', price:7000, brand: 'canon', color:'red'},
//     {name:'Pen', price:6000, brand: 'walton', color:'blue'},
//     {name:'camera', price:4000, brand: 'canon', color:'gray'},
//     {name:'monitor', price:3000, brand: 'casio', color:'white'}
// ]
// const prices = product.map(product => product.price)
// const prices = product.map(product => product.brand)
// console.log(prices);
//return na kore array use kora hoy forEach diye. k
// product.forEach(product =>console.log(product))
// product.forEach(product =>console.log(product.brand))
// filter: kono akta sorto dile sorto golo true hole output dibe.filter akta array return dibe
// const cheap = product.filter(products => products.price <= 5000);
// console.log(cheap);
// or 
// const specificName = product.filter(p => p.name.includes('n'));
// console.log(specificName);

// find: filter ar moto but 1st ta return korbe baki golo nibe na. sora sori object return kore
// const specific = product.find(p => p.price <= 5000)
// console.log(specific);


// ২. ternary অপারেটর কি ? এইটা দিয়ে শর্টকার্টে কিভাবে if-else লিখে 
// The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy.
// exam: 
// function getFee(isMember) {
//     return (isMember ? '$2.00' : '$10.00');
//   }
//   console.log(getFee(true));
  // expected output: "$2.00"
//   console.log(getFee(false));
  // expected output: "$10.00" 
//   console.log(getFee(null));
  // expected output: "$10.00"



// ৩. লজিক্যাল এন্ড (&&) আর লজিক্যাল or (।।) এই দুইটা সম্পর্কে হালকা ধারণা 
// jodi 2 ta condition true hote && use kora 
// je kono akta true hole output dibe || symbol.

// ৪. JSON এর stringify এবং parse কখন কোনটা ইউজ করে 

// JSON: json a single cootetion '' hoy na . sob "" hoy. json holo  kono array ke json a convert korle ta akline a hoy. just hibi jibi code are kiso na 
// normal array or Object ke json a convert 
// const student = {
//     name: 'sakib Khan',
//     age: 32,
//     movies: ['king khan', 'dhakar mastan']
// }
// const studentJson = JSON.stringify(student);
// console.log(student);
// console.log(studentJson);

// parse: JSON theke Object or array te convert korar jonno parse use kora hoy 
// const studentObj = JSON.parse(studentJson);
// console.log(studentObj);

// ৫. ++, --, +, +'', +=, -= এইগুলা কি জিনিস। কোনটা দিয়া কি করে সেটা বুঝলেই হবে। তাছাড়া active = !active এইটা এর মানে কি। 

// ৬. Object.keys, Object.values জিনিসগুলা জানা থাকলেও ভালো। 
// const student = {
//         name: 'sakib Khan',
//         age: 32,
//         movies: ['king khan', 'dhakar mastan']
//     }



// ph exam:

// const name = 'Hero';
// const age = 34;
// const person = {name, age}; 
// console.log(person);

// const adventurer = { name: 'Alice',cat: {name: 'Lucy'} };
// const ratName = adventurer?.rat?.name;
// console.log(adventurer?.rat?.name);
// const adventurer = { name: 'Alice',cat: {name: 'Lucy'} };
// const ratName = adventurer?.name;
// console.log(ratName);

// const obj = {a:1};
// console.log(Object.keys(obj).length===0);