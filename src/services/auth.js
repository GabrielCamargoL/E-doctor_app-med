import { AsyncStorage } from 'react-native';

export const TOKEN_KEY = 'token';

export const KEY_ID = 'authID';

export const SESSION_ID = 'sessionID';

export const getToken = async () => await AsyncStorage.getItem(TOKEN_KEY);

export const setToken = async (token) => {
  await AsyncStorage.setItem(TOKEN_KEY, token);
};

export const getIdKey = async () => await AsyncStorage.getItem(KEY_ID);

export const setIdKey = async (id) => {
  await AsyncStorage.setItem(KEY_ID, id);
};

export const getSessionId = async () => await AsyncStorage.getItem(SESSION_ID);

export const setSessionId = async (id) => {
  await AsyncStorage.setItem(SESSION_ID, id);
};

export const signOut = async () => {
  await AsyncStorage.removeItem(TOKEN_KEY);
  await AsyncStorage.removeItem(KEY_ID);
  await AsyncStorage.clear();
};