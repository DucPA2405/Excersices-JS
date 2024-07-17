function createObject(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let key = arr[i][0];
    let value = arr[i][1];
    obj[key] = value;
  }

  return obj;
}

// Ví dụ:
let array = [
  ["NguyenVanA", 20],
  ["NguyenVanB", 22],
  ["NguyenVanC", 30],
];

let result = createObject(array);
console.log(result);
