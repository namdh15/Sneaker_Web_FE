import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { Helmet } from "react-helmet";
import { Route, Routes } from "react-router-dom";
import createAppStore from "./redux/store";
import { Home, AboutPage, ContactPage, Cart, Login, Register, Checkout, PageNotFound, ProductsPage } from "./pages"
import Layout from "./components/layouts/Layout";
import UserProfile from "./pages/UserProfile";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import DetailProduct from "./pages/DetailProduct";
import CreateProductPage from "./pages/CreateProductPage";
import DashboardPageTest from "./pages/DashboardPageTest";
import DashboardPage from "./pages/DashboardPage";
import { Loading } from "./components";
// import initialStore from "./redux/store";

const ErrorComponent = ({ errorMessage }) => (
  <div className="text-red-500 font-bold text-center">{errorMessage}</div>
);

const genLayoutElement = (el, isPublic = false) => {
  // replace by private and public wrapper
  return isPublic ? (
    <Layout>
      {el}
    </Layout>
  ) : (
    <Layout>
      {el}
    </Layout>
  )
}

const AppContainer = () => {
  const [store, setStore] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const checkServerStatus = async () => {
  //     try {
  //       await axios.get("/server-status");
  //     } catch (err) {
  //       setError("Server is down. Please try again later.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   checkServerStatus();
  // }, []);


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

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        {loading ? <Loading /> : <ErrorComponent errorMessage={error} />}
      </div>
    );
  }

  return (
    <Provider store={store}>
      <ToastContainer />
      {/* <Helmet>
        <title>{getTitleFromRoute(location.pathname)}</title>
      </Helmet> */}
      <Routes>
        <Route path="/" element={genLayoutElement(<Home />)} />
        <Route path="/product" element={<ProductsPage />} />
        {/* <Route path="/product/:code" element={<Product />} /> */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/product/*" element={<PageNotFound />} />
        <Route path="/admin-test" element={genLayoutElement(<DashboardPageTest />)} />
        <Route path="/admin" element={<DashboardPage />} />
        <Route path="/admin/create-product" element={<CreateProductPage />} />
        {/* <Route path="/testing" element={<DetailProduct />} /> */}
        <Route path="/product/:code" element={genLayoutElement(<DetailProduct />)} />
      </Routes>
    </Provider>
  );
};

export default AppContainer;
