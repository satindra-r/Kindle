const button1 = document.getElementById("B1");
const button2 = document.getElementById("B2");
button1.addEventListener("click", function() {
    button2.innerHTML = 1-button2.innerHTML;
});
button2.addEventListener("click", function() {
    button1.innerHTML = 1-button1.innerHTML;
});