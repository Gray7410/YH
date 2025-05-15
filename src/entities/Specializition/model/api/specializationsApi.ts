import { baseApi } from "@/shared/api/api";
import { specializationsApiUrls } from "../const/specializationsApiUrls";
import { SpecializationsParamsRequest } from "../types/specializationsSchema";

export const specializationsApi = baseApi.injectEndpoints({
  endpoints: (create) => ({
    getSpecializations: create.query<any, SpecializationsParamsRequest>({
      query: ({ page = 1, limit = 10 }) => ({
        url: specializationsApiUrls.getSpecializations,
        params: { page, limit },
      }),
    }),
  }),
});

export const { useGetSpecializationsQuery } = specializationsApi;
