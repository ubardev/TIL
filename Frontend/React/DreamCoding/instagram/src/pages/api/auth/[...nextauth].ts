import NextAuth, {NextAuthOptions} from 'next-auth';
import GoogleProvidor from 'next-auth/providers/google';
import {addUser} from '@/service/user';

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvidor({
      clientId: process.env.GOOGLE_OAUTH_ID || '',
      clientSecret: process.env.GOOGLE_OAUTH_SECRET || '',
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ user: { id, name, image, email } }) {
      if (!email) {
        return false;
      }

      addUser({
        id,
        name: name || '',
        image,
        email,
        username: email.split('@')[0] || '',
      });
      return true;
    },
    async session({ session }) {
      const user = session?.user;

      if (user) {
        session.user = {
          ...user,
          username: user.email?.split('@')[0] || '',
        };
      }

      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
};
export default NextAuth(authOptions);
