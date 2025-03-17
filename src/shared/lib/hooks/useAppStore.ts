import { useStore } from "react-redux";
import { AppStore } from "@/app/providers/Store";

export const useAppStore = useStore.withTypes<AppStore>();
