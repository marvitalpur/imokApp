import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, Overlay} from 'react-native-elements';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

const MyTooltip = ({visible, isVisible, toggleOverlay, text, onPress}) => {
  const data = [{}, {}, {}, {}];
  return (
    <View
      style={{
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      }}>
      <TouchableOpacity
        isVisible={visible}
        onBackdropPress={visible}
        style={{
          backgroundColor: '#fff',
          borderRadius: 10,
          padding: 10,
        }}>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.text}>{text}</Text>
          <Text style={styles.text}>{text}</Text>
          <Text style={styles.text}>{text}</Text>
          <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

export default MyTooltip;

const styles = StyleSheet.create({
  text: {
    borderRadius: 10,
  },
});
