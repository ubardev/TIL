import data from "./data";
import cx from "./cx";
import { useState } from "react";

const AccordionItem = ({
  id,
  title,
  description,
  current,
  toggle,
}: {
  id: string;
  title: string;
  description: string;
  current: boolean;
  toggle: () => void;
}) => {
  return (
    <li className={cx("item", "item2", { current })} key={id}>
      <div className={cx("tab")} onClick={toggle}>
        {title}
      </div>
      {current ? <div className={cx("description")}>{description}</div> : null}
    </li>
  );
};

const Accordion2 = () => {
  const [currentId, setCurrentId] = useState<string | null>(data[0].id);

  const toggleItem = (id: string) => () => {
    setCurrentId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <h3>
        #2. React<sub>css로 hidden/show 처리</sub>
      </h3>
      <ul className={cx("container")}>
        {data.map((d: any) => (
          <AccordionItem
            key={d.id}
            {...d}
            current={currentId === d.id}
            toggle={toggleItem(d.id)}
          />
        ))}
      </ul>
    </>
  );
};

export default Accordion2;
