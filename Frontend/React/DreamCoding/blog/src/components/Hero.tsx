import Image from 'next/image';
import Link from 'next/link';
import profileImage from '../../public/images/profile.png';

export default function Hero() {
  return (
    <section className="text-center">
      <Image
        className="rounded-full mx-auto"
        src={profileImage}
        alt="프로필 이미지"
        width={250}
        height={250}
        priority
      />
      <h2 className="text-3xl font-bold mt-2">안녕하세요. 황종인입니다.</h2>
      <h3 className="text-xl font-semibold">Frontend Engineer</h3>
      <p>오늘보다 나은 내일을 위해 노력하는 개발자</p>
      <Link href="/contact">
        <button className="bg-green-500 font-bold rounded-xl py-1 px-4 mt-2">
          <p className='text-white'>연락하기</p>
        </button>
      </Link>
    </section>
  );
}
