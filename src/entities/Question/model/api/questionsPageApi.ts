import { baseApi } from "@/shared/api/api";

export const questionsApi = baseApi.injectEndpoints({
  endpoints: (create) => ({
    getQuestions: create.query<any, void>({
      query: () => "/questions/public-questions",
    }),
  }),
  overrideExisting: false,
});

export const { useGetQuestionsQuery } = questionsApi;
