import React from 'react';
import renderer from 'react-test-renderer';
import HomeScreen from '../../src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

jest.mock('../../src/components/Header', () => 'Header');
jest.mock('../../src/components/MovieList', () => 'MovieList');

it('renders correctly', () => {
  const tree = renderer.create(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

