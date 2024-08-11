document.getElementById("registrationForm").addEventListener("submit", function(event){
    event.preventDefault(); // Ngăn chặn gửi form mặc định

    // Lấy dữ liệu từ form
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    // Gửi dữ liệu đến server bằng AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "process_registration.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Xử lý phản hồi từ server (nếu cần)
            console.log(xhr.responseText);
        }
    };
    xhr.send("name=" + name + "&email=" + email + "&phone=" + phone);
});
