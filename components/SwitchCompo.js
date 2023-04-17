import React, {useState} from 'react';
import {View, PanResponder} from 'react-native';

const CustomColorPicker = () => {
  const [hue, setHue] = useState(0);
  const [saturation, setSaturation] = useState(1);
  const [brightness, setBrightness] = useState(1);

  const handlePanResponderMove = evt => {
    const x = evt.nativeEvent.locationX;
    const y = evt.nativeEvent.locationY;

    // Get the hue value based on the x-coordinate of the touch event
    const newHue = Math.round((x / 300) * 360);
    setHue(newHue);

    // Get the saturation and brightness values based on the y-coordinate of the touch event
    const newSaturation = Math.round((y / 300) * 100) / 100;
    setSaturation(newSaturation);

    const newBrightness = Math.round(((300 - y) / 300) * 100) / 100;
    setBrightness(newBrightness);
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: handlePanResponderMove,
  });

  const color = `hsl(${hue}, ${saturation * 100}%, ${brightness * 100}%)`;

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          backgroundColor: `hsl(${hue}, 100%, 50%)`,
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          {...panResponder.panHandlers}>
          <View
            style={{
              height: 50,
              width: 50,
              borderRadius: 150,
              overflow: 'hidden',
              borderWidth: 2,
              borderColor: '',
            }}>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <View
                style={{
                  height: 50,
                  backgroundColor: hue ? color : 'red',
                  borderRadius: 100,
                  width: 50,
                }}
              />
            </View>
            {/* <View
              style={{
                flex: 1,
                backgroundColor: `hsl(${hue}, 0%, 100%)`,
              }}
            />
            <View
              style={{
                flex: 1,
                backgroundColor: `hsl(${hue}, 100%, 50%)`,
              }}
            />
            <View
              style={{
                flex: 1,
                backgroundColor: `hsl(${hue}, 0%, 0%)`,
              }}
            /> */}
          </View>
        </View>
      </View>
    </View>
  );
};

export default CustomColorPicker;
