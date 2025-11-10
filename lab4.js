// const numbers = [1, 2, 3, 4, 5];

// const [, second, , four] = numbers;
// console.log(second, four);

// Array Destructuring
// Bài tập Array Destructuring
// Bài 1: Viết hàm trả về phần tử đầu tiên và cuối cùng của mảng
function getFirstLast(array) {
if (array.length === 0) return []; 
  const [first, ...rest] = array; 
  const last = rest[rest.length - 1]; 
  return [first, last];
}
console.log(getFirstLast([1, 2, 3, 4])); // [1, 4]


// Bài 2: Hoán đổi vị trí phần tử thứ 2 và thứ 4 trong mảng
function swapElements(arr) {
  const result = [...arr];
    [result[1], result[3]] = [result[3], result[1]];
    return result;
}

console.log(swapElements([1, 2, 3, 4, 5])); // [1, 4, 3, 2, 5]


// Object Destructuring
// Bài tập Object Destructuring
// Bài 1: Viết hàm extract thông tin user

const user = {
  id: 1,
  personalInfo: {
    name: "javascript",
    contact: {
      email: "javascript@email.com",
      phone: "123-456-7890",
    },
  },
};

function getUserInfo(user) {
    const {
        personalInfo: {name, contact:{email}},
    } = user;
    return {name, email};
}

console.log(getUserInfo(user));
// { name: 'javascript', email: 'javascript@email.com' }



// Bài 2: Viết hàm với tham số mặc định

function createProduct({ name, price, category = "general", inStock = true }) {
  return { name, price, category, inStock };
}

const product = createProduct({ name: "Laptop", price: 15000000 });
console.log(product);
// { name: 'Laptop', price: 999, category: 'general', inStock: true }