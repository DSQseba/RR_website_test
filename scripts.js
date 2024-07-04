document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('banner');
    /*
    const closeBanner = document.getElementById('banner-close');*/
    /*
    closeBanner.addEventListener('click', function() {
        banner.style.display = "none";
    });
    */

    //TITLE
    const threshold = 100;
    const title = document.getElementById('title');
    const siteTitle = document.getElementById('site-title')
    const desktopMenu = document.getElementById('desktop-menu');

    //MAIN MENU
    const mainMenu = document.getElementById('main-menu');
    const mainToggle = document.getElementById('main-toggle');
    const menuToggle = document.getElementById('menu-toggle');
    const mainClose = document.getElementById('main-menu-close');
    const menuShadow = document.getElementById('menu-shadow');

    //ESSENTIAL MENU
    const menuEssential = document.getElementById('essential-menu');
    const openEssential = document.getElementById('essential');
    const closeEssential = document.getElementById('essential-close');

    //TITLE
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


    //MAIN
    menuToggle.addEventListener('click', () => {
        mainMenu.classList.add('active');
        menuShadow.classList.add('active');
        menuEssential.classList.add('menu-follow-main');
    });

    mainToggle.addEventListener('click', () => {
        mainMenu.classList.add('active');
        menuShadow.classList.add('active');
        menuEssential.classList.add('menu-follow-main');
    });

    mainClose.addEventListener('click', () => {
        mainMenu.classList.remove('active');
        menuEssential.classList.remove('active');
        menuShadow.classList.remove('active');
        menuEssential.classList.remove('menu-follow-main');
    });

    //ESSENTIAL
    openEssential.addEventListener('click', () => {
        menuEssential.classList.add('active');
    });

    closeEssential.addEventListener('click', function() {
        menuEssential.classList.remove('active');
    });

    //CLOSE MENUS
    menuShadow.addEventListener('click', () => {
        mainMenu.classList.remove('active');
        menuEssential.classList.remove('active');
        menuShadow.classList.remove('active');
        menuEssential.classList.remove('menu-follow-main');
    });

    //PRODUCT HOME
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

    //LUOGHI

    const luoghiImageContainer = document.querySelector('.luoghi-image-container');
    const luoghiImage = document.querySelector('.luoghi-image');
    const luoghiTitle = document.querySelector('.luoghi-title');
    const luoghiText = document.querySelector('.luoghi-text');
    const luoghiButtonContainer = document.querySelector('.luoghi-button-container');

    let startScroll;
    let endScrollScale;
    let endScrollTrans;
    let luoghiHeight;
    
    function updateScrollPositions() {
        const luoghiRect = luoghiImageContainer.getBoundingClientRect();
        const scrollTop = window.scrollY;
        startScroll = scrollTop + luoghiRect.top - 44;
        luoghiHeight = window.innerHeight - 44;
        endScrollScale = startScroll + luoghiHeight/2;
        endScrollTrans = startScroll + luoghiHeight;
    }

    // Calculate scroll positions initially
    updateScrollPositions();

    // Update scroll positions on resize
    window.addEventListener('resize', updateScrollPositions);

    document.addEventListener('scroll', function() {
        const scrollTop = window.scrollY;

        if (scrollTop >= startScroll && scrollTop <= endScrollTrans) {
            // Calculate the scale and translate based on the scroll position
            const progress_t = (scrollTop - startScroll) / (endScrollTrans - startScroll);
            const progress_s = (scrollTop - startScroll) / (endScrollScale - startScroll);
            const translateY = progress_t * luoghiHeight;
            const scale = Math.min(0.9 + progress_s * 0.1 , 1.);
            luoghiImage.style.transform = `scale(${scale}) translateY(${translateY}px)`;

            if(scrollTop > endScrollScale){
                luoghiTitle.classList.add('move-and-fade');
                luoghiText.classList.add('move-and-fade');
                luoghiButtonContainer.classList.add('move-and-fade');
            } else {
                luoghiTitle.classList.remove('move-and-fade');
                luoghiText.classList.remove('move-and-fade');
                luoghiButtonContainer.classList.remove('move-and-fade');
            }

        } else if (scrollTop < startScroll) {
            luoghiImage.style.transform = `scale(0.9) translateY(0px)`;
        } else {
            luoghiImage.style.transform = `scale(1) translateY(${luoghiHeight}px)`;
        }

    });
});
