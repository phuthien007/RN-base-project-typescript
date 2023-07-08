import Home from '../../screens/home';
import HomeNavigation from '../Home';
import ProfileNavigation from '../Profile';

export const ROUTES = [
  {
    icon: 'home',
    name: 'HomeNavigation',
    component: HomeNavigation,
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
