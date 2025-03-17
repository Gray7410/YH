import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/providers/Store/config/store";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
