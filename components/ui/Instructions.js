import { StyleSheet, Text } from 'react-native';
import Colors from '../../constants/colors';

export default function Instructions({ children }) {
  return <Text style={styles.instructionText}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.whiteColor,
    fontSize: 16,
  },
});
