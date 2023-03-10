import { createSlice } from "@reduxjs/toolkit";

export const configureUser = createSlice({
  name: "configureUser",
  initialState: {
    telegramUsername: "",
    projectNumber: "",
    progressNumber: "",
    completed: false,
    achievmentNumber: "",
  },
  reducers: {
    telegramUsername: (state, action) => {
      state.telegramUsername = action.payload;
    },
    projectNumber: (state, action) => {
      state.projectNumber = Number(action.payload);
    },
    progressNumber: (state, action) => {
      state.progressNumber = Number(action.payload);
    },
    completed: (state, action) => {
      const { checked } = action.payload;
      state.completed = checked;
    },
    achievmentNumber: (state, action) => {
      state.achievmentNumber = Number(action.payload);
    },
  },
});

export const {
  telegramUsername,
  projectNumber,
  progressNumber,
  completed,
  achievmentNumber,
} = configureUser.actions;

export default configureUser;
