import React from 'react';
import { render, screen } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import MovieList from '../../src/components/MovieList';

const mockMovies = [
  {
    id: 1,
    title: 'Inception',
    poster_path: '/poster_path_inception.jpg',
  },
  {
    id: 2,
    title: 'Interstellar',
    poster_path: '/poster_path_interstellar.jpg',
  },
];

const mockNavigation = {
  navigate: jest.fn(),
};

test('MovieList component renders correctly', async () => {
  const mock = new MockAdapter(axios);
  mock.onGet(/now_playing/).reply(200, { results: mockMovies });

  let component;
  await renderer.act(async () => {
    component = renderer.create(<MovieList navigation={mockNavigation} />);
  });

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

