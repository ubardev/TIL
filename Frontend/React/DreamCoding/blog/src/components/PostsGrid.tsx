import { Post } from "@/service/posts";
import PostCard from "./PostCard";

interface IProps {
  posts: Post[];
}

export default function PostsGrid({ posts }: IProps) {
  return (
    <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {posts.map((post) => (
        <li key={post.path}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
