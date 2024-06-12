import cx from "@/components/tabMenu/cx";
import TabMenu1 from "@/components/tabMenu/1_r";

const TabMenus = () => {
  return (
    <div className={cx("TabMenus")}>
      <h2>탭메뉴</h2>
      <TabMenu1 />
    </div>
  );
};

export default TabMenus;
