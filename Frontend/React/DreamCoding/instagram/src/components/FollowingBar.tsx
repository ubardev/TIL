'use client';

import Link from 'next/link';
import { PropagateLoader } from 'react-spinners';
import useSWR from 'swr';
import { DetailUser } from '@/model/user';
import Avatar from './Avatar';

export default function FollowingBar() {
  const { data, isLoading: loading, error } = useSWR<DetailUser>('/api/me');
  const users = data?.following;

  return (
    <section>
      {loading ? (
        <PropagateLoader size={8} color="red" />
      ) : (
        (!users || users.length === 0) && <p>{`You don't have following`}</p>
      )}
      {users && users.length > 0 && (
        <ul>
          {users.map(({ image, username }) => (
            <li key={username}>
              <Link href={`/user/${username}`}>
                <Avatar image={image} highlignt />
                <p>{username}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
