// // Arrow function tương đương
// const sumArrow = (a, b) => {
//   return a + b;
// };
// // Arrow function rút gọn (khi chỉ có 1 biểu thức): rut gon function vaf return
// const sumShort = (a, b) => a + b;
// const displayFullName = (firstName, lastName) => `Ho ten: ${firstName} ${lastName}`;
// const sumAb = (a, b) => {
//     const a2 = a + b;
//     return a2 + b;
// };// Tong a vaf b, return
// // Trả về obj literal - cần đặt trongg ngoặc đơn
// const createUser = (name, age) => ({ name, age });
// // Sử dụng với array methods
// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map((num) => num * 2);
// const evens = numbers.filter((num) => num % 2 === 0);


// Bài tập
// Bài 1: Chuyển đổi hàm
// Function 1
const multiply = (a, b) => {
    return a * b;
}
console.log(multiply(2, 3)); // 6

// Function 2
const isPositive = (number) => {
    return number >= 0;
}
console.log(isPositive(5));

// Function 3
const getRandomNumber = () => {
    return Math.random();
}
console.log(getRandomNumber()); // random number between 0 and 1

// Function 4
const { JSDOM } = require("jsdom");
const dom = new JSDOM(`<!DOCTYPE html><p>Hello</p>`);
const document = dom.window.document;

document.addEventListener("click", () => {
    console.log("Clicked!");
});

// Mô phỏng một sự kiện click
document.dispatchEvent(new dom.window.Event("click"));



// Bài 2: Sử dụng Default Parameters
function createUser(name = "Anonymous", age = 18, isAdmin = false) {
  return { name, age, isAdmin };
}
console.log(createUser());