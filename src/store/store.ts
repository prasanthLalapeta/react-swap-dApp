import { configureStore } from '@reduxjs/toolkit';

import themeReducer from './features/theme/theme-slice';
import notificationReducer from './features/notifications/notifications-slice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    notification: notificationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
