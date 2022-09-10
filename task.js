/* task1
დაწერეთ ფუნქცია ციფრების ჯამი , sumOfDigits(n) რომელიც იღებს ერთ პარამეტრს 
და აბრუნებს გადაცემული მნიშვნელობის შემადგენელი ციფრების ჯამს . 
sumOfDigits(1312) = 1+3+1+2 = 7;

აღნიშნული დავალება შეასრულეთ ორნაირად , როგორც ჩვეულებრივი ასევე რეკურსიული
ფუნქციის გამოყენებით . 

*/
const sumOfDigits = (num) => {
  return String(num).split('').reduce((acc, curr) => {
    return acc + Number(curr)
  }, 0)
}

console.log(sumOfDigits(1234));

//Task 2
/*
    გვაქვს factory ობიექტი , რომელსაც აქვს რამდენიმე key-value წყვილი , 
    ასევე მეთოდი calculateWorkload - აბრუნებს მხოლოდ თანამშრომლის შესრულებული სამუშაოების მასივს (მაგალითის მიხედვით [40,25,28,30,31])
    და formatArray - რომელსაც გადაეცემა თანამშრომლის სახელი და აბრუნებს  ობიექტს თანამშრომლის სახელი  და ხელშეკრულების ამოწურვამდე
    დარჩენილი დროის მნშვნელობებით. ხელშეკრულების პერიოდი ყველა თანამშრომლისთვის არის 5 წელი. 
    მაგალითად ('John' ის შემთხვევაში დაგვიბრუნდება {name : "John", timeLeft : 4}) timeleft = 5 - timespent;
    გვაქვს 
    დალოგეთ calculateWorkload და formatArray შედეგები; 
    !!!აუცილებლად გამოიყენეთ bind მეთოდი
*/
let factory = {
     facName: "Volkswagen Wolfsburg Plant",
     calculateWorkload: function () {
       let arr = this.employeeWeeklyWorkload;
       let result = [];
       for (let i = 0; i < arr.length; i++) {
         result.push(arr[i].timeSpent);
       }
       return result;
     },
     formatArray: function (name) {
       let empArr = this.employees;
       let foundEmp = empArr.find((el) => el.name === name);
       let result = {
         name: foundEmp.name,
         timeLeft: 5 - foundEmp.timeSpent,
       };
       return result;
     },
   };
  
   let checkData = factory.calculateWorkload.bind(workloadData);
   console.log(checkData());
  
   let factoryEmployees = {
     employees: [
       { name: "John", timeSpent: 1 },
       { name: "Sam", timeSpent: 3 },
       { name: "Maria", timeSpent: 2 },
       { name: "Dan", timeSpent: 4 },
       { name: "Lorelai", timeSpent: 5 },
     ],
   };
  
   const res = factory.formatArray.bind(factoryEmployees, "John")();
   console.log(res);
   let workloadData = {
     employeeWeeklyWorkload: [
       { name: "John", timeSpent: 40 },
       { name: "Sam", timeSpent: 25 },
       { name: "Maria", timeSpent: 28 },
       { name: "Dan", timeSpent: 30 },
       { name: "Lorelai", timeSpent: 31 },
    ],
 };
  // employeeNum: this.employees.length,


//Task 3

/*
დაწერეთ ფუნქცია sumOfNumbers , რომელიც დააბრუნებს გადაცემული არგუმენტების ჯამს
აღნიშნული ფუნქცია გაუშვით applyს საშუალებით, შესაბამისად არგუმენტებიც applyს მეშვეობით უნდა გადაცეთ.

hint :  თუ კი ფუნქციაში არ გვაქვს this ქივორდის საჭიროება და შესაბამისად ობიექტი რომელსაც
thisმა უნდა მიუთითოს შეგიძლიათ apply call-ს პირველი არგუმენტად გადასცეთ null 


*/

//Task 4
/*
დაწერეთ რეკურსიული ფუნქცია checkIfEven(n) . აბრუნებს გადაცემული მნიშვნელობა
არის თუ არა ლუწი . აუცილებლად გამოიყენეთ რეკურსია

*/
function checkIfEven(n){
  if(n % 2 == 0){return "luwia"}
  else{return "kentia"}
}
console.log(checkIfEven(11))


