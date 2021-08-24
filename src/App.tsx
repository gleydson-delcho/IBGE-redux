import { Provider } from "react-redux";
import IbgeRegions from "./components/IbgeRegions";
import RepositoryList from "./components/RepositoryList";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <RepositoryList />
      <IbgeRegions />
    </Provider>
  );
}

export default App;
