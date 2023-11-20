export type User = {
  name: string;
  username: string;
  email: string;
  image?: string;
};

export type SimpleUser = Pick<User, 'username' | 'image'>;

export type DetailUser = User & {
  following: SimpleUser[];
  followers: SimpleUser[];
  bookmarks: string[];
};

export type AuthUser = {
  id: string;
  name: string;
  username: string;
  email: string;
  image?: string;
};

export type SearchUser = AuthUser & {
  following: number;
  followers: number;
};
