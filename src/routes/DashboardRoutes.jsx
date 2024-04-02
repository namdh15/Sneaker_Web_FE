import { lazy } from 'react';

// project imports
// import Loadable from 'ui-component/Loadable';
import { DashboardLayout } from '../components';
import { DashboardPage } from '../pages';
import CreateProductPage from '../pages/CreateProductPage';

// const DashboardPage = lazy(() => import('../pages'));
// const DashboardLayout = lazy(() => import('../components'));

// dashboard routing
// const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
// const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
// const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
// const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
// const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
// const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
// const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const DashboardRoutes = {
  path: '/admin',
  element: <DashboardLayout />,
  children: [
    {
      path: '',
      element: <DashboardPage />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardPage />
        }
      ]
    },
    {
      path: 'create-product',
      element: <CreateProductPage />
    }
  ]
};

export default DashboardRoutes;
