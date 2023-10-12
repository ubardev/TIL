import Link from 'next/link';
import {Fragment} from 'react';
import {AiOutlineShareAlt} from 'react-icons/ai';
import {VscFeedback} from 'react-icons/vsc';
import Header from '../components/commin/Header';
import MapSection from '../components/home/MapSection';
import styles from '../styles/header.module.scss';

export default function Home() {
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
