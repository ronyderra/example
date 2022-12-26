import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    projectNumber: 2,
    name: "",
    description: "",
    collectionChain: "",
    collectionAddress: "",
    startDate: "",
    endDate: "",
    currentProject: false,
    twitterPostId: "",
    twitterPartnerId: "",
    achievments: [],
  },
  reducers: {
    projectNumber: (state, action) => {
      state.projectNumber = Number(action.payload);
    },
    name: (state, action) => {
      state.name = action.payload;
    },
    description: (state, action) => {
      state.description = action.payload;
    },
    collectionChain: (state, action) => {
      state.collectionChain = action.payload;
    },
    collectionAddress: (state, action) => {
      state.collectionAddress = action.payload;
    },
    startDate: (state, action) => {
      state.startDate = action.payload;
    },
    endDate: (state, action) => {
      console.log(action.payload);
      state.endDate = action.payload;
    },
    currentProject: (state, action) => {
      state.currentProject = action.payload;
    },
    twitterPostId: (state, action) => {
      state.twitterPostId = action.payload;
    },
    twitterPartnerId: (state, action) => {
      state.twitterPartnerId = action.payload;
    },
    achievments: (state, action) => {
      console.log(action.payload);
      const { checked, achievmentNumber } = action.payload;
      if (checked) {
        state.achievments = [...state.achievments, achievmentNumber];
      } else {
        state.achievments.pop(achievmentNumber);
      }
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
