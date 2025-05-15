export interface SpecializationsParamsRequest {
  page?: number;
  limit?: number;
}

export interface Specialization {
  id: number;
  title: string;
  description: string;
  imageSrc?: string;
}
