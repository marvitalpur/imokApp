import {
  StyleSheet,
  Text,
  Animated,
  View,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import Header from '../components/Header';

import {Colors} from '../assets/constants/Colors';
import Mymodal from '../components/Mymodal';
import Card from '../components/Card';

const CartScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <View
            style={{
              paddingHorizontal: 15,
              marginTop: 15,
              paddingTop: 15,
            }}>
            <Header
              header
              headText={'Cart'}
              onPress={() => navigation.goBack()}
            />
          </View>
          <View style={{}}>
            <Card
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
      <Mymodal
        width={'90%'}
        icon1
        text1={'Remove Successfully'}
        logoutbtn={'Close'}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        innerButton={() => navigation.navigate('HomeScreen')}
      />
    </>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BackgroundColorW,
    justifyContent: 'flex-end',
  },
});
