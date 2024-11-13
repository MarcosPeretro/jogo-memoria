import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Example01 } from './screens/Example01';
import { Example02 } from './screens/Example02';
import { ExampleLottie } from './screens/ExampleLottie';
import {CardFlip } from './screens/CardFlip';

export default function App() {
  return <CardFlip/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
