import type { NextPage } from "next";
import Head from 'next/head';
import Image from 'next/image';
import {useEffect, useRef, useState} from 'react';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const [products, setProducts] = useState<
    { id: string; properties: { id: string }[] }[]
  >([]);

  useEffect(() => {
    fetch("/api/get-items")
      .then((res) => res.json())
      .then((data) => setProducts(data.items));
  }, []);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current === null || inputRef.current.value === "") {
      alert("name을 넣어주세요.");
      return;
    }

    fetch(`/api/add-item?name=${inputRef.current.value}`)
      .then((res) => res.json())
      .then((data) => alert(data.message));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <input ref={inputRef} type="text" placeholder="name" />
        <button onClick={handleClick}>Add Jacket</button>

        <div>
          <p>Product List</p>
          {products &&
            products.map((item) => (
              <div key={item.id}>
                {JSON.stringify(item)}
                {item.properties &&
                  Object.entries(item.properties).map(([key, value]) => (
                    <button
                      key={key}
                      onClick={() => {
                        fetch(
                          `/api/get-detail?pageId=${item.id}&propertyId=${value.id}`
                        )
                          .then((res) => res.json())
                          .then((data) => alert(JSON.stringify(data.detail)));
                      }}
                    >
                      {key}
                    </button>
                  ))}
                <br />
                <br />
              </div>
            ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
