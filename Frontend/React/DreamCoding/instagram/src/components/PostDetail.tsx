import Image from 'next/image';
import useSWR from 'swr';
import useMe from '@/hooks/me';
import useFullPost from '@/hooks/post';
import { FullPost, SimplePost } from '@/model/post';
import ActionBar from './ActionBar';
import Avatar from './Avatar';
import CommentForm from './CommentForm';
import PostUserAvatar from './PostUserAvatar';

type Props = {
  post: SimplePost;
};

export default function PostDetail({ post }: Props) {
  const { id, userImage, username, image, likes, createdAt } = post;
  const { post: data, postComment } = useFullPost(id);
  const { user } = useMe();
  const comments = data?.comments;
  const handlePostComment = (comment: string) => {
    user &&
      postComment({ comment, username: user.username, image: user.image });
  };

  return (
    <section className="flex w-full h-full">
      <div className="relative basis-3/5">
        <Image
          className="object-cover"
          src={image}
          alt={`photo by ${username}`}
          priority
          fill
          sizes="650px"
        />
      </div>
      <div className="w-full basis-2/5 flex flex-col">
        <PostUserAvatar image={userImage} username={username} />
        <ul className="border-t border-gray-200 h-full overflow-y-auto p-4 mb-1">
          {comments &&
            comments.map(
              ({ image, username: commentUsername, comment }, index) => (
                <li key={index} className="flex items-center mb-1">
                  <Avatar
                    image={image}
                    size="small"
                    highlignt={commentUsername === username}
                  />
                  <div className="mb-2">
                    <span className="font-bold mr-1">{commentUsername}</span>
                    <span>{comment}</span>
                  </div>
                </li>
              ),
            )}
        </ul>
        <ActionBar post={post} />
        <CommentForm onPostComment={handlePostComment} />
      </div>
    </section>
  );
}
