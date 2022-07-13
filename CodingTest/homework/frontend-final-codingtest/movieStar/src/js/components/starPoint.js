// 호버 상태에 따른 이미지 매핑 객체
const starImageSourceMap = {
  empty: "./src/images/icon_empty_star.png",
  half: "./src/images/icon_half_star.png",
  full: "./src/images/icon_star.png",
};

class StarPoint {
  constructor() {
    this.starContentElement = document.querySelector(".content-star");
    this.starBackgroundElement =
      this.starContentElement.querySelector(".star-background");
    this.starImages = this.starBackgroundElement.querySelectorAll("img");
    this.starPointResetButton =
      this.starContentElement.querySelector(".icon-remove-star");
    this.lockedStarPoint = false; // 별점이 고정되어 있는지 아닌지 상태를 알려주는 변수
  }

  setup() {
    this.bindEvent();
  }

  // 별점을 고정된 상태로 만들어 줌
  lockedStarPoint() {
    this.lockedStarPoint = true;
  }

  // 별점을 고정되지 않은 상태로 남들어 줌
  unlockStarPoint() {
    this.lockedStarPoint = false;
  }

  isLockedStarPoint() {
    return this.lockedStarPoint;
  }

  bindEvent() {}
}

export default StarPoint;
