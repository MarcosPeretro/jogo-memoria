import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Example01 } from './screens/Example01';
import { Example02 } from './screens/Example02';
import { ExampleLottie } from './screens/ExampleLottie';
import { CardFlip } from './screens/CardFlip';
import { Board } from './components/Board';
import { Card } from './components/Card';
import { useState } from 'react';


export default function App() {
  const [turns, setTurns] = useState(0)
  const [key, setKey] = useState(0);

  const incrementTurn = () => {
    setTurns(turns + 1)
  }
  const resetGame = () => {
    setTurns(0);
    setKey(key + 1);
  }
  return (
    <View style={styles.container}>
      <Text>Turn: {turns}</Text>
      <Board key={key} incrementTurn={incrementTurn}/>
      <Button title='Reset game' onPress={resetGame}></Button>
    </View>




  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
