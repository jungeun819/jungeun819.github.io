const slides = document.querySelector(".slides"),
      slide = document.querySelectorAll(".slides li");
      slideCount = slide.length;
let currentIdx = 0,
    prevBtn = document.querySelector(".prev"),
    nextBtn = document.querySelector(".next");

const moveSlide = (num) => {
    slides.style.left = -num * 330 + 'px';
    currentIdx = num;
}

nextBtn.addEventListener('click', () => {
    if(currentIdx < slideCount - 3){
        moveSlide(currentIdx + 1);
        // console.log(currentIdx);
    }
    else {
        moveSlide(0);
    }
});

prevBtn.addEventListener('click', () => {
    if(currentIdx > 0){
        moveSlide(currentIdx - 1);
    }
    else {
        moveSlide(slideCount - 3);
    }
});

/**
 * 팝업
 */
const popup = document.querySelectorAll(".movie-contanier");
const trig = document.querySelectorAll(".trigger");
const close_button = document.querySelectorAll(".close-button");

console.log(popup);

function showContents(index) {
    popup[index].classList.toggle("show-modal");
}

trig.forEach((el, idx) => {
    el.onclick = () => {
        let trigger = trig[idx];
        console.log(idx);
        console.log(trigger);
        trigger.addEventListener("click" , showContents(idx-1));
    };
});

close_button.forEach((el, idx) => {
    el.onclick = () => {
        const promise = new Promise((resolve, reject) => {
            resolve(idx);
        });

        promise
            .then((value) => {
                // let trigger = trig[value];
                close_button.addEventListener("click", showContents(idx)); // Uncaught (in promise) TypeError: closeButton.addEventListener is not a function
                                                                         // 실행은 되는데 왜 오류가 나는걸까?
            });
    };
});




   



