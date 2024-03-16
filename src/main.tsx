import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import Loading from "./components/Loading";
import "./index.css";
import ErrorBoundary from "./debug/ErrorBoundary";
import { persistor, store } from "./redux/store";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = createRoot(rootElement);

root.render(
  <ErrorBoundary>
    <Suspense fallback={<Loading />}>
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </Suspense>
  </ErrorBoundary>
);
