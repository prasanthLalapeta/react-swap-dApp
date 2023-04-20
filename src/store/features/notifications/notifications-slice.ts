import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../../store';

export type NotificationMessage = {
  message: string;
  id: number;
  type: 'error' | 'success';
};

export type ErrorMessages = NotificationMessage & {
  type: 'error';
};

export type SuccessMessages = NotificationMessage & {
  type: 'success';
};

export interface NotificationState {
  messages: Array<ErrorMessages | SuccessMessages>;
  showSuccess: boolean;
}

const initialState: NotificationState = {
  messages: [],
  showSuccess: false,
};

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setErrorMessage: (state, action: PayloadAction<string>) => {
      state.messages.push({
        message: action.payload,
        id: Date.now(),
        type: 'error',
      });
    },
    removeMessage: (state, action: PayloadAction<number>) => {
      state.messages = state.messages.filter(
        (error) => error.id !== action.payload,
      );
    },
    setSuccessMessage: (state, action: PayloadAction<string>) => {
      state.messages.push({
        message: action.payload,
        id: Date.now(),
        type: 'success',
      });
    },
    setSuccessSetting: (state, action: PayloadAction<boolean>) => {
      state.showSuccess = action.payload;
    },
  },
});

export const notificationActions = notificationSlice.actions;

export const selectNotificationState = (state: RootState) =>
  state.notification;

export default notificationSlice.reducer;
