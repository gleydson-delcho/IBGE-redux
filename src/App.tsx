import { Provider } from "react-redux";
import IbgeCounties from "./components/IbgeCounties";
import RepositoryList from "./components/RepositoryList";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <RepositoryList />
      <IbgeCounties />
    </Provider>
  );
}

export default App;
