import { useRoutes } from 'react-router-dom';

// routes
import DashboardRoutes from './DashboardRoutes';
import CommonRoutes from './CommonRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([
    DashboardRoutes,
    CommonRoutes
  ]);
}
