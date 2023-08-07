import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Alert, Keyboard, Pressable } from 'react-native';
import { firebase } from '../../src/firebase/config';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

const ListPage = () => {
  const [lists, setLists] = useState([]);
  const listRef = firebase.firestore().collection('lists');
  const [addData, setAddData] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    listRef
      .orderBy('createdAt', 'desc')
      .onSnapshot(
        querySnapshot => {
          const lists = []
          querySnapshot.forEach((doc) => {
            const { heading } = doc.data()
            lists.push({
              id: doc.id,
              heading,
            })
          })
          setLists(lists)
        }
      )
  }, [])

  const deleteList = (listId) => {
    listRef
      .doc(listId)
      .delete()
      .then(() => {
        alert("Deleted Successfully");
      })
      .catch(error => {
        alert(error);
      })
  }

  const addList = () => {
    if (addData && addData.length > 0) {
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();
      const data = {
        heading: addData,
        createdAt: timestamp
      };
      listRef
        .add(data)
        .then(() => {
          setAddData('');
          Keyboard.dismiss();
        })
        .catch((error) => {
          alert(error);
        })
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.formcontainer}>
        <TextInput
          style={styles.input}
          placeholder='Add a New List'
          placeholderTextColor='#aaaaaa'
          onChangeText={(heading) => setAddData(heading)}
          value={addData}
          underlineColorAndroid='transparent'
          autoCapitalize='none'
        />
        <TouchableOpacity style={styles.button} onPress={addList}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={lists}
        numColumns={1}
        renderItem={({ item }) => (
          <View>
            <Pressable
              style={styles.container}
              onPress={() => navigation.navigate('MyList', { item })}
            >
              <FontAwesome
                name='trash-o'
                color='red'
                onPress={() => deleteList(item.id)} 
                style={styles.listIcon}
              />
              <View style={styles.innerContainer}>
                <Text style={styles.itemHeading}>
                  {item.heading[0].toUpperCase() + item.heading.slice(1)}
                </Text>
              </View>
            </Pressable>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  formcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'white',
    elevation: 10,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  button: {
    marginLeft: 10,
    paddingHorizontal: 16,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  innerContainer: {
    flex: 1,
  },
  itemHeading: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  listIcon: {
    marginRight: 16,
  },
});

export default ListPage;
