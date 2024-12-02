// Hàm để thay đổi loại trường mật khẩu giữa 'password' và 'text'
function togglePassword() {
    var passwordField = document.querySelectorAll("input[type='password']");
    
    // Lặp qua tất cả các trường mật khẩu và thay đổi loại
    passwordField.forEach(function(field) {
        if (field.type === "password") {
            field.type = "text";
        } else {
            field.type = "password";
        }
    });
}
