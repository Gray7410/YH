import { QuestionsList } from "@/entities/Question";
import { FilterPanel } from "@/widgets/FilterPanel";
import cls from "./QuestionsPage.module.scss";
import { useQueryParams } from "@/shared/lib/hooks/useQueryParams";
import { useGetQuestionsQuery } from "@/entities/Question/model/api/questionsApi";
import { ErrorMessage } from "@/shared/ui/ErrorMessage/ErrorMessage";
import { classNames } from "@/shared/lib/classNames/classNames";

const QuestionsPage = () => {
  const { page, title, specialization, skills, complexity, rate } =
    useQueryParams();
  const { data: questions, isError } = useGetQuestionsQuery({
    page,
    title,
    specialization,
    skills,
    complexity,
    rate,
  });

  if (isError) {
    return <ErrorMessage title="УПС!" description="Что-то пошло не так" />;
  }

  return (
    <div className={classNames(cls.QuestionsPage, {}, ["container"])}>
      <QuestionsList questions={questions} page={page} />
      <FilterPanel title={title} />
    </div>
  );
};

export default QuestionsPage;
