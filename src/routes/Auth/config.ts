import ForgotPassword from '../../screens/auth/forgot-password';
import Login from '../../screens/auth/login';

export const ROUTES = [
  {
    name: 'Login',
    component: Login,
    options: {
      title: 'Login',
    },
  },
  {
    name: 'ForgotPassword',
    component: ForgotPassword,
    options: {
      title: 'ForgotPassword',
    },
  },
];
