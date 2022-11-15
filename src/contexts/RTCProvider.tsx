import { PropsWithChildren, createContext, useMemo } from 'react';

import { RTCPeerConnection } from 'react-native-webrtc';

type RTCProviderProps = PropsWithChildren<{
  iceServers: string[];
}>;

type RTCContextProps = {
  rtcConnection: RTCPeerConnection;
} | null;

export const RTCContext = createContext<RTCContextProps>(null);

function RTCProvider({ children, iceServers }: RTCProviderProps) {
  const iceConfig = useMemo(
    () => iceServers.map((server) => ({ urls: server })),
    [iceServers]
  );

  const rtcConnection = new RTCPeerConnection({ iceServers: iceConfig });

  return (
    <RTCContext.Provider value={{ rtcConnection }}>
      {children}
    </RTCContext.Provider>
  );
}

export default RTCProvider;
