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
    this.bindEvents();
  }

  // 별점을 고정된 상태로 만들어 줌
  lockedStarPoint() {
    this.lockedStarPoint = true;
  }

  // 별점을 고정되지 않은 상태로 남들어 줌
  unlockStarPoint() {
    this.lockedStarPoint = false;
  }

  // 별정 상태 조회
  isLockedStarPoint() {
    return this.lockedStarPoint;
  }

  bindEvents() {
    this.starBackgroundElement.addEventListener("mousemove", (event) => {
      // 별점 고정되어 있으면 이벤트 중지
      if (this.isLockedStarPoint()) {
        return;
      }

      const { target, offsetX: currentUserPoint } = event; // offsetX: 타겟 요소에서의 마우스 포인터의 X축 위치를 반환
      const { point } = target.dataset;
      const starPointIndex = parseInt(point, 10) - 1;
      const [starimageClientRect] = target.getClientRects(); //요소의 좌표와 크기에 대한 정보를 반환
      const starImageWidth = starimageClientRect.width;
      const isOverHalf = starImageWidth / 2 < currentUserPoint; // 마우스 포인터의 위치가 별점 중간을 넘어서면 true 아니면 false
    });
  }
}

export default StarPoint;
