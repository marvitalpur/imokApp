import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Avatar, FAB} from 'react-native-paper';
import Assets from '../assets';
import {LockIcon} from '../assets/Svg/SocialSvg';
import {Search} from '../assets/Svg/OnboardingSvg';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Header = ({
  homeHeader,
  header,
  onPress,
  headText,
  headText2,
  onPress1,
  onPress2,
  blueBtn,
  searicon,
}) => {
  return (
    <View>
      {homeHeader && (
        <>
          <View style={styles.container}>
            <View style={styles.box1}>
              <Avatar.Image
                size={40}
                source={Assets.backgroundImages.profile}
              />
            </View>
            <TouchableOpacity onPress={onPress2} style={styles.box2}>
              <Text
                style={[
                  styles.text,
                  {fontFamily: 'NoirPro-SemiBold', fontSize: 16},
                ]}>
                Alexa,
              </Text>
              <Text
                style={[
                  // styles.text,
                  {
                    fontFamily: 'NoirPro-SemiBold',
                    fontSize: 10,
                    paddingLeft: 10,
                  },
                ]}>
                Good Morning
              </Text>
            </TouchableOpacity>
            {searicon && (
              <View style={styles.box3}>
                <TouchableOpacity onPress={onPress} style={styles.button}>
                  <Search />
                </TouchableOpacity>
              </View>
            )}
            <View style={styles.box3}>
              <TouchableOpacity onPress={onPress} style={styles.button}>
                <LockIcon />
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
      {header && (
        <View style={[styles.Container]}>
          <View style={{}}>
            <TouchableOpacity style={styles.button1} onPress={onPress}>
              <Image
                source={Assets.icon.headericon}
                resizeMode="contain"
                style={{width: '40%', height: '40%'}}
              />
            </TouchableOpacity>
            <View style={{alignSelf: 'center', paddingBottom: 25}}>
              <Text style={styles.text1}>{headText}</Text>
            </View>
            {blueBtn ? (
              <>
                <TouchableOpacity
                  style={[styles.button2, {backgroundColor: '#1492E6'}]}
                  onPress={onPress1}>
                  <Text style={{color: '#ffff'}}>Save Meal</Text>
                </TouchableOpacity>
              </>
            ) : (
              <TouchableOpacity style={{alignSelf: 'flex-end'}}>
                <Text
                  onPress={onPress1}
                  style={[
                    {
                      fontSize: 14,
                      fontFamily: 'NoirPro-SemiBold',
                      position: 'absolute',
                      color: '#000',
                      right: 3,
                      bottom: 40,
                    },
                  ]}>
                  {headText2}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // height: '100%',
  },
  box1: {
    // flex: 0.5,
    borderWidth: 1,
    borderColor: 'red',

    borderRadius: 30,
    // height: '100%',
    // backgroundColor: 'red',
  },
  box2: {
    flex: 3,
    // backgroundColor: 'blue',
    // flexDirection: 'row',
    alignItems: 'flex-start',
    // padding: 10,
  },
  box3: {
    flex: 1,
    // height: '100%',
    // backgroundColor: 'blue',
    alignItems: 'flex-end',
  },

  fab: {
    // position: 'absolute',
    // // margin: 12,
    // backgroundColor: '#fff',
    // right: 0,
    // bottom: 0,
    // flex: 0.46,
  },
  button: {
    // flex: 1,
    // position: 'absolute',
    // bottom: 16,
    // right: 1,
    backgroundColor: '#EEEBEB',
    // backgroundColor: 'pink',
    borderRadius: 10,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 15,
  },
  button1: {
    position: 'absolute',
    bottom: 16,
    left: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 15,
  },
  button2: {
    position: 'absolute',
    bottom: 10,
    right: -6,
    backgroundColor: '#fff',
    borderRadius: 17,
    width: 100,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 15,
  },
  text: {
    paddingTop: 0,
    paddingLeft: 10,
    color: '#1E0203',
  },
  text1: {
    paddingTop: 10,
    paddingLeft: 10,
    fontSize: 28,
    color: '#1E0203',
    fontFamily: 'NoirPro-SemiBold',
  },
});

export default Header;
