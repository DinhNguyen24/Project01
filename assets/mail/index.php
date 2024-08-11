<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Customer Information Form</title>
  <link rel="stylesheet" href="./style/style_sign_in.css">
</head>
<body>
  <div class="container">
    <h1>Đăng Ký Thông Tin</h1>
    <form action="ttlexus.php" action="reg.php" method="post">
    <form id="customerForm">
      <label for="name">Tên:</label>
      <input type="text" id="name" name="name" placeholder="Your Name" required>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" placeholder="Your Email" required>
      <label for="phone">Số Điện Thoại:</label>
      <input type="tel" id="phone" name="phone" placeholder="Your Phone" required>
      <button type="submit" id="submitBtn">Submit</button>
    </form>
    </form>
    <div id="successMessage" class="hidden">
      <p>Thank you for your submission!</p>
      <a href="index.html">Back to Home</a>
    </div>
  </div>
  <script src="./js/main.js"></script>
</body>
</html>
