/**
 * Used to navigating without the navigation prop
 * @see https://reactnavigation.org/docs/navigating-without-navigation-prop/
 *
 * You can add other navigation functions that you need and export them
 */
import {
  CommonActions,
  createNavigationContainerRef,
  DrawerActions,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export const navigate = (name: any, params: any) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
};

export const navigateAndReset = (routes = [], index = 0) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index,
        routes,
      }),
    );
  }
};

export const navigateAndSimpleReset = (name: any, index = 0) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index,
        routes: [{name}],
      }),
    );
  }
};

export const navigateToOtherStack = (name: any, index = 0) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index,
        routes: [{name}],
      }),
    );
  }
};

export const setParams = (params: never) => {
  if (navigationRef.isReady()) {
    navigationRef.setParams(params);
  }
};

export const goBack = () => {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
};

export const openDrawer = () => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(DrawerActions.openDrawer());
  }
};

export const closeDrawer = () => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(DrawerActions.closeDrawer());
  }
};

export const toggleDrawer = () => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(DrawerActions.toggleDrawer());
  }
};
