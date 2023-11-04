import NextAuth, {DefaultSession} from 'next-auth/next';
import {User} from '@/model/user';

declare module 'next-auth' {
  // interface Session {
  //   user: {
  //     username: string;
  //   } & DefaultSession['user'];
  // }
  interface Session {
    user: User;
  }
}
