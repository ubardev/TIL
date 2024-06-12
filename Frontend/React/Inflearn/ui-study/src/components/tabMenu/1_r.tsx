import data from "./data";
import cx from "./cx";
import { useState } from "react";

const TabItem = ({
  id,
  title,
  current,
  toggle,
}: {
  id: string;
  title: string;
  current: boolean;
  toggle: () => void;
}) => {
  return (
    <li className={cx("tab", { current })} key={id} onClick={toggle}>
      {title}
    </li>
  );
};

const TabMenu1 = () => {
  const [currentId, setCurrentId] = useState<string | null>(data[0].id);

  const toggleItem = (id: string) => () => {
    setCurrentId((prev) => (prev === id ? null : id));
  };

  const currentData = data.find((item) => item.id === currentId);

  return (
    <>
      <h3>
        #1. React<sub>현재 desc만 html로 그리기</sub>
      </h3>
      <div className={cx("container")}>
        <div className={cx("tabList")}>
          {data.map((d: any) => (
            <TabItem
              key={d.id}
              {...d}
              current={currentId === d.id}
              toggle={toggleItem(d.id)}
            />
          ))}
        </div>
        <div className={cx("description")}>
          {currentData?.description || ""}
        </div>
      </div>
    </>
  );
};

export default TabMenu1;
