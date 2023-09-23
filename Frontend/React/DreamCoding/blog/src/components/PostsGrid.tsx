import {Post} from '@/service/posts';

interface IProps {
  posts: Post[];
}

export default function PostsGrid({posts}: IProps ) {
  return <ul>
    {posts.map((post) => <li key={post.path}>{post.title}</li>)}
  </ul>;
}