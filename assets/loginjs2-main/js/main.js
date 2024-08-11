document.getElementById("customerForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Ngăn chặn gửi form mặc định

  // Lấy giá trị từ các trường nhập liệu
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;

  // Gửi dữ liệu đến một API hoặc xử lý dữ liệu ở đây
  // Ở đây chúng ta sẽ chỉ hiển thị thông báo và chuyển hướng về trang chủ

  // Hiển thị thông báo thành công
  alert("Đăng ký thành công!");

  // Chuyển hướng về trang chủ
  window.location.href = "../../index.html";

  // Lưu trữ và đọc dữ liệu bộ nhớ cục bộ 
  window.localStorage
  localStorage.setItem(key, value);
  localStorage.setItem(email, value);
  localStorage.setItem(phone, value);
  let lastname = localStorage.getItem(name, email, phone);
});


