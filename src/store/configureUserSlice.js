import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "configureUser",
  initialState: {
    telegramUsername: "",
    projectNumber: "",
    progressNumber: "",
    completed: "",
    achievmentNumber: "",
  },
  reducers: {
    telegramUsername: (state, action) => {
      state.projectNumber = action.payload;
    },
    projectNumber: (state, action) => {
      state.name = Number(action.payload);
    },
    progressNumber: (state, action) => {
      state.description = Number(action.payload);
    },
    completed: (state, action) => {
      const { checked } = action.payload;
      state.completed = checked;
    },
    achievmentNumber: (state, action) => {
      state.collectionAddress = Number(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  name,
  description,
  collectionChain,
  projectNumber,
  achievments,
  twitterPartnerId,
  twitterPostId,
  currentProject,
  endDate,
  startDate,
  collectionAddress,
} = dataSlice.actions;

export default dataSlice;
