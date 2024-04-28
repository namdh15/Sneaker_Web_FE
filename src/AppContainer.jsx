import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import createAppStore from "./redux/store";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Loading } from "./components";
import Routes from './routes';
import { StyledEngineProvider } from "@mui/styled-engine";
import { ThemeProvider } from "@mui/material";
import theme from "./utils/themes";



const ErrorComponent = ({ errorMessage }) => (
  <div className="text-red-500 font-bold text-center">{errorMessage}</div>
);

const AppContainer = () => {
  const [store, setStore] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initializeStore = async () => {
      try {
        const appStore = await createAppStore();
        setStore(appStore);
      } catch (err) {
        setError(`Error initializing the app: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };
    initializeStore();
  }, []);

  return (
    loading
      ?
      <div className="flex items-center justify-center h-screen">
        {loading ? <Loading /> : <ErrorComponent errorMessage={error} />}
      </div>
      :
      <Provider store={store}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme()}>
            <ToastContainer autoClose={1000} />
            <Routes />
          </ThemeProvider>
        </StyledEngineProvider>
      </Provider>
  );
};

export default AppContainer;
