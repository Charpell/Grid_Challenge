import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableWithoutFeedback, Animated } from 'react-native';

const colors = ['black', 'blue', 'cyan', 'green', 'magenta', 'red', 'yellow'];

const RenderGrid = () => {
  const [newColor, setNewColor] = useState('');

  return (
    <View style={styles.squareContainer}>
      {colors.map((color,index) => {
        const nextColor = color === 'yellow' ? 'black' : colors[index + 1];
        const changeColor = newColor === nextColor;
        
        return (
          <TouchableWithoutFeedback onPress={() => setNewColor(nextColor)} key={index} >
            <Animated.View style={[styles.square, { backgroundColor: changeColor ? newColor : color }]}/>
          </TouchableWithoutFeedback>
        )
      })}
    </View>
  )
}


const App = () => {
    return (
      <SafeAreaView style={styles.container}>
        <RenderGrid />
        <RenderGrid />
        <RenderGrid />
        <RenderGrid />
        <RenderGrid />
        <RenderGrid />
        <RenderGrid />
      </SafeAreaView>
    );
  
}

export default App
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  squareContainer: {
    margin: 20,
    flexDirection: 'row',
    marginBottom: 5  
  },
  square: {
    flex: 1,
    aspectRatio: 1
  }
});

