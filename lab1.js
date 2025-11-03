function calculateBMI(weight, height) {
    const bmi = weight / (height * height);

    let category;
    if (bmi < 18.5){
        category = "Thiếu cân"
    }else if(bmi >= 18.5 && bmi < 24.9){
        category = "Bình thường"
    }else if(bmi >= 25 && bmi < 29.9){
        category = "Thừa cân"
    }else if(bmi >= 30){
        category = "Béo phì"
    }
    return `BMI:  ${bmi.toFixed(2)}, Category: ${category}`;
}
console.log(calculateBMI(55, 1.70));


function createBook(title, author, year, price) {
  const discountPercentKey = "discountPercent";
  const formatPrice = (value) => value.toLocaleString("vi-VN"); 

  return {
    title,
    author,
    year,
    price,

    [discountPercentKey]: 0,

    getBookInfo() {
      return `📘 "${this.title}" của ${this.author} (${this.year}) — Giá: ${formatPrice(this.price)} VND`;
    },

    calculateDiscount: (discount) => {
      const newPrice = price * (1 - discount / 100);
      return `💰 Giá sau khi giảm ${discount}% là: ${formatPrice(newPrice)} VND`;
    },
  };
}

const book = createBook("JavaScript ES6", "John Doe", 2023, 200000);

console.log(book.getBookInfo());

console.log(book.calculateDiscount(15));
