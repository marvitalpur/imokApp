import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  AddMealScreen,
  EditProfile,
  HomeScreen,
  Login,
  MealDetails,
  PrivacyPolicy,
  Profile,
} from '../screens';
import CartScreen from '../screens/CartScreen';
import Onboarding from '../screens/Onboarding';
import ColorScreen from '../screens/ColorScreen';
const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
        animationTypeForReplace: 'push',
        animation: 'simple_push',
      }}
      initialRouteName="">
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name="MealDetails" component={MealDetails} />
      <Stack.Screen name="AddMealScreen" component={AddMealScreen} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="ColorScreen" component={ColorScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
