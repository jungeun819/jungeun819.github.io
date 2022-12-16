const popup = document.querySelectorAll(".postIt");
const trig = document.querySelectorAll(".trig");

function showPostIt(index) {
    popup[index].classList.toggle("show-postit")
}

trig.forEach((el, idx) => {
    el.onclick = () => {
        let postIt = trig[idx];
        console.log(idx);
        console.log(postIt);
        postIt.addEventListener("click", showPostIt(idx));
    }
})
