import {
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Animated,
  Easing,
} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import Header from '../components/Header';
import Assets from '../assets';
import Card from '../components/Card';
import {Colors} from '../assets/constants/Colors';

const MealDetails = ({navigation}) => {
  const slideAnim = useRef(new Animated.Value(100)).current;
  const opacityAnim = useRef(new Animated.Value(0.75)).current;

  useEffect(() => {
    const delay = setTimeout(() => {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }),
      ]).start();
    }, 500); // Delay in milliseconds

    return () => clearTimeout(delay);
  }, [slideAnim, opacityAnim]);

  // useEffect(() => {
  //   Animated.timing(translation, {
  //     toValue: 100,
  //     duration: 2000,
  //     useNativeDriver: true,
  //   }).start();
  // }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{
            flex: 1,
            paddingHorizontal: 15,
            marginTop: 15,
            paddingBottom: 10,
          }}>
          <Header
            header
            headText={'Green Salad'}
            onPress={() => navigation.goBack()}
          />
          <Animated.View
            style={[
              {
                transform: [{translateX: slideAnim}],
                opacity: opacityAnim,
              },
            ]}>
            <View style={styles.contentContainere}>
              <Image
                source={Assets.FoodItems.FoodItem1}
                resizeMode="contain"
                style={{width: '100%', height: '100%'}}
              />
            </View>
            <Card card1 />
          </Animated.View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BackgroundColorW,
    justifyContent: 'flex-end',
  },
  contentContainere: {
    width: 164,
    height: 164,
    alignSelf: 'center',
    backgroundColor: '#FFFF',
    borderRadius: 100,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
    shadowColor: '#000',
    paddingBottom: 4,
  },
});

export default MealDetails;
