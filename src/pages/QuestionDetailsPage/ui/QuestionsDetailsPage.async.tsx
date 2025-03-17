import { lazy } from "react";

export const LazyQuestionsDetailsPage = lazy(
  () => import("./QuestionsDetailsPage")
);
