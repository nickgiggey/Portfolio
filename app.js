// ------------------------------------------Button--------------------------------------------
const toTopButton = document.querySelector("#top-button");
toTopButton.addEventListener("click", toTop);

function toTop() {
    window.scrollTo(0, 0);
}
// --------------------------------------------End---------------------------------------------
// ----------------------------------------FingerCiser-----------------------------------------
const calorieCounter = document.querySelector(".treadmill");
calorieCounter.addEventListener("scroll", scrollTop);
let count = 0;
function scrollTop() {
    count++;
    document.getElementById("progress").innerText = count;
};
// --------------------------------------------End---------------------------------------------
