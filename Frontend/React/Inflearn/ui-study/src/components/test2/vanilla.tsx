import VanillaWrapper from "@/components/vanillaWrapper";
import { createElement } from "react";

const initiator = (wrapper: HTMLDivElement) => {
  let state = false;
  const pElem = document.createElement("p");
  pElem.textContent = "꺼짐";
  const btnElem = document.createElement("button");
  btnElem.textContent = "토글";
  btnElem.addEventListener("click", () => {
    state = !state;
    pElem.textContent = state ? "켜짐" : "꺼짐";
  });

  const divElem = document.createElement("div");
  divElem.textContent = "테스트2 - 바닐라";
  divElem.append(btnElem, pElem);

  wrapper.insertAdjacentElement("beforeend", divElem);
};

const Test2_Vanilla = () => <VanillaWrapper initiator={initiator} />;

export default Test2_Vanilla;
