let todoList = [];

// thêm công việc mới
function addTask(task) {
    todoList.push({ task: task, completed: false });
}

// cập nhật trạng thái hoàn thành của công việc
function updateTask(index, completed) {
    if (index >= 0 && index < todoList.length) {
        todoList[index].completed = completed;
    } else {
        console.log("Công việc không tồn tại");
    }
}

// xóa công việc
function deleteTask(index) {
    if (index >= 0 && index < todoList.length) {
        todoList.splice(index, 1);
    } else {
        console.log("Công việc không tồn tại");
    }
}

// hiển thị danh sách công việc
function displayTasks() {
    console.log("Danh sách công việc:");
    todoList.forEach((item, index) => {
        console.log(`${index + 1}. ${item.task} [${item.completed ? "Hoàn thành" : "Chưa hoàn thành"}]`);
    });
}