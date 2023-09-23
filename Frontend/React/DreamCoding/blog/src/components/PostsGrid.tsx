import {Post} from '@/service/posts';

interface IProps {
  posts: Post[];
}

export default function PostsGrid({posts}: IProps ) {
  return <ul></ul>;
}