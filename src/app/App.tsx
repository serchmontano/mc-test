import 'react-native-gesture-handler';
import React, {FC} from 'react';
import Navigation from './Navigation';
import {ThemeProvider} from 'styled-components/native';
import {CommonTheme} from '../atomic/theme';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StatusBar} from 'react-native';

const App: FC = () => {
  return (
    <ThemeProvider theme={CommonTheme}>
      <GestureHandlerRootView style={{flex: 1}}>
        <BottomSheetModalProvider>
          <StatusBar barStyle="light-content" />
          <Navigation />
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
};

export default App;
