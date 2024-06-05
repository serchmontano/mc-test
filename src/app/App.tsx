import 'react-native-gesture-handler';
import React, {FC, useEffect} from 'react';
import {LogBox, StatusBar} from 'react-native';
import Toast from 'react-native-toast-message';
import Navigation from './Navigation';
import {ThemeProvider} from 'styled-components/native';
import {CommonTheme} from '../atomic/theme';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App: FC = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['Sending `onAnimatedValueUpdate` with no listeners registered']);
  }, []);


  return (
    <ThemeProvider theme={CommonTheme}>
      <GestureHandlerRootView style={{flex: 1}}>
        <BottomSheetModalProvider>
          <StatusBar barStyle="light-content" />
          <Navigation />
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
      <Toast />
    </ThemeProvider>
  );
};

export default App;
