import { RouteObject, RouteProps } from "react-router-dom";
import { QuestionsPage } from "@/pages/QuestionsPage";
import { QuestionsDetailsPage } from "@/pages/QuestionDetailsPage";
import { MainLayout } from "@/app/layouts";
import { ContentLayout } from "@/app/layouts/ui/ContentLayout";

export enum AppRoutes {
  QUESTIONS = "questions",
  QUESTIONS_DETAILS = "questions_details",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.QUESTIONS]: "/",
  [AppRoutes.QUESTIONS_DETAILS]: "/:id",
};

export const routeConfig: Record<AppRoutes, RouteObject> = {
  [AppRoutes.QUESTIONS]: {
    path: RoutePath.questions,
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <QuestionsPage />,
      },
    ],
  },
  [AppRoutes.QUESTIONS_DETAILS]: {
    path: RoutePath.questions_details,
    element: <ContentLayout />,
    children: [
      {
        path: "",
        element: <QuestionsDetailsPage />,
      },
    ],
  },
};
