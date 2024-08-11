/*
Template Name: ShopGrids - Bootstrap 5 eCommerce HTML Template.
Author: GrayGrids
*/

(function () {
    //===== Prealoder

    window.onload = function () {
        window.setTimeout(fadeout, 500);
    }

    function fadeout() {
        document.querySelector('.preloader').style.opacity = '0';
        document.querySelector('.preloader').style.display = 'none';
    }


    /*=====================================
    Sticky
    ======================================= */
    window.onscroll = function () {
        var header_navbar = document.querySelector(".navbar-area");
        var sticky = header_navbar.offsetTop;

        // show or hide the back-top-top button
        var backToTo = document.querySelector(".scroll-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTo.style.display = "flex";
        } else {
            backToTo.style.display = "none";
        }
    };

    //===== mobile-menu-btn
    let navbarToggler = document.querySelector(".mobile-menu-btn");
    navbarToggler.addEventListener('click', function () {
        navbarToggler.classList.toggle("active");
    });

    // Lưu trữ và đọc dữ liệu bộ nhớ cục bộ 
    localStorage.setItem(key, value);
    let lastname = localStorage.getItem(key);

    document.getElementById('link1').addEventListener('click', function() {
        // Tìm vị trí của phần bảng giá
        var bangGia = document.getElementById('bang-gia');
        var position = bangGia.offsetTop;
    
        // Cuộn đến vị trí của phần bảng giá
        window.scrollTo({
            top: position,
            behavior: 'smooth'
        });
    });
    document.getElementById('link2').addEventListener('click', function() {
        // Tìm vị trí của phần thông tin & tin tức
        var thongTinTinTuc = document.getElementById('thong-tin-tin-tuc');
        var position = thongTinTinTuc.offsetTop;
    
        // Cuộn đến vị trí của phần thông tin & tin tức
        window.scrollTo({
            top: position,
            behavior: 'smooth'
        });
    });
    

})();
