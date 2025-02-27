import 'react-native-gesture-handler/jestSetup';
jest.mock('axios');
// jest.mock('@react-navigation/native', () => jest.requireActual('../__mocks__/@react-navigation/native'));
// jest.mock('react-native-gesture-handler', () => {
//   return {
//     RNGestureHandlerModule: {
//       attachGestureHandler: jest.fn(),
//       createGestureHandler: jest.fn(),
//       dropGestureHandler: jest.fn(),
//       updateGestureHandler: jest.fn(),
//       State: {},
//       Directions: {},
//     },
//     GestureHandlerRootView: ({ children }) => children,
//     RectButton: (props) => <div {...props} />,
//     BaseButton: (props) => <div {...props} />,
//     PanGestureHandler: (props) => <div {...props} />,
//     ScrollView: (props) => <div {...props} />,
//     Switch: (props) => <div {...props} />,
//     TextInput: (props) => <div {...props} />,
//     ToolbarAndroid: (props) => <div {...props} />,
//     ViewPagerAndroid: (props) => <div {...props} />,
//     DrawerLayoutAndroid: (props) => <div {...props} />,
//     WebView: (props) => <div {...props} />,
//     NativeViewGestureHandler: (props) => <div {...props} />,
//     TapGestureHandler: (props) => <div {...props} />,
//     FlingGestureHandler: (props) => <div {...props} />,
//     ForceTouchGestureHandler: (props) => <div {...props} />,
//     LongPressGestureHandler: (props) => <div {...props} />,
//     PinchGestureHandler: (props) => <div {...props} />,
//     RotationGestureHandler: (props) => <div {...props} />,
//   };
// });

// include this section and the NativeAnimatedHelper section for mocking react-native-reanimated
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');