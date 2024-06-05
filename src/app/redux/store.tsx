import {configureStore} from '@reduxjs/toolkit';
import cardSlice from './slices/card.slice';
import providersSlice from './slices/providers.slice';
import settingsSlice from './slices/settings.slice';

export const store = configureStore({
  reducer: {
    card: cardSlice,
    providers: providersSlice,
    settings: settingsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
