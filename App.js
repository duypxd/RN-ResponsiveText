import React from 'react';
import {StyleSheet, View} from 'react-native';
import TextResponsive from './src/TextResponsive';

const App = () => {
  return (
    <View style={styles.container}>
      <TextResponsive type="small">{'Text Responsive: small'}</TextResponsive>
      <TextResponsive type="text">{'Text Responsive: text'}</TextResponsive>
      <TextResponsive type="button">{'Text Responsive: button'}</TextResponsive>
      <TextResponsive type="h3">{'Text Responsive: h3'}</TextResponsive>
      <TextResponsive type="h2">{'Text Responsive: h2'}</TextResponsive>
      <TextResponsive type="h1">{'Text Responsive: h1'}</TextResponsive>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
