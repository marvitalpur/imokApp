import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Header';
import ButtonComponent from '../components/buttoncompone';
import {HEIGHT, WIDTH} from '../assets/constants/Dimensions';
import Assets from '../assets';
import CardCompoLG from '../components/cardCompoLg';
import {Colors} from '../assets/constants/Colors';
import MyTooltip from '../components/tooltipCompo';
import {MenuIcon} from '../assets/Svg/SocialSvg';
import {FlatList} from 'react-native-gesture-handler';
import {shouldUseActivityState} from 'react-native-screens';

const HomeScreen = ({navigation, checkButton}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const [Screendata, SetScreenData] = useState(true);
  const [showdata, setShowData] = useState(true);

  const data = [
    {shadow: '#C00006', bgColor: '#C00006'},
    {shadow: '#00A0C0', bgColor: '#00A0C0'},
    {shadow: '#0B273A', bgColor: '#0B273A'},
    {shadow: '#3CC241', bgColor: '#3CC241'},
    {shadow: '#3C14E6', bgColor: '#3C14E6'},
    {shadow: '#C00006', bgColor: '#C00006'},
  ];
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={{}}>
            <View style={{paddingHorizontal: 15, marginTop: 25}}>
              <Header
                homeHeader
                searicon
                onPress2={() => navigation.navigate('Profile')}
                onPress={() => navigation.navigate('CartScreen')}
              />
            </View>
            <View style={{paddingHorizontal: 15, marginTop: 25}}>
              <ButtonComponent
                button3
                buttonText="Add Meal"
                paddingHorizontal={WIDTH < 375 ? 5 : 25}
                icon="arrow-right"
                onPress={() => navigation.navigate('ColorScreen')}
                widthIcon={WIDTH < 375 ? 40 : 40}
                height={WIDTH < 375 ? 40 : 40}
                width={WIDTH < 375 ? 340 : 370}
              />
            </View>

            {Screendata ? (
              <>
                <View style={styles.containerrow}>
                  <View style={styles.rowitem1}>
                    <Text
                      style={[
                        styles.Text,
                        {
                          //   backgroundColor: Colors.BackgroundColorW,
                        },
                      ]}>
                      {showdata === false ? 'My Meals' : ' Add Meals'}
                    </Text>{' '}
                    ;
                  </View>
                  <View style={[styles.rowitem2, {height: 1}]}></View>
                  <View style={styles.rowitem3}>
                    <TouchableOpacity
                      onPress={() => setVisible(true)}
                      style={styles.touchable}>
                      <MenuIcon />
                    </TouchableOpacity>
                    {visible ? (
                      <MyTooltip
                        modalVisible={isVisible}
                        text={'wertjk'}
                        onPress={() => {
                          SetScreenData(true), setVisible(false);
                        }}
                      />
                    ) : null}
                  </View>
                </View>
                <View style={{paddingHorizontal: 15}}>
                  <FlatList
                    data={data}
                    renderItem={({item, index}) => {
                      return (
                        <>
                          <View style={{paddingTop: 20}}>
                            <CardCompoLG
                              checkButton
                              shadow={item.shadow}
                              bgColor={item.bgColor}
                              FoodImage={Assets.FoodItems.FoodItem1}
                              ButtonComponent={
                                <ButtonComponent
                                  button2
                                  buttonText="View Full"
                                  buttonColor={'red'}
                                  //   textColor={Colors.secondary}
                                  onPress={() =>
                                    navigation.navigate('MealDetails')
                                  }
                                  height={WIDTH <= 375 ? 40 : 55}
                                  width={WIDTH <= 375 ? 135 : 175}
                                />
                              }
                            />
                          </View>
                        </>
                      );
                    }}
                  />
                </View>
              </>
            ) : (
              <View style={{paddingHorizontal: 15}}>
                <FlatList
                  data={data}
                  renderItem={({item, index}) => {
                    return (
                      <>
                        <View style={{paddingTop: 20}}>
                          <CardCompoLG
                            checkButton
                            shadow={item.shadow}
                            bgColor={item.bgColor}
                            FoodImage={Assets.FoodItems.FoodItem1}
                            ButtonComponent={
                              <ButtonComponent
                                button2
                                buttonText="View Full"
                                buttonColor={'red'}
                                //   textColor={Colors.secondary}
                                onPress={() =>
                                  navigation.navigate('MealDetails')
                                }
                                height={WIDTH <= 375 ? 40 : 55}
                                width={WIDTH <= 375 ? 135 : 175}
                              />
                            }
                          />
                        </View>
                      </>
                    );
                  }}
                />
              </View>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    backgroundColor: Colors.BackgroundColorW,
  },
  box1: {
    // flex: 1,
    height: 100,
    backgroundColor: 'grey',
  },
  box2: {
    // flex: 1,
    backgroundColor: 'pink',
  },
  containerrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    // height: '10%',
    paddingHorizontal: 10,
  },
  rowitem1: {
    flex: 2,
    // height: '100%',
    // backgroundColor: 'red',
  },
  rowitem2: {
    paddingHorizontal: 5,
    top: 3,
    flex: 2,
    // height: '100%',
    backgroundColor: 'red',
  },
  rowitem3: {
    flex: 1,
    // height: '100%',
    // backgroundColor: 'blue',
    alignItems: 'flex-end',
  },

  fab: {
    position: 'absolute',
    backgroundColor: '#fff',
    right: 0,
    bottom: 10,
  },
  Text: {
    fontFamily: 'NoirPro-Regular',
    color: '#190C0C',
    fontSize: 25,
    paddingHorizontal: 5,
  },
  button: {
    position: 'absolute',
    bottom: 16,
    right: 0,

    backgroundColor: '#EEEBEB',

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
    right: 0,

    backgroundColor: '#EEEBEB',

    borderRadius: 10,

    alignItems: 'center',
    justifyContent: 'center',
    // elevation: 15,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 8,
  },
  touchable: {
    backgroundColor: '#ffff',
    padding: 10,
    borderRadius: 5,
  },
});
