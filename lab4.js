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
    personalInfo: { name, contact: { email } },
  } = user;
  return { name, email };
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


// Promises
// Bài tập Promises
// Bài 1: Viết hàm delay trả về Promise
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

delay(2000).then(() => console.log("2 seconds passed"));



// Bài 2: fetchMultipleData
async function fetchMultipleData(urls) {
  // Tạo mảng các Promise từ fetch
  const promises = urls.map(async (url) => {
    const res = await fetch(url);
    return res.json();
  });

  // Chờ tất cả Promise hoàn thành
  const results = await Promise.all(promises);
  return results;
}

// Gọi hàm với mock API thật
(async () => {
  const users = await fetchMultipleData([
    "https://jsonplaceholder.typicode.com/users/1",
    "https://jsonplaceholder.typicode.com/users/2"
  ]);
  console.log("Users from API:", users);
})();




// Bài 1: processOrder (Async/Await)
// Mock các hàm getOrder, getUser, getProducts trả về Promise
function getOrder(orderId) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id: orderId, userId: 1, productIds: [101, 102] });
    }, 500);
  });
}

function getUser(userId) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id: userId, name: "John Doe" });
    }, 500);
  });
}

function getProducts(productIds) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(productIds.map(id => ({ id, name: `Product ${id}` })));
    }, 500);
  });
}

// Viết lại processOrder dùng async/await
async function processOrderAsync(orderId) {
  const order = await getOrder(orderId);
  const user = await getUser(order.userId);
  const products = await getProducts(order.productIds);

  return { order, user, products };
}

// Sử dụng
(async () => {
  const result = await processOrderAsync(123);
  console.log(result);
})();



// Bài 2: Xử lý lỗi với async/await
// Hàm safeApiCall: gọi API async và trả về kết quả hoặc lỗi
async function safeApiCall(apiFunction, ...args) {
  try {
    const result = await apiFunction(...args);
    return { success: true, data: result };
  } catch (error) {
    return { success: false, error: error.message || error };
  }
}

// Ví dụ sử dụng với mock API
async function fetchUser(id) {
  if (id <= 0) throw new Error("Invalid user ID");
  return { id, name: "John Doe" };
}

(async () => {
  const response1 = await safeApiCall(fetchUser, 1);
  console.log(response1); // { success: true, data: { id: 1, name: 'John Doe' } }

  const response2 = await safeApiCall(fetchUser, -5);
  console.log(response2); // { success: false, error: 'Invalid user ID' }
})();
