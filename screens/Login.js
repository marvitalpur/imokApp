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
import Icon from 'react-native-vector-icons/Feather';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Input from '../components/inputs';
import ButtonComponent from '../components/buttoncompone';
import ImgAnimation from '../components/ImgAnimation';

const Login = ({navigation}) => {
  const [data, setData] = useState({
    username: '',
    password: '',
  });
  const [rememberMe, setRememberMe] = useState(false);
  const slideAnim = useRef(new Animated.Value(100)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;

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
        <View
          style={{
            width: WIDTH,
            height: HEIGHT / 2.8,
            alignItems: 'center',
          }}>
          <View style={{}}>
            <ImgAnimation Food1={Assets.FoodItems.fooditem6} />
            <ImgAnimation Food2={Assets.FoodItems.FoodItem1} />
          </View>
        </View>
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
              <View style={styles.loginTextContainer}>
                <Text style={[styles.loginText, {marginTop: 10}]}>Login</Text>
              </View>
              <View style={{marginVertical: 5}} />
              <Input
                placeholder="Email Address"
                text={data.username}
                setText={setData}
                formKey="username"
                backgroundColor={'#B5000529'}
                borderRadius={30}
              />
              <View style={{marginVertical: 10}} />
              <Input
                backgroundColor={'#B5000529'}
                borderRadius={30}
                placeholder="Password"
                text={data.password}
                setText={setData}
                formKey="password"
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  // paddingHorizontal: 10,
                  marginTop: 5,
                }}>
                <TouchableOpacity
                  style={styles.touchable}
                  onPress={() => setRememberMe(!rememberMe)}>
                  <Icon
                    name={rememberMe ? 'check-square' : 'square'}
                    size={20}
                    color={rememberMe ? Colors.Red : Colors.Red}
                  />
                  <Text
                    style={[
                      styles.text,
                      {
                        marginLeft: 5,
                        fontFamily: 'NoirPro-Regular',
                        color: Colors.tertiary,
                        opacity: 0.48,
                      },
                    ]}>
                    Remember me
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchable}>
                  <Text
                    style={[
                      styles.text,
                      {
                        textDecorationLine: 'underline',
                        fontFamily: 'NoirPro-Regular',
                        color: Colors.tertiary,
                        opacity: 0.48,
                      },
                    ]}>
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                  marginTop: 10,
                }}>
                <ButtonComponent
                  button2
                  buttonText="Login"
                  buttonColor={Colors.Red}
                  textColor={Colors.Red}
                  onPress={() => navigation.navigate('HomeScreen')}
                  height={WIDTH <= 375 ? 40 : 55}
                  width={WIDTH <= 375 ? 125 : 175}
                />
                <Text
                  style={[
                    styles.text,
                    {color: Colors.tertiary, opacity: 0.5, marginVertical: 5},
                  ]}>
                  OR
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  paddingLeft: 15,
                  alignSelf: 'center',
                  paddingVertical: 5,
                }}>
                <View style={{backgroundColor: '#fff'}}>
                  <Image
                    source={Assets.icon.google}
                    style={{width: 20, height: 20}}
                  />
                </View>
                <Text
                  style={[
                    styles.text,
                    {
                      fontSize: 14,
                      marginLeft: 5,
                      fontFamily: 'NoirPro-Regular',
                      color: Colors.primary,
                    },
                  ]}>
                  Sign in with Google
                </Text>
              </View>
              <Text
                style={[
                  styles.text,
                  {
                    textAlign: 'center',
                    fontSize: 14,
                    marginLeft: 5,
                    fontFamily: 'NoirPro-Regular',
                    color: Colors.primary,
                    // opacity: 0.48,
                    paddingTop: 10,
                  },
                ]}>
                Dont't have an account ?{' '}
                <Text style={{color: 'red', fontFamily: 'NoirPro-Bold'}}>
                  Sign Up
                </Text>
              </Text>
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
    </SafeAreaView>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
    justifyContent: 'flex-end',
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
    marginTop: 15,
    paddingTop: 5,
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
});
