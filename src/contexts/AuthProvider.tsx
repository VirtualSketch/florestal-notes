import { PropsWithChildren, createContext, useEffect, useState } from 'react';

import { Alert } from 'react-native';
import { constants } from '../core';
import { useDatabase } from '@nozbe/watermelondb/hooks';
import { v4 as uuidv4 } from 'uuid';

type UserDataProps = {
  name: string;
  userId: string;
};

type AuthContextProps = {
  userData?: UserDataProps;
  handleAuthenticate: (name: string) => void;
};

type AuthProviderProps = PropsWithChildren<{}>;

const DEFAULT_VALUE = {
  userData: {
    name: '',
    userId: '',
  },
  handleAuthenticate: () => {},
};

export const AuthContext = createContext<AuthContextProps>(DEFAULT_VALUE);

function AuthProvider({ children }: AuthProviderProps) {
  const [userData, setUserData] = useState<UserDataProps>();

  const database = useDatabase();

  async function handleAuthenticate(name: string) {
    const uuid = uuidv4();

    const data = { userId: uuid, name };

    try {
      await database.adapter.setLocal(
        constants.STORAGE_KEY,
        JSON.stringify(data)
      );

      setUserData(data);
    } catch (err) {
      Alert.alert('Erro ao tentar realizar o Login: ', String(err));
    }
  }

  useEffect(() => {
    (async () => {
      const data = await database.adapter.getLocal(constants.STORAGE_KEY);
      console.log(data);

      if (data) {
        setUserData(JSON.parse(data));
      }
    })();
  }, [database, constants, setUserData]);

  return (
    <AuthContext.Provider value={{ userData, handleAuthenticate }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
