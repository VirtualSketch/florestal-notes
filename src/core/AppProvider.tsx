import { AuthProvider } from '../contexts';
import DatabaseProvider from '@nozbe/watermelondb/DatabaseProvider';
import { NativeBaseProvider } from 'native-base';
import { ReactNode } from 'react';
import { database } from '../database';

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  return (
    <DatabaseProvider database={database}>
      <AuthProvider>
        <NativeBaseProvider>{children}</NativeBaseProvider>
      </AuthProvider>
    </DatabaseProvider>
  );
}

export default AppProvider;
