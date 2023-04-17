import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  ImageBackground,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../assets/constants/Colors';
import Assets from '../assets';
import {HEIGHT, WIDTH} from '../assets/constants/Dimensions';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Avatar} from 'react-native-paper';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import Mymodal from '../components/Mymodal';
const Profile = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [innerPopupVisible, setInnerPopupVisible] = useState(false);
  const toggleInnerPopup = () => {
    setInnerPopupVisible(!innerPopupVisible);
  };

  const slideAnim = useRef(new Animated.Value(100)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;
  const data1 = [
    {
      iecon1: 'user',
      name: 'My Profile',
      icon2: Assets.icon.backicon1,
      color: Colors.cards.headText,
      onpress: () => navigation.navigate('EditProfile'),
    },
    {
      iecon1: 'lock',
      name: 'Privacy Policy',
      icon2: Assets.icon.backicon1,
      color: Colors.cards.headText,
      onpress: () => navigation.navigate('PrivacyPolicy'),
    },
    {
      iecon1: 'log-out',
      name: 'Logout',
      color: Colors.Red,
      onpress: () => setModalVisible(!modalVisible),
    },
  ];

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

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={Assets.backgroundImages.BackGroundBG}
        resizeMode="cover"
        style={styles.container}>
        <Animated.View
          style={{
            transform: [{translateY: slideAnim}],
            opacity: opacityAnim,
            paddingBottom: 5,
          }}>
          <KeyboardAwareScrollView
            keyboardShouldPersistTaps="handled"
            enableOnAndroid={true}
            enableAutomaticScroll={true}
            bounces={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.contentContainer}>
              <View style={{marginVertical: 5}} />
              <View style={styles.box1}>
                <Avatar.Image
                  size={80}
                  source={Assets.backgroundImages.profile}
                />
              </View>
              <View
                style={{alignSelf: 'center', marginTop: 25, paddingTop: 25}}>
                <Text style={styles.nametext}>Alexa Martin</Text>
              </View>
              <View style={{paddingBottom: 10}}>
                <FlatList
                  data={data1}
                  renderItem={({item}) => {
                    return (
                      <>
                        <TouchableOpacity
                          onPress={item.onpress}
                          style={styles.contentbox}>
                          <View style={{flexDirection: 'row'}}>
                            <Icon name="profile" color={item.color} />
                            <Text style={[styles.text2, {color: item.color}]}>
                              {item.name}
                            </Text>
                          </View>
                          <Image source={item.icon2} />
                        </TouchableOpacity>
                      </>
                    );
                  }}
                />
              </View>
              <View
                style={{
                  marginTop: 20,
                  width: 66,
                  height: 6,
                  backgroundColor: '#aAA',
                  borderRadius: 10,
                  opacity: 0.4,
                  alignSelf: 'center',
                }}
              />
            </View>
          </KeyboardAwareScrollView>
        </Animated.View>
      </ImageBackground>
      <Mymodal
        text1={'Log Out'}
        text2={'Are Your Sure want to log out?'}
        cancelbtn="Cancel"
        logoutbtn="Log Out"
        cancel={true}
        modaltext1={'Log Out'}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        innerButton={() => navigation.navigate('Login')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
    justifyContent: 'flex-end',
    // paddingTop: 20,
  },
  loginText: {
    fontSize: WIDTH <= 375 ? 20 : 25,
    fontFamily: 'NoirPro-SemiBold',
    backgroundColor: '#FFFF',
    marginRight: 2.5,
    color: '#1E0203',
    alignItems: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    alignSelf: 'center',
    backgroundColor: '#FFFF',
    borderRadius: 10,
    marginTop: 45,
    paddingBottom: 25,
    width: WIDTH <= 375 ? 335 : 375,
    paddingHorizontal: 25,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  iconbtn: {
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  loginTextContainer: {
    // flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    // position: 'absolute',
    backgroundColor: '#FFFF',
    // top: -50,
    // left: 50,
  },
  touchable: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  text: {
    fontSize: 14,
    // fontFamily: Fonts.default,
    fontWeight: '200',
    letterSpacing: 0.7,
    color: Colors.tertiary,
  },
  text2: {
    fontSize: 18,
    paddingLeft: 10,
    color: Colors.cards.headText,
    fontFamily: 'NoirPro-Regular',
  },
  box1: {
    alignSelf: 'center',
    borderWidth: 2.5,
    borderRadius: 50,
    borderColor: 'red',
    position: 'absolute',
    top: -40,
  },
  nametext: {
    fontSize: 22,
    color: Colors.cards.headText,
    fontFamily: 'NoirPro-SemiBold',
  },
  contentbox: {
    flexDirection: 'row',
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 25,
  },
});

export default Profile;
