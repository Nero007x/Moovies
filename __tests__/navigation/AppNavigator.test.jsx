import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from '../../src/navigation/AppNavigator';

jest.mock('../../src/screens/HomeScreen', () => 'HomeScreen');
jest.mock('../../src/screens/MovieDetails', () => 'MovieDetails');

describe('AppNavigator', () => {
  it('matches the snapshot', () => {
    const tree = render(
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
