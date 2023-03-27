import { View, Text } from 'react-native'
import React from 'react'

const Popup = ({ modalVisible , setModalVisible , data }) => {
  return (
    <View>
       <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        {data}
        </Modal>
    </View>
  )
}

export default Popup