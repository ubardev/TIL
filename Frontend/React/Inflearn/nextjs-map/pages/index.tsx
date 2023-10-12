import Link from 'next/link';
import {Fragment, useEffect} from 'react';
import {AiOutlineShareAlt} from 'react-icons/ai';
import {VscFeedback} from 'react-icons/vsc';
import Header from '../components/commin/Header';
import MapSection from '../components/home/MapSection';
import useStores from '../hooks/useStores';
import styles from '../styles/header.module.scss';
import {Store} from '../types/store';

interface IProps {
  stores: Store[];
}

export default function Home({ stores }: IProps) {
  const { initializeStores } = useStores();

  useEffect(() => {
    initializeStores(stores);
  }, [initializeStores, stores]);

  return (
    <Fragment>
      <Header
        rightElements={[
          <button
            onClick={() => {
              alert("복사");
            }}
            className={styles.box}
            style={{ marginRight: 8 }}
            key="button"
          >
            <AiOutlineShareAlt size={20} />
          </button>,
          <Link href="/feedback" className={styles.box} key="link">
            <VscFeedback size={20} />
          </Link>,
        ]}
      />
      <main style={{ width: "100%", height: "100%" }}>
        <MapSection />
      </main>
    </Fragment>
  );
}

export async function getStaticProps() {
  /** TODO: next api routes로 불러오기 */
  const stores = (await import("../public/stores.json")).default;

  return {
    props: { stores },
    revalidate: 60 * 60,
  };
}
