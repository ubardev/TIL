import Accordion1 from "./1_r";
import Accordion2 from "./2_r";
import Accordion3 from "./3_r";
import Accordion4V from "./4_v";
import Accordion5 from "./5_r";
import Accordion6 from "./6_r";
import Accordion7 from "./7_r";
import Accordion8 from "./8_r";
import cx from "./cx";

const Accordions = () => {
  return (
    <div className={cx("Accordions")}>
      <h2>아코디언</h2>
      <Accordion1 />
      <Accordion2 />
      <Accordion3 />
      <Accordion4V />
      <Accordion5 />
      <Accordion6 />
      <Accordion7 />
      <Accordion8 />
    </div>
  );
};

export default Accordions;
