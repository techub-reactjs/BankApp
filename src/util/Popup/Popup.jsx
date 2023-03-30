import { View, Modal , StyleSheet } from "react-native";
import React from "react";

const Popup = ({ modalVisible, setModalVisible, data }) => {
  return (
  <View style={styles.centeredView}>
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        {data}
      </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  
})

export default Popup;
