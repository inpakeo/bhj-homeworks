const cookie = document.getElementById("cookie");
const clickCounter = document.getElementById("clicker__counter");
let counter = 0;

cookie.addEventListener("click", () => {
    counter++;
    clickCounter.textContent = counter;

    if (counter % 2 === 0) {
        cookie.style.width = "200px";
        cookie.style.height = "128px";
    } else {
        cookie.style.width = "400px";
        cookie.style.height = "256px";
    }
});
