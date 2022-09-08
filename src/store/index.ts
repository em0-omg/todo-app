import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector as rawUseSelector } from 'react-redux';

import userReducer from '@/features/auth/slices/userSlice';

const rootReducer = combineReducers({
  user: userReducer,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
