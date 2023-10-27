import TodoForm from "./Components/TodoForm";
import "./App.css";
import TodoList from "./Components/TodoList";
import { Provider } from "react-redux";
import store from "./store/store";
import { useViewport } from "./context/viewportProvider";

const MobileComponent = (
  <>
    <TodoList />
    <TodoForm />
  </>
);
const DesktopComponent = (
  <>
    <TodoForm />
    <TodoList />
  </>
);

function App() {
  const { isMobile } = useViewport();
  return (
    <Provider store={store}>
      {isMobile ? MobileComponent : DesktopComponent}
    </Provider>
  );
}

export default App;
