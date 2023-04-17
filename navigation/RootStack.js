import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './StackeNavigator';

const RootStack = () => {
  return (
    <>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </>
  );
};

export default RootStack;
