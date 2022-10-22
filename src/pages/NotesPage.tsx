import { Box, Text } from 'native-base';

import { AppContainer } from '../core';
import { Icon } from 'native-base';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
// import { Ionicons } from '@expo/vector-icons';
import VectorIcon from 'react-native-vector-icons/Ionicons';

type RouteProps = {
  Editor: undefined;
};

type NotesPageProps = NativeStackScreenProps<RouteProps>;

function NotesPage({ navigation }: NotesPageProps) {
  return (
    <AppContainer
      actionButton={{
        icon: (
          <Icon
            as={<VectorIcon name="add-sharp" size={30} color="#000" />}
            color="red.500"
            onPress={() => navigation.navigate('Editor')}
          />
        ),
      }}
    >
      <Box>
        <Text>Notes Page</Text>
      </Box>
    </AppContainer>
  );
}

export default NotesPage;
