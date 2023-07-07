import Home from '../../screens/home';
import Profile from '../../screens/profile';

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
    component: Profile,
    options: {
      tabBarLabel: 'Tài khoản',
    },
  },
];
