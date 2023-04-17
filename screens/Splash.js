import React, {useRef, useEffect} from 'react';
import {View, Text, Animated} from 'react-native';

const SlideUpOnLoad = () => {
  const slideAnim = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);

  return (
    <Animated.View style={{transform: [{translateY: slideAnim}]}}>
      <View style={{backgroundColor: '#e6e6e6', padding: 20}}>
        <Text style={{fontSize: 20}}>Slide up on load</Text>
        <Text>This component slides up when it's loaded</Text>
      </View>
    </Animated.View>
  );
};

export default SlideUpOnLoad;
