import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { firebase } from '../../src/firebase/config';
import { useNavigation } from '@react-navigation/native';

const MyListScreen = ({ route }) => {
  const listRef = firebase.firestore().collection('lists');
  const [textHeading, onChangeHeadingText] = useState(route.params.item.heading); // Corrected to 'heading'
  const navigation = useNavigation();

  const updateList = () => {
    if (textHeading && textHeading.length > 0 && textHeading !== route.params.item.heading) {
      listRef
        .doc(route.params.item.id)
        .update({
          heading: textHeading,
        })
        .then(() => {
          navigation.navigate('List');
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textField}
        onChangeText={onChangeHeadingText}
        value={textHeading}
        placeholder='Update List'
      />
      <Pressable style={styles.buttonUpdate} onPress={updateList}> {/* Removed unnecessary arrow function */}
        <Text>Update</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  textField: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  buttonUpdate: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});

export default MyListScreen;
