import { View, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

export default function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 36,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.primary500,
    elevation: 32,
    shadowColor: 'red',
    shadowOffset: { width: 4, height: 4 },
    shadowRadius: 32,
    shadowOpacity: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
