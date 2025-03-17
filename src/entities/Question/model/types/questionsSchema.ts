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
