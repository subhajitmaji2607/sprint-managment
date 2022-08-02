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
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard',
            icon: 'dashboard',
            breadcrumbs: false
        },
        {
            id: 'email',
            title: 'Email',
            type: 'item',
            url: '/email',
            icon: 'mail',
            breadcrumbs: false
        },
        {
            id: 'test',
            title: 'Test',
            type: 'item',
            url: '/test',
            icon: 'cruelty_free',
            breadcrumbs: false
        }
    ]
};

export default dashboard;
