import MarkdownViewer from "@/components/MarkdownViewer";
import { getPostDate } from "@/service/posts";

interface IProps {
  params: {
    slug: string;
  };
}

export default async function PostPage({ params: { slug } }: IProps) {
  const post = await getPostDate(slug);

  return (
    <>
      <h1>{post.title}</h1>
      <MarkdownViewer content={post.content} />
    </>
  );
}
