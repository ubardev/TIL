import data from "./data";
import cx from "./cx";
import { useState } from "react";
import VanillaWrapper from "@/components/vanillaWrapper";

const buildTabMenus = ({ id, title }: { id: string; title: string }) => {
  const $li = document.createElement("li");
  $li.classList.add(cx("tab"));
  $li.textContent = title;

  return $li;
};

const buildDescriptions = ({
  id,
  description,
}: {
  id: string;
  description: string;
}) => {
  const $div = document.createElement("div");
  $div.classList.add(cx("description"));
  $div.textContent = description;
  return $div;
};

const initiator = (wrapper: HTMLDivElement) => {
  const $container = document.createElement("div");
  $container.classList.add(cx("container"), cx("tabMenu2"));

  const $tabUl = document.createElement("ul");
  $tabUl.classList.add(cx("tabList"));

  const $tabList = data.map(buildTabMenus);
  const $desc = data.map(buildDescriptions);

  $tabUl.append(...$tabList);
  $container.append($tabUl, ...$desc);

  wrapper.append($container);
};

const TabMenu4V = () => <VanillaWrapper title="#4" initiator={initiator} />;

export default TabMenu4V;
