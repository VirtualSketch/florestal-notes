import { Divider, VStack } from 'native-base';

import { AppContainer } from '../core';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import ProfileMenu from '../components/ProfileMenu';
import { TouchableOpacity } from 'react-native';
import UserCard from '../components/UserCard';
import { useAuth } from '../contexts/hooks';

type RouteProps = {
  Home: undefined;
  User: undefined;
};

type HomePageProps = NativeStackScreenProps<RouteProps>;

function HomePage({ navigation }: HomePageProps) {
  const { authData } = useAuth();
  return (
    <AppContainer>
      <VStack h="full" w="full" space={5}>
        <ProfileMenu profileData={{ name: authData?.name ?? 'User' }} />
        <Divider />
        <TouchableOpacity onPress={() => navigation.navigate('User')}>
          <UserCard />
        </TouchableOpacity>
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </VStack>
    </AppContainer>
  );
}

export default HomePage;
