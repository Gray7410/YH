import { baseApi } from "@/shared/api/api";
import { QuestionsListParamsRequest } from "../types/questionsSchema";
import { questionsApiUrls } from "../const/questionsApiUrls";

export const questionsApi = baseApi.injectEndpoints({
  endpoints: (create) => ({
    getQuestions: create.query<any, QuestionsListParamsRequest>({
      query: ({
        page = 1,
        title,
        specialization,
        skills,
        complexity,
        rate,
      }) => {
        const params = Object.fromEntries(
          Object.entries({
            page,
            title,
            specialization,
            skills,
            complexity,
            rate,
          }).filter(([_, value]) => value !== undefined && value !== "")
        );
        return {
          url: questionsApiUrls.getQuestions,
          params,
        };
      },
    }),
  }),
});

export const { useGetQuestionsQuery } = questionsApi;
