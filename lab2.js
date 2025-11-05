// // var - function scoped
// function varExample() {
//   if (true) {
//     var x = 10;
//   }
//   console.log(x); // 10 - vẫn truy cập được
// }

// varExample();



// Bài 1: Sửa lỗi scope 
// Sửa đoạn code sau để hoạt động đúng
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); // Đã in ra 0,1,2
  }, 100);
}
// Yêu cầu: Sửa để in ra 0,1,2



// Bài 2: Sử dụng const đúng cách
// Tạo một object student với const
// Thêm thuộc tính điểm và in ra
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