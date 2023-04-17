import {StyleSheet, Text, Animated, Easing, View} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import {HEIGHT} from '../assets/constants/Dimensions';

const TextAnimation = ({
  item,
  title,
  subtitle,
  subtitle2,
  subtitle3,
  color1,
  color2,
}) => {
  const slideAnim = useRef(new Animated.Value(100)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const delay = setTimeout(() => {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start();
    }, 500); // Delay in milliseconds

    return () => clearTimeout(delay);
  }, [slideAnim, opacityAnim]);
  return (
    <Animated.View
      style={{
        // paddingTop: 25,
        paddingHorizontal: 25,
        paddingTop: HEIGHT < 700 ? HEIGHT / 15 : HEIGHT / 11.5,
        transform: [{translateY: slideAnim}],
        opacity: opacityAnim,
      }}>
      <Text
        style={[
          styles.title,
          {
            lineHeight: HEIGHT < 700 ? 45 : 35,
            color: color1,
          },
        ]}
        numberOfLines={2}
        adjustsFontSizeToFit>
        {title}
      </Text>
      <Text
        style={[
          styles.subTitle,
          {
            color: color2,
            lineHeight: HEIGHT < 700 ? 25 : 35,
          },
        ]}
        numberOfLines={2}
        adjustsFontSizeToFit>
        {subtitle}
      </Text>
      <Text
        style={[
          styles.subTitle,
          {
            color: color2,
            lineHeight: HEIGHT < 700 ? 25 : 30,
          },
        ]}
        numberOfLines={2}
        adjustsFontSizeToFit>
        {subtitle2}
      </Text>
      <Text
        style={[
          styles.subTitle,
          {
            color: color2,
            lineHeight: HEIGHT < 700 ? 25 : 30,
          },
        ]}
        numberOfLines={2}
        adjustsFontSizeToFit>
        {subtitle3}
      </Text>
    </Animated.View>
  );
};

export default TextAnimation;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Crispy Seafood',
    fontSize: 27,
    fontWeight: 500,
    letterSpacing: 1.75,
  },
  subTitle: {
    fontFamily: 'NoirPro-Italic',
    fontSize: 16,
    fontWeight: 200,
    color: '#1E0203',
    marginTop: 5,
    // marginBottom: 65,
  },
});
