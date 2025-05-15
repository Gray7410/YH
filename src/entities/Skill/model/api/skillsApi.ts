import { baseApi } from "@/shared/api/api";
import { skillsApiUrls } from "../const/skillsApiUrls";
import { SkillsParamsRequest } from "../types/skillsSchema";

export const skillsApi = baseApi.injectEndpoints({
  endpoints: (create) => ({
    getSkills: create.query<any, SkillsParamsRequest>({
      query: ({ page = 1, limit = 10 }) => ({
        url: skillsApiUrls.getSkills,
        params: { page, limit },
      }),
    }),
  }),
});

export const { useGetSkillsQuery } = skillsApi;
