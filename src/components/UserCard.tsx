import { Avatar, Box, Flex, HStack, Text } from 'native-base';

import MCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

function UserCard() {
  return (
    <HStack space={3} px="2" alignItems="center">
      <HStack flex="1" space={3} mr="4">
        <Avatar bg="red.300" />
        <Box>
          <Text>Nome do Usuario</Text>
          <Flex direction="row" align="center">
            <MCommunityIcon
              name="checkbox-blank-circle"
              size={12}
              color="green"
            />
            <Text ml="1">Online</Text>
          </Flex>
        </Box>
      </HStack>
      <MaterialIcon name="arrow-forward-ios" size={15} />
    </HStack>
  );
}

export default UserCard;
