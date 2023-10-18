import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    id?: string & DefaultSession["user"];
  }
}

// declare module "next-auth" {
//   interface Session {
//     user?: {
//       id: string;
//       role?: string;
//       name?: string;
//     } & DefaultSession["user"];
//   }
// }
