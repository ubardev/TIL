class Shuffling {
  constructor() {
    this.data = [
      "피카츄",
      "꼬부기",
      "리자몽",
      "푸린",
      "파이리",
      "이브이",
      "피츄",
      "라이츄",
      "뮤",
      "이상해씨",
    ];
    this.parent = document.querySelector(".list-card");
  }

  setup() {
    this.shufflingCards();
  }

  shufflingCards() {
    let dataDouble = this.data.concat(this.data);

    while (dataDouble.length > 0) {
      const randomNum = Math.floor(Math.random() * dataDouble.length);
      if (dataDouble[randomNum]) {
        this.generateCards(dataDouble[randomNum]);
        dataDouble.splice(randomNum, 1); //사용한 데이터를 배열에서 삭제
      }
    }
  }

  generateCards(item) {
    const element = document.createElement("li");
    element.classList.add(item);
    element.dataset.name = item;
    this.parent.appendChild(element);
  }
}

export default Shuffling;
