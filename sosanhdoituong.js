function isEqual(obj1, obj2) {
    // Kiểm tra xem cả hai đối tượng có cùng kiểu không
    if (typeof obj1 !== typeof obj2) {
        return false;
    }

    // Kiểm tra xem cả hai đối tượng có phải là null không
    if (obj1 === null || obj2 === null) {
        return obj1 === obj2;
    }


    // Kiểm tra số lượng thuộc tính của cả hai đối tượng
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    // Kiểm tra từng thuộc tính và giá trị tương ứng
    for (let key of keys1) {
        if (!keys2.includes(key) || !isEqual(obj1[key], obj2[key])) {
            return false;
        }
    }

    return true;
}

// Ví dụ :
let obj1 = {
    a: 1,
    b: {
        c: 2,
        d: 3
    }
};

let obj2 = {
    a: 1,
    b: {
        c: 2,
        d: 3
    }
};

let obj3 = {
    a: 1,
    b: {
        c: 2,
        d: 4
    }
};

console.log(isEqual(obj1, obj2)); // true
console.log(isEqual(obj1, obj3)); // false
