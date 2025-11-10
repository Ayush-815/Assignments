import { configureStore, createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { name: 'Guest', isLoggedIn: false },
  reducers: {
    login: (state, action) => {
      state.name = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.name = 'Guest';
      state.isLoggedIn = false;
    }
  }
});

export const { login, logout } = userSlice.actions;

export const store = configureStore({
  reducer: { user: userSlice.reducer }
});