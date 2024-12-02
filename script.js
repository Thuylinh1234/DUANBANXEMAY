// Hàm để thay đổi loại trường mật khẩu giữa 'password' và 'text'
function togglePassword() {
    // Lấy phần tử input mật khẩu
    var passwordField = document.getElementById("password");
    
    // Kiểm tra xem trường mật khẩu hiện tại có phải là 'password' không
    if (passwordField.type === "password") {
        // Nếu là 'password', thay đổi thành 'text' để hiển thị mật khẩu
        passwordField.type = "text";
    } else {
        // Nếu không, thay đổi lại thành 'password' để ẩn mật khẩu
        passwordField.type = "password";
    }
}
