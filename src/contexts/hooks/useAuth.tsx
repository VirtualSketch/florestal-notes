import { AuthContext } from '../AuthProvider';
import { useContext } from 'react';

export function useAuth() {
  const authContext = useContext(AuthContext);

  return {
    authData: authContext.userData,
    setAuth: authContext.handleAuthenticate,
  };
}
