import { RouteProps } from "react-router-dom";
import { QuestionsPage } from "@/pages/QuestionsPage";
import { QuestionsDetailsPage } from "@/pages/QuestionDetailsPage";

export enum AppRoutes {
  QUESTIONS = "questions",
  QUESTIONS_DETAILS = "questions_details",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.QUESTIONS]: "/",
  [AppRoutes.QUESTIONS_DETAILS]: "/:questionId",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.QUESTIONS]: {
    path: RoutePath.questions,
    element: <QuestionsPage />,
  },
  [AppRoutes.QUESTIONS_DETAILS]: {
    path: RoutePath.questions_details,
    element: <QuestionsDetailsPage />,
  },
};
