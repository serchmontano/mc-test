import {RoundedAvatar} from '@atomic/atoms/avatar';
import {HorizontalGradient} from '@atomic/atoms/gradient';
import {Typography} from '@atomic/atoms/text';
import {FilledButton} from '@atomic/molecules/button';
import {
  View,
  StyleSheet,
  Modal,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import {useTheme} from 'styled-components';

type Props = {
  visible: boolean;
  onClose: () => void;
  moveFromOnboarding: () => void;
  [key: string]: any;
};

const AllSetPopup = ({
  visible,
  onClose,
  moveFromOnboarding,
  ...props
}: Props) => {
  const theme = useTheme();
  const styles = {
    backdrop: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      justifyContent: 'center',
      alignItems: 'center',
    } as ViewStyle,
    content: {
      width: '80%',
      padding: theme.spacing.unit(3),
      backgroundColor: theme.color.background,
      borderRadius: theme.spacing.unit(1),
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: theme.spacing.unit(6),
    } as ViewStyle,
    textContainer: {
      gap: theme.spacing.unit(2.5),
      marginTop: theme.spacing.unit(5.5),
    } as ViewStyle,
    avatarContainer: {
      position: 'absolute',
      top: -theme.spacing.unit(5.5),
      width: theme.spacing.unit(11),
      height: theme.spacing.unit(11),
      borderRadius: theme.spacing.unit(5.5),
      backgroundColor: theme.color.background,
      alignItems: 'center',
      justifyContent: 'center',
    } as ViewStyle,
    gradientContainer: {
      width: theme.spacing.unit(10),
      height: theme.spacing.unit(10),
      borderRadius: theme.spacing.unit(5),
      alignItems: 'center',
      justifyContent: 'center',
    } as ViewStyle,
    closeIcon: {
      position: 'absolute',
      top: theme.spacing.unit(2),
      right: theme.spacing.unit(2),
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
          <View style={StyleSheet.flatten([styles.textContainer])}>
            <Typography variant="modalTitle">All set!</Typography>
            <Typography variant="modalDescription">
              Enjoy your digital journey.
            </Typography>
          </View>
          <FilledButton
            action={() => {
              moveFromOnboarding();
              onClose();
            }}>
            View Dashboard
          </FilledButton>
          <View style={StyleSheet.flatten([styles.avatarContainer])}>
            <HorizontalGradient
              style={StyleSheet.flatten([styles.gradientContainer])}>
              <RoundedAvatar
                size={5}
                icon={require('@assets/icons/all-set.png')}
              />
            </HorizontalGradient>
          </View>
          <TouchableOpacity
            onPress={onClose}
            style={StyleSheet.flatten([styles.closeIcon])}>
            <RoundedAvatar
              size={1.5}
              icon={require('@assets/icons/close.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default AllSetPopup;
