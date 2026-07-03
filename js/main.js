document.querySelector("button").onclick = function () {
  alert("Bạn vừa bấm đăng nhập");
};

console.log(1 + 1);
console.log("2");
console.error("Đây là lỗi");
console.info("Đây là thông tin");
console.warn("Đây là cảnh báo");

let students = ["Nguyễn Văn A", "Trần Thị B", "Lê Văn C"];
console.table(students);

// biến trong js
// let ten_bien = giatri;
let age = 25;
console.log(age);
// nối chuỗi
console.log("Tuổi của tôi là: " + age);
// thay đổi giá trị của biến
age = 30;
console.log("Tuổi của tôi sau khi thay đổi là: " + age);

const soPi = 3.14;
// soPi = 3.14159; // const là hằng số, không thể thay đổi giá trị
console.log(soPi);

var tuoi = 10;
console.log(tuoi);
var tuoi = "hello";
console.log(tuoi);

// Quy tắc đặt tên biến trong JavaScript
// 1. Tên biến phải bắt đầu bằng chữ cái, dấu gạch dưới (_) hoặc dấu đô la ($).
// 2. Tên biến không được bắt đầu bằng số.
// 3. Tên biến không được chứa khoảng trắng.
// 4. Tên biến không được trùng với từ khóa của JavaScript. VD: let, const, var, function, if, else, switch, case, ...
// 5. Không chứa ký tự đặc biệt.

// Quy ước đặt tên biến trong JavaScript
// 1. Tên biến nên có ý nghĩa và dễ hiểu.
// 2. Sử dụng camelCase: Ví dụ: tenBien, tuoiHienTai, soLuongSanPham.
// 3. Sử dụng PascalCase cho tên lớp: Ví dụ: NhanVien, SanPham, KhachHang.
// 4. Sử dụng snake_case cho hằng số: Ví dụ: MAX_LENGTH, MIN_VALUE, DEFAULT_COLOR.
// 5. Không đặt trùng tên biến.

// Cho nhập vào tên và log ra tên người đó
// let yourName = prompt("Nhập vào tên của bạn: ", "Tên của bạn là: ");
// console.log(yourName);

// Yêu cầu nhập cạnh hình vuông -> tính diện tích hình vuông
// let canh = prompt("Nhập vào cạnh hình vuông: ");
// console.log("Diện tích hình vuông là: " + canh * canh);
