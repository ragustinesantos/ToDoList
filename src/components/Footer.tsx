import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function Footer(): React.JSX.Element {
  return (
    <View style={styles.footerView}>
      <Text style={styles.footerTxt}>Raymond Santos</Text>
      <Text style={styles.footerTxt}>© 2024</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footerView: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    backgroundColor: '#4B4376',
  },
  footerTxt: {
    fontWeight: '600',
    color: 'white',
  },
});
