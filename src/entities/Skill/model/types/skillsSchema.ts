import { useGetSkillsQuery } from "../api/skillsApi";

export interface SkillsParamsRequest {
  page?: number;
  limit?: number;
  specializations?: number[];
}

export interface Skill {
  id: number;
  title: string;
  description: string;
}

export type UseGetSkillsQueryResult = ReturnType<typeof useGetSkillsQuery>;
