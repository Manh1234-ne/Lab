// // var - function scoped
// function varExample() {
//   if (true) {
//     var x = 10;
//   }
//   console.log(x); // 10 - vẫn truy cập được
// }

// varExample();



// Bài 1: Sửa lỗi scope 
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); // Đã in ra 0,1,2
  }, 100);
}
// Yêu cầu: Sửa để in ra 0,1,2



// Bài 2: Sử dụng const đúng cách
const student = {
  name: "ThuyTien",
  age: 20,
};
student.grade = "A";
student.age = 21;
console.log(student);

// Thực hiện các thao tác sau:
// 1. Thêm thuộc tính grade với giá trị "A"
// 2. Thay đổi tuổi thành 21
// 3. In ra toàn bộ thông tin student



// Template literals
// Bài 1: Tạo email template
const user = {
  firstName: "Nguyen",
  lastName: "Van A",
  product: "Laptop Dell XPS",
  price: 25000000,
  orderDate: "2024-01-15",
};

const emailTemplate = `Xin chào bạn ${user.firstName} ${user.lastName}, 
có đơn hàng ${user.product}, 
đơn hàng có giá ${user.price} VNĐ, 
được đặt vào ngày ${user.orderDate}`; // Viết template ở đây
 
console.log(emailTemplate);

//Bài 2: Tạo HTML template
const product = {
  name: "iPhone 15",
  price: 20000000,
  discount: 10,
  inStock: true,
};

const finalPrice = product.price * (1 - product.discount / 100);

const productCard = `Tên sp: ${product.name}, 
Giá ${product.price.toLocaleString()} VNĐ, 
Giảm giá ${product.discount}%, 
Giá sau giảm ${finalPrice.toLocaleString()} VNĐ, 
Tình trạng ${product.inStock ? "Còn" : "Hết"}`; // Viết template ở đây

console.log(productCard);




// Enhanced Object Literals
// Bài 1: Sử dụng property và method shorthand
// Viết lại object sau sử dụng ES6 enhanced object literals
const width = 100;
const height = 200;
const color = "red";

const rectangle = {
  width: width,
  height: height,
  color: color,
  calculateArea: function () {
    return this.width * this.height;
  },
  describe: function () {
    return `Rectangle ${this.width}x${this.height}, color: ${this.color}`;
  },
};