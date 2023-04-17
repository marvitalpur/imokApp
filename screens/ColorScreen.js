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
import SwitchCompo from '../components/SwitchCompo';
import ColorPicker from 'react-native-wheel-color-picker';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {RadioButton} from 'react-native-paper';
import ButtonComponent from '../components/buttoncompone';
import {WIDTH} from '../assets/constants/Dimensions';

const ColorScreen = ({navigation}) => {
  const [currentColor, setCurrentColor] = useState('#FFFFFF');
  const [swatchesOnly, setSwatchesOnly] = useState(false);
  const [swatchesLast, setSwatchesLast] = useState(false);
  const [swatchesEnabled, setSwatchesEnabled] = useState([]);
  const [disc, setDisc] = useState(false);

  const pickerRef = useRef(null);

  const onColorChange = color => {
    setCurrentColor(color);
  };

  const onColorChangeComplete = color => {
    console.log('color changed:', color);
  };

  const revertPicker = () => {
    pickerRef.current.revert();
  };

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
              marginTop: 25,
            }}>
            <Header
              header
              headText={'Add Meal'}
              onPress={() => navigation.goBack()}
            />
          </View>
          <View style={{paddingHorizontal: 15}}>
            <View style={styles.BoxView}>
              <View style={styles.redbox}>
                <Text style={styles.textbox}>Select Category</Text>
              </View>
              <View style={{paddingHorizontal: 15, paddingVertical: 25}}>
                <Text style={styles.text}>Salads</Text>
                <Text style={styles.text}>Appetizers</Text>
                <Text style={styles.text}>Desserts</Text>
                <Text style={styles.text}>Snack</Text>
              </View>
            </View>
          </View>
          <View style={{paddingHorizontal: 15, marginTop: 15}}>
            <View style={styles.BoxView}>
              <View style={styles.redbox}>
                <Text style={styles.textbox}>Select Color</Text>
              </View>
              <View style={{paddingHorizontal: 15, paddingVertical: 25}}>
                <View style={[]}>
                  <ColorPicker
                    ref={pickerRef}
                    color={currentColor}
                    swatchesOnly={swatchesOnly}
                    onColorChange={onColorChange}
                    onColorChangeComplete={onColorChangeComplete}
                    thumbSize={50}
                    sliderSize={10}
                    noSnap={false}
                    row={false}
                    swatchesLast={swatchesLast}
                    swatches={swatchesEnabled}
                    shadeWheelThumb={false}
                  />
                  <TouchableOpacity onPress={revertPicker}></TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <ButtonComponent
              button2
              buttonText="Save"
              buttonColor={Colors.Red}
              textColor={Colors.Red}
              onPress={() => navigation.navigate('AddMealScreen')}
              height={WIDTH <= 375 ? 40 : 55}
              width={WIDTH <= 375 ? 125 : 175}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
export default ColorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BackgroundColorW,
    justifyContent: 'flex-end',
  },
  BoxView: {
    backgroundColor: Colors.secondary,
    borderRadius: 15,
    // paddingHorizontal: 15,
  },
  text: {
    fontSize: 14,
    color: Colors.tertiary,
    paddingVertical: 5,
  },
  redbox: {
    backgroundColor: '#C00006',
    borderRadius: 10,
  },
  textbox: {
    textAlign: 'center',
    color: Colors.secondary,
    fontSize: 18,
    paddingVertical: 10,
  },
});
