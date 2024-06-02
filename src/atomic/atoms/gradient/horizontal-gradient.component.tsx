import {StyleProp, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
  style?: StyleProp<ViewStyle>;
  [key: string]: any;
};

const HorizontalGradient = ({style, ...props}: Props) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#E35205', '#F98E20']}
      style={style}>
      {props.children}
    </LinearGradient>
  );
};

export default HorizontalGradient;
