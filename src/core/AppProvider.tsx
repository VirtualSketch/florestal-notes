import { AuthProvider } from '../contexts';
import DatabaseProvider from '@nozbe/watermelondb/DatabaseProvider';
import { NativeBaseProvider } from 'native-base';
import RTCProvider from '../contexts/RTCProvider';
import { ReactNode } from 'react';
import { constants } from './constants';
import { database } from '../database';

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  return (
    <DatabaseProvider database={database}>
      <AuthProvider>
        <RTCProvider iceServers={constants.ICE_SERVERS}>
          <NativeBaseProvider>{children}</NativeBaseProvider>
        </RTCProvider>
      </AuthProvider>
    </DatabaseProvider>
  );
}

export default AppProvider;
