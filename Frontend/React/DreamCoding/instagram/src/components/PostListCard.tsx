import Image from 'next/image';
import { useState } from 'react';
import { SimplePost } from '@/model/post';
import { parseDate } from '@/util/date';
import Avatar from './Avatar';
import BookmarkIcon from './ui/icons/BookmarkIcon';
import HeartIcon from './ui/icons/HeartIcon';
import SmileIcon from './ui/icons/SmileIcon';

type Props = {
  post: SimplePost;
  priority?: boolean;
};

export default function PostListCard({ post, priority = false }: Props) {
  const { userImage, username, image, likes, createdAt, comments, text } = post;
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div>
        <Avatar image={userImage} highlignt />
        <span>{username}</span>
        <Image
          className="w-full object-cover aspect-square"
          src={image}
          alt={`photo by ${username}`}
          width={500}
          height={500}
          priority={priority}
          onClick={() => setOpenModal(true)}
        />
        <div>
          <HeartIcon />
          <BookmarkIcon />
        </div>
        <div>
          <p>{`${likes?.length ?? 0} ${
            likes?.length > 1 ? 'likes' : 'like'
          }`}</p>
          <p>
            <span>{username}</span>
            {text}
          </p>
          <p>{parseDate(createdAt)}</p>
          <form>
            <SmileIcon />
            <input type="text" placeholder="Add a comment..." />
            <button>Post</button>
          </form>
        </div>
      </div>
    </>
  );
}
