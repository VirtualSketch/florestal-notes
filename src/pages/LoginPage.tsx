import { Box, Button, FormControl, Input, VStack } from 'native-base';

import { AppContainer } from '../core';
import { useAuth } from '../contexts/hooks';
import { useState } from 'react';

function LoginPage() {
  const [userName, setUserName] = useState('');

  const { setAuth } = useAuth();

  function handleAuthentication() {
    setAuth(userName);
  }

  return (
    <AppContainer>
      <Box w="100%">
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
            <Button onPress={handleAuthentication}>Register</Button>
          </VStack>
        </FormControl>
      </Box>
    </AppContainer>
  );
}

export default LoginPage;
