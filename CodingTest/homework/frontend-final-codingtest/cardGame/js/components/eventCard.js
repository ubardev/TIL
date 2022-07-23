class EventCard {
  constructor() {
    this.cards = document.querySelector(".list-card");
    this.cardEl = [];
  }

  setup() {
    this.bindEvents();
  }

  bindEvents() {
    this.cards.addEventListener("click", (event) => {
      const elClicked = event.target;
      if ((elClicked.targetName = "LI")) {
        if (this.cardEl.length < 2 && this.cardEl[0] !== elClicked) {
          this.cardEl.push(elClicked);
          elClicked.classList.add("on");

          if (this.cardEl.length === 2) {
            setTimeout(() => {
              this.cardEl.forEach((item) => {
                // 같은 카드를 선택했을 경우
                if (
                  this.cardEl[0].dataset.name === this.cardEl[1].dataset.name
                ) {
                  item.style.visibility = "hidden";
                } else {
                  // 다른 카드를 선택했을 경우
                  item.classList.remove("on");
                }
              });
              this.cardEl.splice(0, 2);
            }, 500);
          }
        }
      }
    });
  }
}

export default EventCard;
