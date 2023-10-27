import ReactDOM from "react-dom/client";
import App from "./App";
import ViewportProvider from "./context/viewportProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ViewportProvider>
    <App />
  </ViewportProvider>
);
