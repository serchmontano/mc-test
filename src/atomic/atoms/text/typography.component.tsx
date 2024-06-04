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
    | 'whiteLabel'
    | 'dialogContent'
    | 'balanceHeading'
    | 'balanceLabel'
    | 'balanceContent'
    | 'paymentPrimaryHeading'
    | 'transactionHeading'
    | 'transactionLabel'
    | 'transactonLink'
    | 'cardTitle';
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
      color: theme.color.grey,
    } as TextStyle,
    balanceLabel: {
      fontSize: theme.spacing.unit(1.75),
      color: theme.color.grey800,
    },
    balanceContent: {
      fontSize: theme.spacing.unit(1.75),
      color: theme.color.grey,
    } as TextStyle,
    transactionHeading: {
      fontSize: theme.spacing.unit(2),
      color: theme.color.grey,
    } as TextStyle,
    transactionLabel: {
      fontSize: theme.spacing.unit(1.75),
      color: theme.color.grey400,
    } as TextStyle,
    transactonLink: {
      fontSize: theme.spacing.unit(1.75),
      color: theme.color.link,
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
    cardTitle: {
      fontSize: theme.spacing.unit(2),
      color: theme.color.primary,
    } as TextStyle,
    button: {
      fontWeight: '600',
    } as TextStyle,
    modalTitle: {
      fontSize: theme.spacing.unit(2.75),
      fontWeight: '600',
      color: theme.color.grey,
    } as TextStyle,
    modalDescription: {
      fontSize: theme.spacing.unit(2.25),
      fontWeight: '600',
      color: theme.color.grey800,
    } as TextStyle,
    label: {
      fontSize: theme.spacing.unit(1.5),
      fontWeight: '400',
      color: theme.color.label,
    } as TextStyle,
    whiteLabel: {
      fontSize: theme.spacing.unit(1.5),
      fontWeight: '400',
      color: theme.color.background,
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
