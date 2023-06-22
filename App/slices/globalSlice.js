import { createSlice } from "@reduxjs/toolkit";

// -->
const initialState = {
  homeMenuOption: null,
  questionTracker: [],
  questChoiceAnsData: null,
  selectedQuestionIndex: null,
};

// -->
const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setHomeMenuOption: (state, action) => {
      state.homeMenuOption = action.payload;
    },
    setQuestionTracker: (state, action) => {
      state.questionTracker = action.payload;
    },
    setQuestChoiceAnsData: (state, action) => {
      state.questChoiceAnsData = action.payload;
    },
    setSelectedQuestionIndex: (state, action) => {
      state.selectedQuestionIndex = action.payload;
    },
  },
});

// -->
export const {
  setHomeMenuOption,
  setQuestionTracker,
  setQuestChoiceAnsData,
  setSelectedQuestionIndex,
} = globalSlice.actions;

// -->
export const selectHomeMenuOption = (state) => state.global.homeMenuOption;
export const selectQuestionTracker = (state) => state.global.questionTracker;
export const selectQuestChoiceAnsData = (state) =>
  state.global.questChoiceAnsData;
export const selectSelectedQuestionIndex = (state) =>
  state.global.selectedQuestionIndex;

// -->
export default globalSlice.reducer;
