import { Avatar, Center, Flex, Text } from 'native-base';

import { getNameInitialsString } from '../utils';

interface ProfileProps {
  name: string;
  avatarUrl?: string;
}

interface ProfileMenuProps {
  profileData: ProfileProps;
}

function ProfileMenu({ profileData }: ProfileMenuProps) {
  const shortName = getNameInitialsString(profileData.name);

  return (
    <Center>
      <Avatar bg="amber.500" source={{ uri: profileData.avatarUrl }}>
        {shortName}
      </Avatar>
      <Text fontSize="lg">{profileData.name}</Text>
    </Center>
  );
}

export default ProfileMenu;
