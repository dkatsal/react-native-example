import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#E8EAED',
  },
  usersWrapper: {
    paddingTop: 10,
    marginBottom: 10,
    paddingHorizontal: 20,
    maxHeight: '85%',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '55%',
  },
  id: {
    color: '#414040',
    width: 30,
  },
  name: {
    color: '#414040',
    marginLeft: 5,
    width: '100%',
  },
  role: {
    color: '#414040',
  },
  itemRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 10,
  },
  editUserWrapper: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#FFF',
  },
  block: {
    height: 80,
    padding: 10,
    borderRadius: 10,
  },
  label: {
    color: '#414040',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 16,
  },
  input: {
    color: '#414040',
    height: 40,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#E8EAED',
    padding: 10,
    borderRadius: 5,
  },
  btn: {
    bottom: 40,
    width: 120,
    position: 'absolute',
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: '#477fb5',
    padding: 10,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  logoutBtn: {
    bottom: 40,
    width: 80,
    position: 'absolute',
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
});
