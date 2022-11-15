import {
  Box,
  Button,
  Center,
  FormControl,
  Input,
  Text,
  VStack,
} from 'native-base';

import { AppContainer } from '../core';
import { useAuth } from '../contexts/hooks';
import { useState } from 'react';

function LoginPage() {
  const [userName, setUserName] = useState<string>();

  const { setAuth } = useAuth();

  function handleAuthentication() {
    if (userName) {
      setAuth(userName);
    }
  }

  return (
    <AppContainer>
      <Box w="100%">
        <Center mb="16">
          <Text fontSize="3xl">Welcome to</Text>
          <Text fontSize="3xl">Florestal Notes</Text>
        </Center>
        <FormControl isRequired>
          <VStack space={4}>
            <FormControl.Label>Full Name</FormControl.Label>
            <Input
              type="text"
              placeholder="John Doe..."
              onChange={(e) => setUserName(e.nativeEvent.text)}
            />
            <FormControl.HelperText>
              Enter with name and last name
            </FormControl.HelperText>
            <Button
              bg="green.500"
              isDisabled={!userName}
              onPress={handleAuthentication}
            >
              Register
            </Button>
          </VStack>
        </FormControl>
      </Box>
    </AppContainer>
  );
}

export default LoginPage;
