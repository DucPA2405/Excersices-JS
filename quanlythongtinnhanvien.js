// Bước 1:
let staff = {
  id: 1,
  name: "Nguyen Van A",
  age: 30,
  salary: 10000000,
};

let company = [];
company.push(staff);
console.log(company);

// Bước 2:
// Biến để lưu thông tin nhập vào của người dùng
let newName = prompt("Nhập tên nhân viên mới:");
let newAge = prompt("Nhập tuổi nhân viên mới:");
let newSalary = prompt("Nhập lương nhân viên mới:");

// Chuyển đổi các giá trị nhập vào thành các kiểu dữ liệu phù hợp
newAge = parseInt(newAge);
newSalary = parseFloat(newSalary);

// Khởi tạo đối tượng newStaff
let newStaff = {
  id: company.length + 1,
  name: newName,
  age: newAge,
  salary: newSalary,
};

// Thêm newStaff vào mảng company
company.push(newStaff);

// Bước 3:
// Hàm để cập nhật thông tin nhân viên
function updateStaff(id) {
  // Tìm nhân viên theo id
  let staff = company.find((s) => s.id === id);

  if (staff) {
    // Nhập thông tin cập nhật
    let updatedName = prompt("Nhập tên mới:", staff.name);
    let updatedAge = prompt("Nhập tuổi mới:", staff.age);
    let updatedSalary = prompt("Nhập lương mới:", staff.salary);

    // Cập nhật thông tin nếu người dùng nhập giá trị mới
    if (updatedName !== "") {
      staff.name = updatedName;
    }
    if (updatedAge !== "") {
      staff.age = parseInt(updatedAge);
    }
    if (updatedSalary !== "") {
      staff.salary = parseFloat(updatedSalary);
    }
  } else {
    console.log("Nhân viên không tồn tại.");
  }
  // tìm vị trí index của nhân viên đó trong mảng “company”
  let findIndex = company.findIndex((s) => inputUpdate == s.id);
  company[findIndex].salary = updateSalary;

  console.log(company);
}

// Bước 4
// Hàm để xóa nhân viên
function deleteStaff(id) {
  // Tìm nhân viên theo id
  let index = company.findIndex((s) => s.id === id);

  if (index !== -1) {
    // Sử dụng splice để xóa nhân viên khỏi mảng
    company.splice(index, 1);
    console.log(`Đã xóa nhân viên có id: ${id}`);
  } else {
    console.log("Nhân viên không tồn tại.");
  }
  console.log(company);
}
