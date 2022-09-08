import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { User } from 'firebase/auth';

import { RootState } from '@/store';

type UserState = {
  user: User | null;
};

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
