import './assets/css/App.css';
import {CustomRouter} from "./components/routing/router";
import {Provider} from "react-redux";
import {store} from "./store/store";

function App() {
  return (
      <Provider store={store}>
        <CustomRouter/>
      </Provider>
  );
}

export default App;
