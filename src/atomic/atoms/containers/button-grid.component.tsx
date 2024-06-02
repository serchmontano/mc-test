import React from 'react';
import {View, StyleSheet, ViewStyle, StyleProp} from 'react-native';
import {useTheme} from 'styled-components';

type Props = {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
};

const ButtonGrid = ({style, children}: Props) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      backgroundColor: theme.color.background,
    } as ViewStyle,
    item: {
      width: '48%',
      marginBottom: theme.spacing.unit(1.5),
    } as ViewStyle,
  });

  const wrappedChildren = React.Children.map(children, child => (
    <View style={styles.item}>{child}</View>
  ));

  return <View style={[styles.container, style]}>{wrappedChildren}</View>;
};

export default ButtonGrid;
