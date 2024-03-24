import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import AppRouter from "./components/AppRouter";
import { useApp } from "./utils/context";
import { useAuthState } from "react-firebase-hooks/auth";
import Loader from "./components/Loader";

function App() {
  const { auth } = useApp();
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
