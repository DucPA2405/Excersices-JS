function cloneObject(obj) {
  var clone = {};
  for (var i in obj) {
    if (obj[i] != null && typeof obj[i] == "object")
      clone[i] = cloneObject(obj[i]);
    else clone[i] = obj[i];
  }
  return clone;
}

// Cách sử dụng
const checkStaff = {
  debug: true,
  position: "Nhân viên",
  jobDetail: "Dev",
  data: {
    position: 1,
  },
};

const checkStaffAgain = cloneObject(checkStaff);
checkStaffAgain["debug"] = false;
checkStaffAgain["data"]["position"] = 2;
console.log(checkStaff);
