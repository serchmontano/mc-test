import {Modal, StyleSheet, View, ViewStyle} from 'react-native';
import {useTheme} from 'styled-components';

type Props = {
  visible: boolean;
  onClose: () => void;
  [key: string]: any;
};

const Dialog = ({visible, onClose, ...props}: Props) => {
  const theme = useTheme();
  const styles = {
    backdrop: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0)',
      justifyContent: 'center',
      alignItems: 'center',
    } as ViewStyle,
    content: {
      width: theme.spacing.unit(24),
      height: theme.spacing.unit(24),
      padding: theme.spacing.unit(3),
      borderRadius: theme.spacing.unit(1),
      backgroundColor: theme.color.solid,
      opacity: 0.8,
      alignItems: 'center',
      justifyContent: 'space-around',
    } as ViewStyle,
  };
  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}>
      <View style={StyleSheet.flatten([styles.backdrop])}>
        <View style={StyleSheet.flatten([styles.content])}>
          {props.children}
        </View>
      </View>
    </Modal>
  );
};

export default Dialog;
