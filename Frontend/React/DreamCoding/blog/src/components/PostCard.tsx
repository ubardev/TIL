import Image from "next/image";
import Link from "next/link";
import { Post } from "@/service/posts";

interface IProps {
  post: Post;
}

export default function PostCard({ post }: IProps) {
  const { title, description, date, category, path } = post;

  return (
    <Link href={`/posts/${path}`}>
      <Image
        src={`/images/posts/${path}.png`}
        alt={title}
        width={300}
        height={200}
      />
      <div>
        <time>{date.toString()}</time>
        <h3>{title}</h3>
        <h3>{description}</h3>
        <h3>{category}</h3>
      </div>
    </Link>
  );
}
