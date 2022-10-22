import { Center, Container, Fab, Icon } from 'native-base';

import { ReactNode } from 'react';

interface ActionButtonProps {
  label: string;
  icon: ReactNode;
}

interface AppContainerProps {
  children: ReactNode;
  actionButton?: Partial<ActionButtonProps>;
}

function AppContainer({ children, actionButton }: AppContainerProps) {
  return (
    <Center position="relative" safeAreaY={5} flex={1} bg="blueGray.300">
      {/* <StatusBar style="auto" /> */}
      <Container w="full">{children}</Container>
      {actionButton && (
        <Fab
          renderInPortal={false}
          shadow={2}
          size="sm"
          label={actionButton.label}
          icon={<Icon color="white" as={actionButton.icon} size="lg" />}
        />
      )}
    </Center>
  );
}

export default AppContainer;
