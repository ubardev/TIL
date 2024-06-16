import cx from "@/components/tabMenu/cx";
import TabMenu1 from "@/components/tabMenu/1_r";
import TabMenu2 from "@/components/tabMenu/2_r";
import TabMenu3 from "@/components/tabMenu/3_r";

const TabMenus = () => {
  return (
    <div className={cx("TabMenus")}>
      <h2>탭메뉴</h2>
      <TabMenu1 />
      <TabMenu2 />
      <TabMenu3 />
    </div>
  );
};

export default TabMenus;
