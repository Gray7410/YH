import { useSearchParams } from "react-router";

export const useQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const pageParam = searchParams.get("page");
  const page = pageParam ? parseInt(pageParam, 10) : 1;

  const setPage = (pageIndex: number) => {
    searchParams.set("page", pageIndex.toString());
    setSearchParams(searchParams, { replace: true });
  };

  const title = searchParams.get("title") || "";

  const setTitle = (titleQuery: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("title", titleQuery);
    newParams.set("page", "1");
    if (titleQuery === "") newParams.delete("title");
    setSearchParams(newParams, { replace: true });
  };

  const specialization = searchParams.get("specialization") || "";

  const setSpecialization = (specializationQuery: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("specialization", specializationQuery.toString());
    newParams.set("page", "1");
    if (specializationQuery === "") newParams.delete("specialization");
    setSearchParams(newParams, { replace: true });
  };

  const skills = searchParams.get("skills") || "";

  const setSkills = (skillsQuery: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("skills", skillsQuery.toString());
    newParams.set("page", "1");
    if (skillsQuery === "") newParams.delete("skills");
    setSearchParams(newParams, { replace: true });
  };

  const complexity = searchParams.get("complexity") || "";

  const setComplexity = (query: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("complexity", query);
    newParams.set("page", "1");
    setSearchParams(newParams, { replace: true });
  };

  const rate = searchParams.get("rate") || "";

  const setRate = (query: string) => {
    const newParams = new URLSearchParams(searchParams);
    console.log("rateQuery", query);
    newParams.set("rate", query);
    newParams.set("page", "1");
    setSearchParams(newParams, { replace: true });
  };

  return {
    page,
    setPage,
    title,
    setTitle,
    specialization,
    setSpecialization,
    skills,
    setSkills,
    complexity,
    setComplexity,
    rate,
    setRate,
  };
};
