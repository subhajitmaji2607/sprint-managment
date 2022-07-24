// assets
import { IconDashboard,IconAward } from '@tabler/icons';
// constant
const icons = { IconDashboard,IconAward };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'test',
            title: 'Test',
            type: 'item',
            url: '/test',
            icon: icons.IconAward,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
