import { createSlice } from "@reduxjs/toolkit";
import { QuestionsSchema } from "../types/questionsSchema";

const initialState: QuestionsSchema = {
  page: 1,
  limit: 10,
  skillFilterMode: "ALL",
  order: "ASC",
};

export const questionsSlice = createSlice({
  name: "Questions",
  initialState,
  reducers: {},
});

export const { actions } = questionsSlice;
export const { reducer } = questionsSlice;
