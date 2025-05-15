import { useQueryParams } from "@/shared/lib/hooks/useQueryParams";
import {
  Question,
  QuestionsListSchema,
} from "../../model/types/questionsSchema";
import { QuestionCard } from "../QuestionCard/QuestionCard";
import cls from "./QuestionsList.module.scss";
import { Pagination } from "@/widgets/Pagination";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ErrorMessage } from "@/shared/ui/ErrorMessage/ErrorMessage";

interface QuestionsListProps {
  questions: QuestionsListSchema;
  page: number;
}

export const QuestionsList = (props: QuestionsListProps) => {
  const { questions, page } = props;
  const { setPage } = useQueryParams();
  const notFound = questions?.data?.length === 0;

  const renderQuestions = questions?.data.map((question: Question) => (
    <QuestionCard question={question} key={question.id} />
  ));

  const totalPages = Math.ceil(questions?.total / questions?.limit);

  if (notFound) {
    return (
      <ErrorMessage
        title="Не найдено :("
        description="Попробуйте изменить запрос"
      />
    );
  }

  return (
    <div className={classNames(cls.Wrapper, {}, ["content"])}>
      <ul className={cls.QuestionsList}>{renderQuestions}</ul>
      {totalPages > 1 && (
        <Pagination
          page={page}
          total={totalPages}
          onPageChange={(pageIndex: number) => setPage(pageIndex)}
        />
      )}
    </div>
  );
};
