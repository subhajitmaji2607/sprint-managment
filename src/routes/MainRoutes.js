// project imports
import MainLayout from 'layout/MainLayout';

// dashboard routing
import Dashboard from 'views/dashboard/dashboardConfig';


// sample page routing
import Test from 'views/test/testConfig';

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        ...Dashboard.routes,
        ...Test.routes,
    ]
};

export default MainRoutes;
