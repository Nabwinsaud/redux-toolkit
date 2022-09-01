import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { store } from "./redux/store";
import { Provider } from "react-redux";
function App() {
  return (
    <div className="container w-full max-w-6xl mx-auto py-6 ">
      <Provider store={store}>
        <Navbar />
        <Home />
      </Provider>
    </div>
  );
}

export default App;
