import React from 'react';
import {Pressable as RNPressable, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useAnimatedStyle} from 'react-native-reanimated';
import Animated from 'react-native-reanimated';

const Stack = createNativeStackNavigator();
const AnimatedPressable = Animated.createAnimatedComponent(RNPressable);

export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerRight: Button}}>
        <Stack.Screen name="Home" component={App} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Button = () => {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      padding: 50,
    };
  });

  const animatedStyle2 = useAnimatedStyle(() => {
    return {
      backgroundColor: 'pink',
    };
  });

  return (
    <AnimatedPressable style={[animatedStyle, animatedStyle2]}>
      <Text>Hello</Text>
    </AnimatedPressable>
  );
};

function App(props) {
  return <Button />;
}
