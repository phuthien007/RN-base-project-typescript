import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    color: '#fff',
    padding: 10,
  },

  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },

  input: {
    height: 50,
    backgroundColor: '#323232',
    borderRadius: 10,
    color: '#fff',
    fontSize: 18,
    marginTop: 10,
    padding: 10,
  },

  button: {
    backgroundColor: '#A370F7',

    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  skill: {
    backgroundColor: '#1F1E25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10,
  },

  skillText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },

  // shadown
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },

    shadowOpacity: 0.22,
    shadowRadius: 3.22,

    elevation: 1.1,
  },

  menucard: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius * 2,
    marginHorizontal: SIZES.base * 2,
  },
});
