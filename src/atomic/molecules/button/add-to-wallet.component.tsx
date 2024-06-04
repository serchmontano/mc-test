import {
  Image,
  ImageStyle,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {useTheme} from 'styled-components';

interface Props {
  [key: string]: any;
}
const AddToWallet = ({...props}: Props) => {
  const theme = useTheme();
  const styles = {
    container: {
      width: '100%',
      alignItems: 'center',
    } as ViewStyle,
    containerDimensions: {
      width: theme.spacing.unit(16),
      height: theme.spacing.unit(5),
    } as ViewStyle,
    imageDimensions: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    } as ImageStyle,
  };

  return (
    <View style={StyleSheet.flatten([styles.container])}>
      <TouchableOpacity
        style={StyleSheet.flatten([styles.containerDimensions])}
        {...props}>
        <Image
          style={StyleSheet.flatten([styles.imageDimensions])}
          source={require('@assets/logos/apple-wallet.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default AddToWallet;
