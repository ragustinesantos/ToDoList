/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Pressable,
  Alert,
  Image,
} from 'react-native';
import {CommonStyles} from '../utils/CommonStyles';
import MainLayout from '../layouts/MainLayout';

export default function AboutScreen({
  navigation,
}: {
  navigation: any;
}): React.JSX.Element {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <MainLayout>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Here are the awesome easter eggs!
            </Text>
            <Image
              style={styles.modalImg}
              source={require('../assets/easter-eggs.png')}
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Thank you!</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={styles.txtView}>
        <Text style={{fontWeight: 600, fontSize: 32}}>Broke Buddy</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={{fontWeight: 400, fontSize: 20}}>
            Raymond Santos (Click me!)
          </Text>
        </TouchableOpacity>
        <Text style={{fontWeight: 400, fontSize: 20}}>11 - 12 - 2024</Text>
      </View>
      <View style={CommonStyles.navBtn}>
        <Button title="Go to Home" onPress={() => navigation.goBack()} />
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  txtView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImg: {
    width: 240,
    height: 240,
    marginBottom: 20,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
