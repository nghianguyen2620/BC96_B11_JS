// document.querySelector("button").onclick = function () {
//   alert("Bạn vừa bấm đăng nhập");
// };

// console.log(1 + 1);
// console.log("2");
// console.error("Đây là lỗi");
// console.info("Đây là thông tin");
// console.warn("Đây là cảnh báo");

// let students = ["Nguyễn Văn A", "Trần Thị B", "Lê Văn C"];
// console.table(students);

// // biến trong js
// // let ten_bien = giatri;
// let age = 25;
// console.log(age);
// // nối chuỗi
// console.log("Tuổi của tôi là: " + age);
// // thay đổi giá trị của biến
// age = 30;
// console.log("Tuổi của tôi sau khi thay đổi là: " + age);

// const soPi = 3.14;
// // soPi = 3.14159; // const là hằng số, không thể thay đổi giá trị
// console.log(soPi);

// var tuoi = 10;
// console.log(tuoi);
// var tuoi = "hello";
// console.log(tuoi);

// // Quy tắc đặt tên biến trong JavaScript
// // 1. Tên biến phải bắt đầu bằng chữ cái, dấu gạch dưới (_) hoặc dấu đô la ($).
// // 2. Tên biến không được bắt đầu bằng số.
// // 3. Tên biến không được chứa khoảng trắng.
// // 4. Tên biến không được trùng với từ khóa của JavaScript. VD: let, const, var, function, if, else, switch, case, ...
// // 5. Không chứa ký tự đặc biệt.

// // Quy ước đặt tên biến trong JavaScript
// // 1. Tên biến nên có ý nghĩa và dễ hiểu.
// // 2. Sử dụng camelCase: Ví dụ: tenBien, tuoiHienTai, soLuongSanPham.
// // 3. Sử dụng PascalCase cho tên lớp: Ví dụ: NhanVien, SanPham, KhachHang.
// // 4. Sử dụng snake_case cho hằng số: Ví dụ: MAX_LENGTH, MIN_VALUE, DEFAULT_COLOR.
// // 5. Không đặt trùng tên biến.

// // Cho nhập vào tên và log ra tên người đó
// // let yourName = prompt("Nhập vào tên của bạn: ", "Tên của bạn là: ");
// // console.log(yourName);

// // Yêu cầu nhập cạnh hình vuông -> tính diện tích hình vuông
// // let canh = prompt("Nhập vào cạnh hình vuông: ");
// // console.log("Diện tích hình vuông là: " + canh * canh);

// console.log("================ Toán tử số học ================");
// let a = 10;
// let b = 20;

// let tong = a + b;
// let hieu = a - b;
// let tich = a * b;
// let thuong = a / b;
// let mod = a % b; // Phép chia lấy dư. Ex: 7 % 3 = 1
// console.log("a + b = ", a + b);
// console.log("a - b = ", hieu);
// console.log("a * b = " + tich);
// console.log("a / b = " + thuong);
// console.log("a % b = " + mod);

// console.log("================ Ép kiểu ================");

// // let so1 = prompt("Nhập số 1: ");
// // let so2 = prompt("Nhập số 2: ");
// // console.log(so1 + so2); // nối chuỗi "10" + "20" = "1020"

// // console.log(Number(so1) + Number(so2)); // 10 + 20 = 30

// // console.log(Number(prompt("Nhập số 1: ")) + Number(prompt("Nhập số 2: "))); // 10 + 20 = 30

// console.log(parseInt("123")); // 123 - màu xanh
// console.log(parseInt("123abc")); // 123 - màu xanh
// console.log(parseInt("19.6")); // 19 - màu xanh
// console.log(parseFloat("19.6")); // 19.6 - màu xanh
// console.log(Number("19.6")); // sẽ đưa về số chính xác

// console.log(Number("100")); // 100
// console.log(Number("100abc")); // NaN: not a number
// console.log(parseInt("100abc")); // 100

// // chuỗi: string
// // số: number
// // boolean: true/false
// // undefined: không xác định, chưa được gán giá trị
// // null: hiện tại không có giá trị

// // typeof: kiểm tra kiểu dữ liệu của biến
// console.log(typeof 123); // number
// let bien1 = "hello";
// console.log(typeof bien1); // string
// console.log(typeof "hello"); // string
// console.log(typeof "123"); // string
// console.log(typeof true); // boolean
// console.log(typeof 19.8); // number
// console.log(typeof undefined); // undefined
// console.log(typeof null); // object là lỗi của js, nhưng vẫn là null

// // Nối chuỗi
// // + :
// // `` : template string
// let hoTen = "Nguyễn Văn A";
// let tuoi1 = 25;
// let ngheNghiep = "Lập trình viên";
// console.log(
//   "Họ tên: " + hoTen + ", Tuổi: " + tuoi1 + ", Nghề nghiệp: " + ngheNghiep,
// );
// console.log(`Họ tên: ${hoTen}, Tuổi: ${tuoi1}, Nghề nghiệp: ${ngheNghiep}`);

// // MATH

// console.log(Math.PI); // 3.141592653589793
// console.log(Math.floor(9.9)); // 9: làm tròn xuống
// console.log(Math.ceil(9.1)); // 10: làm tròn lên
// console.log(Math.round(9.5)); // 10: làm tròn gần nhất
// console.log(Math.round(9.4)); // 9: làm tròn gần nhất
// console.log(Math.sqrt(9)); // 3: căn bậc 2
// console.log(Math.pow(2, 3)); // 8: 2 mũ 3
// console.log(Math.floor(Math.random() * 100)); // random số từ 0 đến 99
// // Math.random(): random số từ 0 đến ~1
// // Math.random() * 100: random số từ 0 đến ~100

// console.log("=============== Toán tử gán ================");
// // Toán tử gán: =, +=, -=, *=, /=, %=
// let x = 8;
// x += 2; // x = x + 2 => x = 10
// console.log(x);
// x -= 3; // x = x - 3 => x = 7
// console.log(x);
// x *= 4; // x = x * 4 => x = 28
// console.log(x);
// x /= 2; // x = x / 2 => x = 14
// console.log(x);
// x %= 3; // x = x % 3 => x = 2
// console.log(x);

// console.log("=============== Toán tử tăng giảm ================");
// // ++, --
// let y = 5;
// let z = 10;

// // Hậu tố: y++ , y--
// // tăng sau : dùng trước rồi mới tăng/giảm
// // Tiền tố: ++y , --y
// // tăng trước : tăng/giảm rồi mới dùng

// console.log("👉 y", y);
// console.log("👉 y++", y++); // y vẫn đang là cũ - 5
// console.log("👉 y", y); // 6

// console.log("👉 y--", y--); // y vẫn đang là cũ - 6
// console.log("👉 y", y); // 5

// console.log("👉 z", z); //10
// console.log("👉 ++z", ++z); // 11
// console.log("👉 z", z); // 11
// console.log("👉 --z", --z); // 10

// CÂU 1

let m = 10,
  n = 20;
n = m++ * 2 - n-- + --m;
console.log(n);

// Câu 2
// tạo biến và kiểm tra xem giá trị nhận được
// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// c = a++ + b-- - --c + ++d; // Đáp án ?

// // 5 + 10 - 14 + 21 = 22 => c=22 , a= 6, b=9, d=21
// console.log("👉 c", c);

// a = b + 10 - c-- + d++; // Đáp án ?
// // 9 + 10 - 22 + 21 = 18 , a = 18, b = 9, c = 21, d = 22
// console.log("👉 a", a);

// let tong = a++ + b-- - --c + ++d; // Đáp án ?
// //          18 + 9 - 20 + 23  = 30

// console.log("👉 tong", tong);

// câu 3
// tạo biến và kiểm tra xem giá trị nhận được
// let a = 5;
// let b = 6;

// a = b++ + 3; // 6 + 3 = 9, a=9, b=7
// b = --b + ++a; // 6 + 10 = 16 , a=10, b =16
// let c = 2 * a + ++b; // 20 + 17 = 37 , c= 37, a=10, b= 17
// b = 2 * ++c - a++; // 2 * 38 - 10 = 66 , a  =11, b=66, c= 38

//câu 4// tạo biến và kiểm tra xem giá trị nhận được
// let a = 3;
// let b = 1;

// a -= b; // a = a - b  = 2
// console.log("👉 a", a);

// b = --b + --a; // 0 + 1 = 1

// console.log("👉 b", b);

// TÍNH LƯƠNG
// input: số ngày làm, lương 1 ngày
let soNgayLam = Number(prompt("Nhập số ngày làm:"));
let luong1Ngay = Number(prompt("Nhập lương 1 ngày:"));
// process: luong = soNgayLam * luong1Ngay
let luong = soNgayLam * luong1Ngay;
// output: lương
console.log(
  `Lương của bạn khi làm ${soNgayLam} ngày là: ${luong.toLocaleString()} VNĐ`,
);
