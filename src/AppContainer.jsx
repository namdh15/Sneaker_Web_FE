import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { Helmet } from "react-helmet";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/item-components/Loading";
import createAppStore from "./redux/store";
import { Home, Product, Products, AboutPage, ContactPage, Cart, Login, Register, Checkout, PageNotFound } from "./pages"
import Layout from "./components/layouts/Layout";
import UserProfile from "./pages/UserProfile";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import DashboardPage from "./pages/DashboardPage";
import DetailProduct from "./pages/DetailProduct";
import CreateProductPage from "./pages/CreateProductPage";
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
        <Route path="/product" element={<Products />} />
        <Route path="/product/:code" element={<Product />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/product/*" element={<PageNotFound />} />
        <Route path="/admin" element={genLayoutElement(<DashboardPage />)} />
        <Route path="/admin/create-product" element={<CreateProductPage />} />
        <Route path="/testing" element={<DetailProduct />} />
      </Routes>
    </Provider>
  );
};

export default AppContainer;
