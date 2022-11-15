import EditorPage from '../pages/EditorPage';
import HomeTabRoutes from './HomeTabRoutes';
import LoginPage from '../pages/LoginPage';
import { NavigationContainer } from '@react-navigation/native';
import UserPage from '../pages/UserPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../contexts/hooks';
import { useDatabase } from '@nozbe/watermelondb/hooks';

const Stack = createNativeStackNavigator();

function Routes() {
  const { authData } = useAuth();

  console.log(authData);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {authData ? (
          <>
            <Stack.Screen
              name="Home"
              component={HomeTabRoutes}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="User" component={UserPage} />
            <Stack.Screen name="Editor" component={EditorPage} />
          </>
        ) : (
          <Stack.Screen
            name="Login"
            component={LoginPage}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
