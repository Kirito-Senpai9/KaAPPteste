import { StyleSheet, View, Button, Text } from 'react-native';

export function NotFound({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text>404</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('HomeTabs')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});
