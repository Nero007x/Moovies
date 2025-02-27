import React from 'react';
import renderer from 'react-test-renderer';
import MovieDetails from '../../src/screens/MovieDetails'; // Adjust path as needed

const mockMovie = {
  title: 'Test Movie',
  overview: 'This is a test movie overview.',
  release_date: '2024-06-12',
  vote_average: 8.5,
  poster_path: '/poster.jpg'
};

it('renders MovieDetails correctly with sample data', () => {
  const tree = renderer.create(
    <MovieDetails
      route={{ 
        params: { movie: mockMovie }
      }}
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
