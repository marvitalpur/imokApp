import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import {Button, Overlay} from 'react-native-elements';
import {CheckIcon} from '../assets/Svg/SocialSvg';
import {Colors} from '../assets/constants/Colors';

const Mymodal = ({
  modalVisible,
  setModalVisible,
  cancel,
  innerButton,
  modaltext1,
  logoutbtn,
  cancelbtn,
  icon1,
  text1,
  fontSize,
  text2,
  width,
}) => {
  return (
    <Overlay
      overlayStyle={{width: 100}}
      style={{}}
      // animationType="slide" // transparent={false}
      visible={modalVisible}
      onRequestClose={() => {
        // Alert.alert('Modal has been closed.');
        setModalVisible(modalVisible);
      }}>
      <View style={{width: 100,hei}}>
        {icon1 && (
          <View style={{padding: 15}}>
            <CheckIcon />
          </View>
        )}
        {text1 && (
          <View>
            <Text
              style={[
                styles.modalText,
                {fontFamily: 'NoirPro-SemiBold', fontSize: fontSize},
              ]}>
              {text1}
            </Text>
          </View>
        )}
        {text2 && (
          <View>
            <Text style={[styles.modalText, {color: '#C8C6C6'}]}>{text2}</Text>
          </View>
        )}
        <View style={{flexDirection: 'row'}}>
          {cancel && (
            <Pressable
              style={[
                styles.button,
                styles.buttonClose,
                {backgroundColor: Colors.secondary},
              ]}
              onPress={innerButton}>
              <Text style={[styles.textStyle, {color: Colors.cards.headText}]}>
                {cancelbtn}
              </Text>
            </Pressable>
          )}
          <Pressable
            style={[styles.button, styles.buttonClose, {width: width}]}
            onPress={innerButton}>
            <Text style={[styles.textStyle, {color: Colors.secondary}]}>
              {logoutbtn}
            </Text>
          </Pressable>
        </View>
      </View>
    </Overlay>
  );
};

const styles = StyleSheet.create({
  modalView: {
    // width: '80%',
    backgroundColor: 'green',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 15,
  },
  button: {
    borderRadius: 15,
    height: 39,
    justifyContent: 'center',
    // padding: 15,
    elevation: 2,
    // paddingRight: 35,
    // paddingLeft: 35,
    margin: 5,
  },
  buttonClose: {
    backgroundColor: '#C00006',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 30,
    fontFamily: 'NoirPro-SemiBold',
  },
  modalText: {
    paddingBottom: 15,
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 15,
    color: '#000000',
  },
});

export default Mymodal;
