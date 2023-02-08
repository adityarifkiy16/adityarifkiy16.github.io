const myBody = document.querySelector("body");
var topBtn = document.querySelector(".topBtn");
let idleTime = 0;

// fungsi yang akan dipanggil ketika tombol top button di klik
function scrollToTop() {
  myBody.scrollIntoView({ behavior: "smooth" });
}

window.onscroll = function () {
  if ($(window).scrollTop() > 200) {
    $(topBtn).css("display", "block");
    idleTime = 0;
  } else {
    $(topBtn).css("display", "none");
  }
};

$(topBtn).click(function () {
  scrollToTop();
});

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
  if (idleTime > 4) {
    $(topBtn).css("display", "none");
  }
}, 1000);
