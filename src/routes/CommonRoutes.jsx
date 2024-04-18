import { Layout } from '../components';
import {
  AboutPage,
  Cart,
  Checkout,
  ContactPage,
  Home,
  Login,
  OrderDetail,
  PageNotFound,
  ProductsPage,
  Register,
  UserProfile
} from '../pages';
import DashboardPageTest from '../pages/dashboard/DashboardListProducts';
import DetailProduct from '../pages/DetailProduct';


// ==============================|| MAIN ROUTING ||============================== //

const CommonRoutes = {
  path: '/',
  element: <Layout />,
  children: [
    {
      path: '',
      element: <Home />
    },
    {
      path: 'products',
      element: <ProductsPage />,
      children: [
        {
          path: '*',
          element: <PageNotFound />
        }
      ]
    },
    {
      path: 'products/:id',
      element: <DetailProduct />
    },
    {
      path: 'about',
      element: <AboutPage />
    },
    {
      path: 'contact',
      element: <ContactPage />
    },
    {
      path: 'cart',
      element: <Cart />
    },
    {
      path: 'login',
      element: <Login />
    },
    {
      path: 'register',
      element: <Register />
    },
    {
      path: 'profile',
      element: <UserProfile />
    },
    {
      path: 'checkout',
      element: <Checkout />
    },
    {
      path: '*',
      element: <PageNotFound />
    },
    {
      path: 'admin-test',
      element: <DashboardPageTest />
    },
    {
      path: 'order',
      element: <OrderDetail />
    },
    {
      path: 'testing',
      element: <DetailProduct />
    },
  ]
};

export default CommonRoutes;
