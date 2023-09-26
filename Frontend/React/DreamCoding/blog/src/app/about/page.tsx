import Hero from "@/components/Hero";

const TITLE_CLASS = "text-2xl font-bold text-gray-800 my-2";

export default function AboutPage() {
  return (
    <>
      <Hero />
      <section className="bg-gray-100 shadow-lg p-8 m-8 text-center">
        <h2 className={TITLE_CLASS}>Who Am I?</h2>
        <p>
          개발을 좋아하는 프론트엔드 개발자입니다.
          <br />
          현재 마이프랜차이즈에서 프론트엔드 개발을 하고 있습니다.
        </p>
        <h2 className={TITLE_CLASS}>Career</h2>
        <p>
          마이프랜차이즈 (2023.01 ~ 현재) <br />
          토스랩 (2018.08 ~ 2022.12) <br />
          에스티유니타스 ( 2015.06 ~ 2018.04) <br />
          쌍용정보통신 (2011.06 ~ 2015.06)
        </p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>React, Next.js</p>
      </section>
    </>
  );
}
