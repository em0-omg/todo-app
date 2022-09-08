export type User = {
  id: string;
  name: string;
  photoURL: string;
  email: string;
  createdAt: number;
};

export type UserState = {
  user: User | null;
};
