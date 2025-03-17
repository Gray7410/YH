import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseUrl = "https://api.yeatwork.ru/";

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: () => ({}),
});
