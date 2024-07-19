function deepClone(obj) {
  // Nếu đối tượng không phải là object hoặc là null, không cần sao chép
  if (obj === null || typeof obj !== "object") {
    return obj;
  }


  // Tạo một bản sao mới của đối tượng
  let clone = {};


  // Lặp qua tất cả các thuộc tính của đối tượng
  for (let key in obj) {
    // Kiểm tra xem thuộc tính đó có phải là thuộc tính riêng của đối tượng hay không
    if (obj.hasOwnProperty(key)) {
      // Nếu là một đối tượng, gọi đệ quy để tạo ra một bản sao sâu
      if (typeof obj[key] === "object") {
        clone[key] = deepClone(obj[key]);
      } else {
        // Nếu là một giá trị nguyên thủy, sao chép giá trị đó sang bản sao mới
        clone[key] = obj[key];
      }
    }
  }


  // Trả về bản sao mới
  return clone;
}


const obj1 = { a: 1, b: 2, c: { d: 3 } };
const obj2 = deepClone(obj1);


obj2.c.d = 4;


console.log(obj1); // { a: 1, b: 2, c: { d: 3 } }
console.log(obj2); // { a: 1, b: 2, c: { d: 4 } }