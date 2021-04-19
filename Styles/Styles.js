import { StyleSheet, StatusBar, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
  },
  title: {
    position: 'absolute',
    fontSize: 22,
    zIndex: 100,
    top: 140,
    transform: [{ rotate: '-45deg' }],
  },

  photoShadow: {
    borderRadius: 50,
    borderWidth: 10,

    borderColor: 'black',
    width: '90%',
    height: '90%',
    left: 25,
    top: 10,
    zIndex: -10,
  },
  photo: {
    borderRadius: 50,
    position: 'absolute',
    borderWidth: 2,
    borderColor: 'black',
    width: '90%',
    height: '90%',
    top: 5,
    left: 20,
  },
  buttonContainer: {
    width: '100%',
    padding: 10,
  },
  button: {
    backgroundColor: 'black',
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    fontWeight: '500',
    color: 'white',
    textTransform: 'uppercase',
  },
});

export default styles;
