import GlobalStyle from "./shared/GlobalStyle";
import Router from "./shared/Router";
import LoadingPage from "./pages/LoadingPage";
import { useSelector } from "react-redux";

function App() {
  const loginLoading = useSelector((state) => state.login.loading);
  return (
    <div className="App">
      {loginLoading ? (
        <LoadingPage></LoadingPage>
      ) : (
        <>
          <GlobalStyle />
          <Router />
        </>
      )}
    </div>
  );
}

export default App;
