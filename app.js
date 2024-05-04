let weekArray = ['Sunday','Monday' , 'Tuesday','Wednesday','Thursday','Friday','Saturday'];
let MonthArray = ['January','Feburary','March','April','May','June','July','August','September','October','November','December'];

let now = new Date()

console.log(`${MonthArray[now.getMonth()]}-${now.getDate()}-${now.getFullYear()}`);
console.log(`${MonthArray[now.getMonth()]}/${now.getDate()}/${now.getFullYear()}`);
console.log(`${now.getDate()}/${MonthArray[now.getMonth()]}/${now.getFullYear()}`);
console.log(`${now.getDate()}-${MonthArray[now.getMonth()]}-${now.getFullYear()}`);

