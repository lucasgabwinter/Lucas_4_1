import { StyleSheet, Text } from 'react-native';
import Colors from '../../constants/colors';

export default function Instructions({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.whiteColor,
    fontSize: 24,
  },
});
