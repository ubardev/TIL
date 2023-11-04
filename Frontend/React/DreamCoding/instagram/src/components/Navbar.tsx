'use client';

import {signIn, signOut, useSession} from 'next-auth/react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import Avatar from './Avatar';
import ColorButton from './ui/ColorButton';
import HomeFillIcon from './ui/icons/HomeFillIcon';
import HomeIcon from './ui/icons/HomeIcon';
import NewFillIcon from './ui/icons/NewFillIcon';
import NewIcon from './ui/icons/NewIcon';
import SearchFillIcon from './ui/icons/SearchFillIcon';
import SearchIcon from './ui/icons/SearchIcon';

const menu = [
  {
    href: '/',
    icon: <HomeIcon />,
    clickedIcon: <HomeFillIcon />,
  },
  {
    href: '/search',
    icon: <SearchIcon />,
    clickedIcon: <SearchFillIcon />,
  },
  {
    href: '/new',
    icon: <NewIcon />,
    clickedIcon: <NewFillIcon />,
  },
];

export default function Navbar() {
  const pathName = usePathname();
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <div className="flex justify-between items-center px-6">
      <Link href="/">
        <h1 className="text-3xl font-bold">Instantgram</h1>
      </Link>
      <nav>
        <ul className="flex gap-4 items-center p-4">
          {menu.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                {pathName === item.href ? item.clickedIcon : item.icon}
              </Link>
            </li>
          ))}
          {user && <Avatar image={user.image} size="small" highlignt />}
          {session ? (
            <ColorButton text="Sign out" onClick={() => signOut()} />
          ) : (
            <ColorButton text="Sign in" onClick={() => signIn()} />
          )}
        </ul>
      </nav>
    </div>
  );
}
