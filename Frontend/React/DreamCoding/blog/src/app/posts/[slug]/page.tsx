import Image from "next/image";
import PostContent from "@/components/PostContent";
import { getPostDate } from "@/service/posts";

interface IProps {
  params: {
    slug: string;
  };
}

export default async function PostPage({ params: { slug } }: IProps) {
  const post = await getPostDate(slug);
  const { title, path } = post;

  return (
    <article className="rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4">
      <Image
        className="w-full h-1/5 max-h-[500px]"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <PostContent post={post} />
    </article>
  );
}
