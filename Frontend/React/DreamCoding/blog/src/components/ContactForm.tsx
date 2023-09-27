"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import Banner, { BannerData } from "./Banner";

type Form = {
  from: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<Form>({
    from: "",
    subject: "",
    message: "",
  });
  const [banner, setBanner] = useState<BannerData | null>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBanner({ message: "이메일 발송이 완료됐습니다", state: "success" });
    setTimeout(() => {
      setBanner(null);
    }, 3000);
  };

  return (
    <section className="w-full max-w-md">
      {banner && <Banner banner={banner} />}
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md flex flex-col gap-2 my-4 p-4 bg-slate-700 rounded-xl text-white"
      >
        <label htmlFor="from" className="font-semibold">
          보내는 사람 Email
        </label>
        <input
          type="email"
          id="from"
          name="from"
          required
          autoFocus
          value={form.from}
          onChange={onChange}
          className="text-black"
        />
        <label htmlFor="subject" className="font-semibold">
          제목
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={form.subject}
          onChange={onChange}
          className="text-black"
        />
        <label htmlFor="message" className="font-semibold">
          내용
        </label>
        <textarea
          rows={10}
          id="message"
          name="message"
          required
          value={form.message}
          onChange={onChange}
          className="text-black"
        />
        <button className="bg-green-300 text-black font-bold hover:bggree400">
          이메일 발송
        </button>
      </form>
    </section>
  );
}
