import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // Import required modules from React Query

import AppNavigator from './src/navigation/AppNavigator';

// Create a QueryClient instance
const queryClient = new QueryClient();

const App = () => {
  return (
    // Wrap your app in QueryClientProvider
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;