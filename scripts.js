document.addEventListener('DOMContentLoaded', () => {
    
    const threshold = 100;
    const title = document.getElementById('title');
    const siteTitle = document.getElementById('site-title')
    const desktopMenu = document.getElementById('desktop-menu');

    const menuToggle = document.getElementById('menu-toggle');
    window.addEventListener("scroll", function() {
        if (window.scrollY > threshold) {
            title.classList.add("title-shrink");
            siteTitle.classList.add("site-title-shrink");
            desktopMenu.classList.add("desktop-menu-shrink");
            menuToggle.classList.add("menu-toggle-shrink");
        } else {
            title.classList.remove("title-shrink");
            desktopMenu.classList.remove("desktop-menu-shrink");
            siteTitle.classList.remove("site-title-shrink");
            menuToggle.classList.remove("menu-toggle-shrink");
        }
    });
    
    const navMenu = document.getElementById('nav-menu');
    const closeMenu = document.getElementById('close-menu');

    const banner = document.getElementById('banner');
    /*
    const closeBanner = document.getElementById('banner-close');*/

    const capiMenu = document.getElementById('capi-menu');
    const capiToggle = document.getElementById('capi-toggle');
    const capiClose = document.getElementById('capi-close');

    /*
    closeBanner.addEventListener('click', function() {
        banner.style.display = "none";
    });
    */

    menuToggle.addEventListener('click', () => {
        capiMenu.classList.toggle('active');
    });

    capiToggle.addEventListener('click', () => {
        capiMenu.classList.toggle('active');
    });

    capiClose.addEventListener('click', () => {
        capiMenu.classList.remove('active');
    });

    const sizeButtons = document.querySelectorAll(".size-btn");

    sizeButtons.forEach(button => {
        button.addEventListener("click", function() {
            sizeButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
        });
    });

    const addToCartButton = document.querySelectorAll(".add-to-cart");
    
    addToCartButton.forEach(button => {
        button.addEventListener("click", function() {
            //alert("Item added to cart!");
            //add the item to the cart
        });
    });

});
