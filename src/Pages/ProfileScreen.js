import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MenuSideBar from './MenuSideBar'; // Import the MenuSideBar component

const ProfileScreen = () => {
  const menuSideBarRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuPress = () => {
    setIsMenuOpen(true);
  };

  const closeModal = () => {
    setIsMenuOpen(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuIconContainer} onPress={handleMenuPress}>
        <Icon name="menu" size={24} color="#333" />
      </TouchableOpacity>
      {/* The Modal for the pop-out menu */}
      <Modal animationType="slide" visible={isMenuOpen} onRequestClose={closeModal}>
        <MenuSideBar closeModal={closeModal} />
      </Modal>
      <View style={styles.content}>
        <Image
          source={require('../../assets/pexels-rachel-claire-5490235.jpg')}
          style={styles.profilePhoto}
        />
        <Text style={styles.profileText}>Welcome to the Profile Screen!</Text>
      </View>
      <View style={styles.footer}>
        {/* Footer icons */}
        <Text>Home</Text>
        <Text>List</Text>
        <Text>Logout</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  menuIconContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 999,
    padding: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileText: {
    fontSize: 24,
    color: '#333',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    height: 70,
  },
});

export default ProfileScreen;
