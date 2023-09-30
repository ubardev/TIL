import { Metadata } from "next";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaBlog } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Me",
  description: "Ubar에게 메일 보내기",
};

const LINKS = [
  { icon: <AiFillGithub />, url: "https://github.com/ubardev" },
  {
    icon: <AiFillLinkedin />,
    url: "https://www.linkedin.com/in/jong-in-hwang-876619157",
  },
  {
    icon: <FaBlog />,
    url: "https://freelearn.tistory.com",
  },
];

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-3xl font-bold my-2">Contact Me</h2>
      <p>bellin83@gmail.com</p>
      <ul className="flex gap-8 my-2">
        {LINKS.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="text-5xl hover:text-green-400"
          >
            {link.icon}
          </a>
        ))}
      </ul>
      <h2 className="text-3xl font-bold my-8">Or send me an email</h2>
      <ContactForm />
    </section>
  );
}
