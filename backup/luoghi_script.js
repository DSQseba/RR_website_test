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