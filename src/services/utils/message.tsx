import {Toast} from '@ant-design/react-native';

export const showSuccessMessage = (message: string) => {
  Toast.success({
    content: message,
    duration: 1,
    stackable: true,
  });
};

export const showErrorMessage = (message: string) => {
  Toast.fail({
    content: message,
    duration: 1,
    stackable: true,
  });
};

export default {
  showSuccessMessage,
  showErrorMessage,
};
