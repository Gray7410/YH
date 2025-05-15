export interface QuestionsSchema {
  page: number;
  limit: number;
  title?: string;
  titleOrDescription?: string;
  skills?: string[];
  skillFilterMode: string;
  complexity?: number[];
  collection?: number;
  rate?: number[];
  keywords?: string[];
  specialization?: number;
  orderBy?: string;
  order: string;
  random?: boolean;
}

export interface Question {
  id: number;
  title: string;
  description: string;
  code?: string;
  imageSrc?: string;
  keywords?: string[];
  longAnswer?: string;
  questionSkills?: any;
  rate?: number;
  complexity?: number;
  shortAnswer?: HTMLBodyElement;
}

export interface QuestionsListSchema {
  data: Question[];
  page: number;
  limit: number;
  total: number;
}

export interface QuestionsListParamsRequest {
  page?: number;
  limit?: number;
  title?: string;
  specialization?: string;
  skills?: string;
  complexity?: string;
  rate?: string;
}
