document.addEventListener('DOMContentLoaded', () => {
    const navMenu = document.getElementById('nav-menu');
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenu = document.getElementById('close-menu');

    const banner = document.getElementById('banner');
    /*
    const closeBanner = document.getElementById('banner-close');*/

    const capiMenu = document.getElementById('capi-menu');
    const capiToggle = document.getElementById('capi-toggle');
    const capiToggle_1 = document.getElementById('capi-toggle_1');
    const capiClose = document.getElementById('capi-close');


    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    closeMenu.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });

    /*
    closeBanner.addEventListener('click', function() {
        banner.style.display = "none";
    });
    */

    capiToggle.addEventListener('click', () => {
        capiMenu.classList.toggle('active');
    });

    capiToggle_1.addEventListener('click', () => {
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
