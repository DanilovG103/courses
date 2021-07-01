const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length
const mainSlideHeight = document.querySelector('.container').clientHeight
let activeSlideIndex = 0

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

upBtn.addEventListener('click' ,() => {
    changeSlide('up')
})

downBtn.addEventListener('click' ,() => {
    changeSlide('down')
})

function changeSlide(prop) {
    if (prop === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0
        }
    }else if (prop === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
        }
    }

    mainSlide.style.transform = `translateY(-${activeSlideIndex * mainSlideHeight}px)`

    sidebar.style.transform = `translateY(${activeSlideIndex * mainSlideHeight}px)`
}