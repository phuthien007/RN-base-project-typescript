import Profile from '../../screens/profile';
import ChangePassword from '../../screens/profile/change-password';
import DetailProfile from '../../screens/profile/detail-profile';

export const ROUTES = [
  {
    name: 'Profile',
    component: Profile,
    options: {
      title: 'Profile',
    },
  },
  {
    name: 'DetailProfile',
    component: DetailProfile,
    options: {
      title: 'DetailProfile',
      headerShown: true,
    },
  },
  {
    name: 'ChangePassword',
    component: ChangePassword,
    options: {
      title: 'ChangePassword',
      headerShown: true,
    },
  },
];
