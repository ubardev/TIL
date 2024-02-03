(function () {
  const houseElem = document.querySelector(".house");
  let maxScrollValue;

  function resizeHandler() {
    maxScrollValue = document.body.offsetHeight - this.window.innerHeight;
  }

  window.addEventListener("scroll", function () {
    const zMove = (this.pageYOffset / maxScrollValue) * 980 - 490;
    houseElem.style.transform = `translateZ(${zMove}vw)`;
  });

  window.addEventListener("resize", resizeHandler);
  resizeHandler();
})();
