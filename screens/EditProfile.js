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
import {Avatar} from 'react-native-paper';
import Header from '../components/Header';

const EditProfile = ({navigation}) => {
  const [data, setData] = useState({
    username: '',
    password: '',
    email: '',
    contact: '',
  });
  const [addbutton, setAddButton] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          paddingHorizontal: 15,
          paddingTop: 15,
        }}>
        <Header
          header
          headText2={addbutton ? '' : 'Edit'}
          onPress1={() => {
            setAddButton(true);
          }}
          onPress={() => {
            addbutton == true ? setAddButton(false) : navigation.goBack();
          }}
        />
      </View>
      <View style={styles.box1}>
        <Avatar.Image size={110} source={Assets.backgroundImages.profile} />
      </View>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        enableOnAndroid={true}
        enableAutomaticScroll={true}
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.contentContainer}>
          <View style={{alignSelf: 'center'}}>
            <Text style={styles.nametext}>Alexa</Text>
          </View>
          <View style={{marginVertical: 5}} />
          <Text style={[styles.text, {color: Colors.tertiary}]}>Name</Text>
          <Input
            placeholder=""
            text={data.username}
            setText={setData}
            formKey="username"
            backgroundColor="#ffffff"
            borderRadius={10}
            height={36}
          />
          <View style={{marginVertical: 5}} />
          <Text style={[styles.text, {color: Colors.tertiary}]}>
            Email Address
          </Text>
          <Input
            placeholder=""
            text={data.password}
            setText={setData}
            formKey="email"
            backgroundColor={'#FFFFFF'}
            borderRadius={10}
            height={36}
          />
          <View style={{marginVertical: 5}} />
          <Text style={[styles.text, {color: Colors.tertiary}]}>
            Phone Number
          </Text>
          <Input
            placeholder=""
            text={data.password}
            setText={setData}
            formKey="contact"
            backgroundColor={'#FFFFFF'}
            borderRadius={10}
            height={36}
          />
          <View style={{marginVertical: 5}} />
          <Text style={[styles.text, {color: Colors.tertiary}]}>Password</Text>
          <Input
            placeholder=""
            text={data.password}
            setText={setData}
            formKey="password"
            backgroundColor={'#FFFFFF'}
            borderRadius={10}
            height={40}
          />
          {addbutton == true ? (
            <>
              <View style={{marginVertical: 5}} />
              <Text style={[styles.text, {color: Colors.tertiary}]}>
                confirm Password
              </Text>
              <Input
                placeholder=""
                text={data.password}
                setText={setData}
                formKey="password"
                backgroundColor={'#FFFFFF'}
                borderRadius={10}
                height={40}
              />
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                  marginTop: 10,
                }}>
                <ButtonComponent
                  button2
                  buttonText="Save"
                  buttonColor={Colors.Red}
                  textColor={Colors.Red}
                  onPress={() => navigation.navigate('HomeScreen')}
                  height={WIDTH <= 375 ? 40 : 55}
                  width={WIDTH <= 375 ? 125 : 175}
                />
              </View>
            </>
          ) : (
            <Text></Text>
          )}
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
    justifyContent: 'flex-end',
  },
  contentContainer: {
    paddingTop: 35,
    marginTop: 25,
    paddingHorizontal: 25,
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

  nametext: {
    fontSize: 30,
    color: Colors.cards.headText,
    fontFamily: 'NoirPro-Medium',
  },

  text: {
    fontSize: 14,
    paddingBottom: 8,
    // fontFamily: Fonts.default,
    fontWeight: '200',
    letterSpacing: 0.7,
    color: Colors.tertiary,
    fontFamily: 'NoirPro-Medium',
  },
  box1: {
    alignSelf: 'center',
    borderWidth: 2.5,
    borderRadius: 100,
    borderColor: 'red',
    position: 'absolute',
    top: 25,
  },
});

export default EditProfile;
