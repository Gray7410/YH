import { StrictMode, Suspense } from "react";
import { AppRouter } from "./providers/router";
import { BrowserRouter } from "react-router-dom";
import { Loader } from "@/shared/ui/Loader/Loader";
import { Provider } from "react-redux";
import { store } from "./providers/Store";
import { createRoot } from "react-dom/client";
import "./styles/index.scss";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <Suspense fallback={<Loader />}>
        <AppRouter />
      </Suspense>
    </Provider>
  </BrowserRouter>
);
