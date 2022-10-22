import { Button, Flex } from 'native-base';
import { RichEditor, RichToolbar } from 'react-native-pell-rich-editor';

import { Alert } from 'react-native';
import { UserModel } from '../database/model/userModel';
import { database } from '../database';
import { useRef } from 'react';

function EditorPage() {
  const editorRef = useRef(null);

  let editorText = '';

  async function handleSave() {
    await database.write(async () => {
      await database.get<UserModel>('users').create((data) => {
        data.name = 'Usuario Teste';
      });
    });
    Alert.alert('Created');
  }

  return (
    <Flex flex={1}>
      <RichEditor
        ref={editorRef}
        style={{ flex: 1 }}
        onChange={(text) => (editorText = text)}
      />
      <RichToolbar editor={editorRef} />
      <Button mt="4" borderRadius={0} onPress={handleSave}>
        Publicar
      </Button>
    </Flex>
  );
}

export default EditorPage;
