import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {HEIGHT, WIDTH} from '../assets/constants/Dimensions';
import {Colors} from '../assets/constants/Colors';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Feather';
import {CrossIcon} from '../assets/Svg/SocialSvg';

const CardCompoLG = ({
  FoodImage,
  ButtonComponent,
  bgColor,
  checkButton,
  removeText,
  shadow,
  removebtn,
  onPress,
}) => {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <>
      <View
        style={[
          styles.Containercontent,
          {
            backgroundColor: bgColor,
            flexDirection: 'row',
            // justifyContent: 'center',
            paddingLeft: 15,
            // paddingTop: 10,
            shadowColor: shadow,
            shadowOffset: {
              width: 10,
              height: 20,
            },
            shadowOpacity: 0.43,
            shadowRadius: 9.51,
            elevation: 15,
          },
          // paddingHorizontal: 5, // added padding
        ]}>
        <View
          style={{
            position: 'absolute',
            left: 0,
            top: -10,
            backgroundColor: '#fff',
            borderRadius: 15,
            padding: 2,
          }}>
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => setRememberMe(!rememberMe)}>
            {rememberMe ? (
              <Icon
                name={'checkcircle'}
                size={24}
                color={
                  rememberMe ? Colors.cards.BlueText : Colors.cards.BlueText
                }
              />
            ) : (
              <Icon2
                name={'circle'}
                size={24}
                color={
                  rememberMe ? Colors.cards.BlueText : Colors.cards.BlueText
                }
              />
            )}
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignSelf: 'flex-start',
            width: '70%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{width: '90%'}}>
            <Text
              style={[
                styles.text,
                {textAlign: 'left', fontFamily: 'NoirPro-Light'},
              ]}>
              Green
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  fontFamily: 'NoirPro-Bold',
                  letterSpacing: 1.5,
                }}>
                {''} Salad
              </Text>
            </Text>
            <Text
              numberOfLines={2}
              style={[
                styles.text1,
                {
                  color: Colors.primary,
                  fontWeight: '300',
                  fontFamily: 'NoirPro-Regular',
                  lineHeight: 15,
                },
              ]}>
              Lorem ipsum dolor sit amet ntetur {'\n'}sadipscing elitr sed diam.
            </Text>
          </View>
        </View>
        <View
          style={{
            width: 74,
            height: 74,
            alignSelf: 'center',
            marginLeft: 10,
            paddingBottom: 10,
            padding: 5,
          }}>
          <Image
            source={FoodImage}
            resizeMode="contain"
            style={{width: '100%', height: '100%', padding: 5}}
          />
        </View>
      </View>
    </>
  );
};
export default CardCompoLG;
const styles = StyleSheet.create({
  contentContainer: {
    marginTop: 15,
    alignSelf: 'center',
    backgroundColor: '#FFFF',
    borderRadius: 20,
    width: '95%',
    // paddingHorizontal: 5,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  Containercontent: {
    paddingTop: 15,
    alignSelf: 'center',
    backgroundColor: '#FFFF',
    borderRadius: 20,
    width: '100%',
    // paddingHorizontal: 5,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  text: {
    color: '#fff',
    fontSize: 17,
  },
  textpara: {
    color: '#fff',
    fontSize: 12,
  },
  content: {
    paddingTop: 15,
    paddingHorizontal: 15,
    // backgroundColor: 'green',
  },

  title: {
    fontSize: 12,
    height: 24,
    fontSize: WIDTH < 375 ? 10 : 12,
    color: '#707070',
    fontFamily: 'NoirPro-Light',
    lineHeight: WIDTH < 375 ? 13 : 16,
  },
  container: {
    flex: 1,
  },
  text1: {
    fontSize: WIDTH < 375 ? 10 : 12,
    color: '#707070',
    //   fontFamily: Fonts.default,

    lineHeight: WIDTH < 375 ? 10 : 12,
    paddingVertical: 5,
  },
  touchable: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 5,
  },
});
