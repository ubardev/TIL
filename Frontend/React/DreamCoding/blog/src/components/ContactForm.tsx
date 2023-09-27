"use client";
import { ChangeEvent, FormEvent, useState } from "react";

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

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("form ==========>", form);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="from">보내는 사람 Email</label>
      <input
        type="email"
        id="from"
        name="from"
        required
        autoFocus
        value={form.from}
        onChange={onChange}
      />
      <label htmlFor="subject">제목</label>
      <input
        type="text"
        id="subject"
        name="subject"
        required
        value={form.subject}
        onChange={onChange}
      />
      <label htmlFor="message">내용</label>
      <textarea
        rows={10}
        id="message"
        name="message"
        required
        value={form.message}
        onChange={onChange}
      />
      <button>이메일 발송</button>
    </form>
  );
}
