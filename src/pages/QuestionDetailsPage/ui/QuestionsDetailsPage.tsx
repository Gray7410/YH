import cls from "./QuestionsDetailsPage.module.scss";
import { useGetQuestionDetailsQuery } from "@/entities/Question/model/api/questionDetailsApi";
import { useParams } from "react-router";
import { ErrorMessage } from "@/shared/ui/ErrorMessage/ErrorMessage";
import { QuestionDetailsBody } from "@/widgets/QuestionDetailsBody";
import { QuestionDetailsInfo } from "@/widgets/QuestionDetailsInfo/ui/QuestionDetailsInfo";
import { Loader } from "@/shared/ui/Loader/Loader";

const QuestionsDetailsPage = () => {
  const { id } = useParams();
  const {
    data: question,
    isError,
    isLoading,
    isFetching,
  } = useGetQuestionDetailsQuery({
    id,
  });

  if (isFetching || isLoading) return <Loader />;

  const {
    complexity,
    rate,
    questionSkills,
    keywords,
    shortAnswer,
    longAnswer,
    imageSrc,
    title,
    description,
  } = question;

  console.log("id", id);
  console.log("question", question);

  if (isError) {
    return <ErrorMessage title="УПС!" description="Что-то пошло не так" />;
  }

  return (
    <div className={cls.QuestionsDetailsPage}>
      <QuestionDetailsBody
        shortAnswer={shortAnswer}
        longAnswer={longAnswer}
        imageSrc={imageSrc}
        title={title}
        description={description}
      />
      <QuestionDetailsInfo
        complexity={complexity}
        rate={rate}
        questionSkills={questionSkills}
        keywords={keywords}
      />
    </div>
  );
};

export default QuestionsDetailsPage;
