const button = document.querySelector(".button");
const portfolio = document.querySelector(".portfolio-block");

/* провіряєм чи є */
if (button) {
    /* собитіє клік */
    button.addEventListener("click", function (e) {
        /* добавляєм клас */
        button.classList.toggle('_active');
        portfolio.classList.toggle('_active');

    });
}