function Character(info) {
  this.mainElem = document.createElement("div");
  this.mainElem.classList.add("character");
  this.mainElem.innerHTML = `
          <div class="character-face-con character-head">
            <div class="character-face character-head-face face-front"></div>
            <div class="character-face character-head-face face-back"></div>
          </div>
          <div class="character-face-con character-torso">
            <div class="character-face character-torso-face face-front"></div>
            <div class="character-face character-torso-face face-back"></div>
          </div>
          <div class="character-face-con character-arm character-arm-right">
            <div class="character-face character-arm-face face-front"></div>
            <div class="character-face character-arm-face face-back"></div>
          </div>
          <div class="character-face-con character-arm character-arm-left">
            <div class="character-face character-arm-face face-front"></div>
            <div class="character-face character-arm-face face-back"></div>
          </div>
          <div class="character-face-con character-leg character-leg-right">
            <div class="character-face character-leg-face face-front"></div>
            <div class="character-face character-leg-face face-back"></div>
          </div>
          <div class="character-face-con character-leg character-leg-left">
            <div class="character-face character-leg-face face-front"></div>
            <div class="character-face character-leg-face face-back"></div>
          </div>
  `;
  document.querySelector(".stage").appendChild(this.mainElem);

  this.mainElem.style.left = info.xPos + "%";
  // 스크롤 중인지 아닌지 체크
  this.scrollState = false;
  this.init();
}

Character.prototype = {
  constructor: Character,
  init: function () {
    const self = this;

    window.addEventListener("scroll", function () {
      this.clearTimeout(self.scrollState);

      if (!self.scrollState) {
        self.mainElem.classList.add("running");
      }

      self.scrollState = setTimeout(function () {
        self.scrollState = false;
        self.mainElem.classList.remove("running");
      }, 500);
    });
  },
};
