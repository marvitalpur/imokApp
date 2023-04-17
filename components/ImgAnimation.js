import {StyleSheet, Text, Image, View, Easing, Animated} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';

const ImgAnimation = ({Food1, Food2}) => {
  const translateXValue = useRef(new Animated.Value(20)).current;
  const translateYValue = useRef(new Animated.Value(300)).current;
  const scaleXValue = useRef(new Animated.Value(0.1)).current;
  const translateXValueSmall = useRef(new Animated.Value(-70)).current;
  const translateYValueSmall = useRef(new Animated.Value(-295)).current;
  const scaleXValueSmall = useRef(new Animated.Value(3.5)).current;
  const [f1, setF1] = useState(Food1);
  const [f2, setF2] = useState(Food2);

  const animate1 = () => {
    Animated.timing(translateXValue, {
      toValue: -80,
      duration: 1000,
      delay: 700,
      useNativeDriver: true,
    }).start();

    Animated.timing(translateYValue, {
      toValue: -80,
      duration: 1000,
      delay: 700,
      easing: Easing.bezier(0.6, 0.1, 0.6, 1.22),
      useNativeDriver: true,
    }).start();

    Animated.timing(scaleXValue, {
      toValue: 1.1,
      duration: 1000,
      delay: 700,
      useNativeDriver: true,
    }).start();
  };
  const animate2 = () => {
    Animated.timing(translateXValueSmall, {
      toValue: 10,
      duration: 1000,
      delay: 700,
      useNativeDriver: true,
    }).start();

    Animated.timing(translateYValueSmall, {
      toValue: 30,
      duration: 1000,
      delay: 700,
      easing: Easing.bezier(0.6, 0.1, 0.6, 1.22),
      useNativeDriver: true,
    }).start();

    Animated.timing(scaleXValueSmall, {
      toValue: 1,
      duration: 1000,
      delay: 700,
      useNativeDriver: true,
    }).start();
  };
  const resetAnimate1 = () => {
    Animated.timing(translateXValue, {
      toValue: 20,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    Animated.timing(translateYValue, {
      toValue: 300,
      duration: 1000,
      easing: Easing.bezier(0.6, 0.1, 0.6, 1.22),
      useNativeDriver: true,
    }).start();

    Animated.timing(scaleXValue, {
      toValue: 0.1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  const resetAnimate2 = () => {
    Animated.timing(translateXValueSmall, {
      toValue: -70,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    Animated.timing(translateYValueSmall, {
      toValue: -295,
      duration: 1000,
      easing: Easing.bezier(0.6, 0.1, 0.6, 1.22),
      useNativeDriver: true,
    }).start();

    Animated.timing(scaleXValueSmall, {
      toValue: 3.5,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  useEffect(() => {
    setTimeout(() => setF1(Food1), 1000);
    setTimeout(() => setF2(Food2), 1000);
    resetAnimate1();
    resetAnimate2();
    setTimeout(() => {
      animate1();
      animate2();
    }, 1000);
  }, [translateXValue, Food1, Food2]);

  return (
    <>
      <View
        style={{
          width: '100%',
          height: '90%',
          position: 'absolute',
        }}>
        <Animated.View
          style={{
            paddingLeft: 30,
            paddingLeft: 30,
            transform: [
              {translateY: translateYValue},
              {translateX: translateXValue},
              {scale: scaleXValue},
            ],
          }}>
          <Animated.Image
            source={f1}
            resizeMode="contain"
            style={[{width: '100%'}]}
          />
        </Animated.View>
      </View>
      <View
        style={{
          width: 100,
          height: 100,
          position: 'absolute',
          right: -200,
          top: 200,
        }}>
        <Animated.View
          style={{
            paddingLeft: 30,
            transform: [
              {translateX: translateXValueSmall},
              {translateY: translateYValueSmall},
              {scale: scaleXValueSmall},
            ],
          }}>
          <Animated.Image
            source={f2}
            resizeMode="contain"
            style={[{width: '100%'}]}
          />
        </Animated.View>
      </View>
    </>
  );
};

export default ImgAnimation;
const styles = StyleSheet.create({});
