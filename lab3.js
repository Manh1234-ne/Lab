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

// Spread Operator
// Với mảng
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]
// Với object
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 }; // {a: 1, b: 2, c: 3, d: 4}

// Ghi đè thuộc tính
const baseConfig = { theme: "dark", language: "en" };
const userConfig = { theme: "light", fontSize: 14 };
const finalConfig = { ...baseConfig, ...userConfig }; // {theme: "light", language: "en", fontSize: 14}


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




// Bài 3: Rest và Spread
function mergeArrays(...arrays) {
  return arrays.flat();
}
console.log(mergeArrays([1, 2], [3, 4], [5]));


function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sumAll(1, 2, 3, 4, 5));


function createProduct(name = "Unknown Product", price = 0, quantity = 0) {
  return { name, price, quantity };
}
console.log(createProduct("Laptop", 1000, 2));
console.log(createProduct());



// Bài 4: Ứng dụng thực tế
function shoppingCart(customerName, ...products) {
  return {
    customerName,     // tên khách hàng
    products,         // danh sách sản phẩm
    totalItems: products.length,  // tổng số sản phẩm
  };
}
console.log(
  shoppingCart(
    "Nguyen Van A",
    { name: "Laptop", price: 1500 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 75 }
  )
);
