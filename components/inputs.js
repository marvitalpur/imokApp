import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Menu, TextInput, TouchableRipple} from 'react-native-paper';
import {Colors} from '../assets/constants/Colors';

import Icon from 'react-native-vector-icons/Feather';
import {WIDTH} from '../assets/constants/Dimensions';
import {colors} from 'react-native-swiper-flatlist/src/themes';
const Input = ({
  text,
  setText,
  placeholder,
  formKey,
  gender,
  backgroundColor,
  borderRadius,
  height,
}) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const onChangeHandler = (value, name) => {
    // how to handle for each state field
    setText(form => ({
      ...form,
      [name]: value,
    }));
  };
  return (
    <>
      {gender ? (
        <GenderMenu
          value={text}
          onChangeHandler={onChangeHandler}
          formKey={formKey}
        />
      ) : (
        <TextInput
          placeholder={placeholder}
          value={text}
          onChangeText={text => onChangeHandler(text, formKey)}
          activeUnderlineColor="transparent"
          underlineColor="transparent"
          selectionColor="#000"
          placeholderTextColor={Colors.Red}
          theme={{roundness: borderRadius}}
          style={{
            // fontFamily: Fonts.default,
            fontWeight: '400',
            height: height,
            opacity: text.length < 1 ? 0.5 : 1,
            fontSize: 14,
            borderRadius: borderRadius,
            backgroundColor: backgroundColor,
            opacity: 0.3,
            shadowColor: Colors.tertiary,
            shadowOffset: {
              width: 0,
              height: 7,
            },
            shadowOpacity: 0.43,
            shadowRadius: 9.51,
            elevation: 15,
          }}
        />
      )}
    </>
  );
};

export default Input;

const GenderMenu = ({value, onChangeHandler, formKey}) => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  return (
    <Menu
      visible={visible}
      onDismiss={closeMenu}
      style={{
        width: WIDTH / 2.5,
        // marginLeft: 20,
      }}
      contentStyle={{
        backgroundColor: Colors.secondary,
        borderRadius: 10,
      }}
      anchor={
        <TouchableRipple onPress={openMenu} style={styles.inputBtn}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
            }}>
            <Text
              style={[
                styles.btnText,
                {
                  opacity: value.length < 1 ? 0.5 : 1,
                  color: value.length < 1 ? Colors.primary : Colors.tertiary,
                },
              ]}>
              {value ? value : 'Select Gender'}
            </Text>
            <Icon
              name="chevron-down"
              size={20}
              color={value.length < 1 ? Colors.primary : Colors.tertiary}
              style={{marginLeft: 5}}
            />
          </View>
        </TouchableRipple>
      }>
      <>
        <Menu.Item
          onPress={() => {
            closeMenu();
            onChangeHandler('Male', formKey);
          }}
          title="Male"
        />
        <Menu.Item
          onPress={() => {
            closeMenu();
            onChangeHandler('Female', formKey);
          }}
          title="Female"
        />
        <Menu.Item
          onPress={() => {
            closeMenu();
            onChangeHandler('Others', formKey);
          }}
          title="Others"
        />
      </>
    </Menu>
  );
};

const styles = StyleSheet.create({
  inputBtn: {
    width: WIDTH / 2.5,
    paddingLeft: 5,
    // marginLeft: 20,
    // marginVertical: 10,
    justifyContent: 'center',
    backgroundColor: Colors.secondary,
    shadowColor: Colors.tertiary,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  btnText: {
    fontSize: 14,
    // fontFamily: Fonts.default,
    fontWeight: '200',
  },
});
