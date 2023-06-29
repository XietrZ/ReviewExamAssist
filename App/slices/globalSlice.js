import { createSlice } from "@reduxjs/toolkit";

// -->
const initialState = {
  homeMenuOption: null,
  questionTracker: [],
  questChoiceAnsData: null,
  selectedQuestionIndex: null,
  scoreTracking: null,
  sequenceQuestions: null,
  sequenceChoices: null,
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
    setScoreTracking: (state, action) => {
      state.scoreTracking = action.payload;
    },
    setSequenceQuestions: (state, action) => {
      state.sequenceQuestions = action.payload;
    },
    setSequenceChoices: (state, action) => {
      state.sequenceChoices = action.payload;
    },
  },
});

// -->
export const {
  setHomeMenuOption,
  setQuestionTracker,
  setQuestChoiceAnsData,
  setSelectedQuestionIndex,
  setScoreTracking,
  setSequenceQuestions,
  setSequenceChoices,
} = globalSlice.actions;

// -->
export const selectHomeMenuOption = (state) => state.global.homeMenuOption;
export const selectQuestionTracker = (state) => state.global.questionTracker;
export const selectQuestChoiceAnsData = (state) =>
  state.global.questChoiceAnsData;
export const selectSelectedQuestionIndex = (state) =>
  state.global.selectedQuestionIndex;
export const selectScoreTracking = (state) => state.global.scoreTracking;
export const selectSequenceQuestions = (state) =>
  state.global.sequenceQuestions;
export const selectSequenceChoices = (state) => state.global.sequenceChoices;

// -->
export default globalSlice.reducer;
