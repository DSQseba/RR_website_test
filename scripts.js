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

    //FOOTER

    const email = document.getElementById('email');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                email.classList.add('visible');
            } else {
                email.classList.remove('visible');
            }
        });
    });

    observer.observe(email);


    //GALLERY

    const galleryContainer = document.querySelector('.gallery-container');
    const galleryControlsContainer = document.querySelector('.gallery-controls');
    const galleryControls = ['previous', 'next'];
    const galleryNext = document.getElementById('next-new');
    const galleryPrev = document.getElementById('prev-new');
    const galleryItems = document.querySelectorAll('.gallery-item');

    class Carousel {
        
        constructor(container, items, controls){
            this.carouselContainer = container;
            this.carouselControls = controls;
            this.carouselArray = [...items];
        }

        updateGallery(){
            this.carouselArray.forEach(el => {
                el.classList.remove('gallery-item-1');
                el.classList.remove('gallery-item-2');
                el.classList.remove('gallery-item-3');
                el.classList.remove('gallery-item-4');
                el.classList.remove('gallery-item-5');
            });
    
            this.carouselArray.slice(0, 5).forEach((el, i) => {
                el.classList.add(`gallery-item-${i+1}`)
            });
        }
    
        setCurrentState(direction){
            if(direction === 'previous'){
                this.carouselArray.unshift(this.carouselArray.pop());
            }else{
                this.carouselArray.push(this.carouselArray.shift());
            }
            this.updateGallery();
        }

        useControls() {
            galleryNext.addEventListener('click', e => {
                e.preventDefault();
                this.setCurrentState('next');
            });
    
            galleryPrev.addEventListener('click', e => {
                e.preventDefault();
                this.setCurrentState('previous');
            });
        }

    }

    const exampleCarousel = new Carousel(galleryContainer, galleryItems);

    exampleCarousel.updateGallery();
    exampleCarousel.useControls();

});
