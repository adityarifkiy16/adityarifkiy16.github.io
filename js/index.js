const myBody = document.querySelector("body");
const topBtn = $(".topBtn");
const btn = $(".btn");

let idleTime = 0;

// fungsi yang akan dipanggil ketika tombol top button di klik
// function scrollToTop() {
//   myBody.scrollIntoView({ behavior: "smooth" });
// }

window.onscroll = function () {
  if ($(window).scrollTop() > 200) {
    topBtn.css("display", "block");
    idleTime = 0;
  } else if ($(window).scrollTop() == 0) {
    topBtn.css("display", "none");
  }
};

// apabila terdapat gerakan pada mouse atau keyboard maka idleTime akan reset
$(window).mousemove(() => {
  idleTime = 0;
});
$(window).keypress(() => {
  idleTime = 0;
});

// idle time akan bertambah 1 setiap 1 detik dan display button none
setInterval(() => {
  idleTime = idleTime + 1;
  if (idleTime > 7 || $(window).scrollTop() == 0) {
    topBtn.css("display", "none");
  } else if (idleTime == 0 || $(window).scrollTop() > 200) {
    topBtn.css("display", "block");
  }
}, 1000);

topBtn.on("click", () => {
  window.open(
    "https://api.whatsapp.com/send/?phone=6281390153602&text&type=phone_number&app_absent=0",
    "_blank"
  );
});

btn.on("click", () => {
  window.open(
    "https://api.whatsapp.com/send/?phone=6281390153602&text&type=phone_number&app_absent=0",
    "_blank"
  );
});
