import Image from 'next/image';
import { useState } from 'react';
import { SimplePost } from '@/model/post';
import ActionBar from './ActionBar';
import Avatar from './Avatar';
import CommentForm from './CommentForm';

type Props = {
  post: SimplePost;
  priority?: boolean;
};

export default function PostListCard({ post, priority = false }: Props) {
  const { userImage, username, image, likes, createdAt, comments, text } = post;
  const [openModal, setOpenModal] = useState(false);

  return (
    <article className="rounded-lg shadow-md border border-gray-200">
      <div className="flex items-center p2">
        <Avatar image={userImage} size="medium" highlignt />
        <span className="text-gray-900 font-bold ml-2">{username}</span>
      </div>
      <Image
        className="w-full object-cover aspect-square"
        src={image}
        alt={`photo by ${username}`}
        width={500}
        height={500}
        priority={priority}
        onClick={() => setOpenModal(true)}
      />
      <ActionBar
        likes={likes}
        username={username}
        text={text}
        createdAt={createdAt}
      />
      <CommentForm />
    </article>
  );
}
