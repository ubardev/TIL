import { gnbRootList, ROUTE } from "@/app/routes";
import Link from "next/link";

const GnbItem = ({ name, link, children }: ROUTE) => {
  return (
    <li>
      <Link href={link}>{name}</Link>
    </li>
  );
};

const Gnb = () => {
  return (
    <aside>
      <h1>
        UI 요소 모음 <sub>Ubar</sub>
      </h1>
      <ul className="mainRoutes">
        {gnbRootList.map((r) => (
          <GnbItem {...r} key={r.key} />
        ))}
      </ul>
    </aside>
  );
};

export default Gnb;
