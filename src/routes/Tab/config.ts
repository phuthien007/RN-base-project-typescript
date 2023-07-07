import Home from '../../screens/home';
import ProfileNavigation from '../Profile';

export const ROUTES = [
  {
    icon: 'home',
    name: 'Dashboard',
    component: Home,
    options: {
      tabBarLabel: 'Dashboard',
    },
  },
  {
    icon: 'user',
    name: 'Account',
    component: ProfileNavigation,
    options: {
      tabBarLabel: 'Tài khoản',
    },
  },
];
