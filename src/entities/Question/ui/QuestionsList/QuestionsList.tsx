import { useGetQuestionsQuery } from "../../model/api/questionsPageApi";

export const QuestionsList = () => {
  const { data: questions } = useGetQuestionsQuery();

  console.log(questions);

  return "QL";
};
