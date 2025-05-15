import { baseApi } from "@/shared/api/api";
import { QuestionDetailsParamsRequest } from "../types/questionDetailsSchema";

export const questionDetailsApi = baseApi.injectEndpoints({
  endpoints: (create) => ({
    getQuestionDetails: create.query<any, QuestionDetailsParamsRequest>({
      query: ({ id }) => ({
        url: `/questions/public-questions/${id}`,
      }),
    }),
  }),
});

export const { useGetQuestionDetailsQuery } = questionDetailsApi;
