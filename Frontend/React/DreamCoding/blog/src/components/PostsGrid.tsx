import { Post } from "@/service/posts";
import PostCard from "./PostCard";

interface IProps {
  posts: Post[];
}

export default function PostsGrid({ posts }: IProps) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.path}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
