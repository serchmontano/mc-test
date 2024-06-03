import React from 'react';
import {StyleSheet, Text, StyleProp, TextStyle} from 'react-native';
import {useTheme} from 'styled-components';

type Props = {
  style?: StyleProp<TextStyle>;
  variant:
    | 'heading'
    | 'headingDescription'
    | 'button'
    | 'modalTitle'
    | 'modalDescription'
    | 'label'
    | 'dialogContent'
    | 'balanceHeading'
    | 'balanceLabel'
    | 'balanceContent'
    | 'paymentPrimaryHeading';
  [key: string]: any;
};

const Typography = ({style, align = 'center', variant, ...props}: Props) => {
  const theme = useTheme();

  const styles = {
    general: {
      color: theme.color.text,
    } as TextStyle,
    balanceHeading: {
      fontSize: theme.spacing.unit(3.75),
      fontWeight: '600',
      color: theme.color.solid,
    } as TextStyle,
    balanceLabel: {
      fontSize: theme.spacing.unit(1.75),
      color: theme.color.description,
    },
    balanceContent: {
      fontSize: theme.spacing.unit(1.75),
      color: theme.color.solid,
    } as TextStyle,
    paymentPrimaryHeading: {
      fontSize: theme.spacing.unit(2.25),
      fontWeight: '600',
      color: theme.color.primary,
    },
    heading: {
      fontSize: theme.spacing.unit(2.75),
      fontWeight: '600',
    } as TextStyle,
    headingDescription: {
      fontSize: theme.spacing.unit(2),
    } as TextStyle,
    button: {
      fontWeight: '600',
    } as TextStyle,
    modalTitle: {
      fontSize: theme.spacing.unit(2.75),
      fontWeight: '600',
      color: theme.color.solid,
    } as TextStyle,
    modalDescription: {
      fontSize: theme.spacing.unit(2.25),
      fontWeight: '600',
      color: theme.color.description,
    } as TextStyle,
    label: {
      fontSize: theme.spacing.unit(1.5),
      fontWeight: '400',
      color: theme.color.label,
    } as TextStyle,
    dialogContent: {
      fontSize: theme.spacing.unit(2.25),
      fontWeight: '600',
      color: theme.color.background,
    } as TextStyle,
  };

  return (
    <Text
      style={StyleSheet.flatten([
        styles.general,
        styles[variant],
        {textAlign: align},
        style,
      ])}>
      {props.children}
    </Text>
  );
};

export default Typography;
