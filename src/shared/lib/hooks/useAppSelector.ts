import { useSelector } from "react-redux";
import { RootState } from "@/app/providers/Store/config/store";

export const useAppSelector = useSelector.withTypes<RootState>();
