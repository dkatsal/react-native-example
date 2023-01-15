import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  authPage: {
    height: '100%',
    justifyContent: 'center',
  },
  imageBg: {
    flex: 1,
    justifyContent: 'center',
  },
  authForm: {
    backgroundColor: '#fff',
    padding: 10,
    width: '90%',
    maxWidth: 520,
    borderRadius: 15,
    alignSelf: 'center',
  },
  authHeader: {
    marginBottom: 20,
    alignItems: 'center',
  },
  authTitle: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '900',
  },
  authText: {
    fontSize: 18,
    lineHeight: 30,
  },
  authLine: {
    width: 80,
    height: 3,
    backgroundColor: '#095899',
    marginTop: 10,
  },
  inputContainer: {
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  passwordContainer: {
    position: 'relative',
  },
  label: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 19,
    paddingBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  btn: {
    // bottom: 40,
    width: '95%',
    // position: 'absolute',
    borderRadius: 5,
    alignSelf: 'center',
    backgroundColor: '#477fb5',
    margin: 10,
    padding: 10,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
