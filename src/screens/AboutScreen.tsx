import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {CommonStyles} from '../utils/CommonStyles';
import MainLayout from '../layouts/MainLayout';

export default function AboutScreen({
  navigation,
}: {
  navigation: any;
}): React.JSX.Element {
  return (
    <MainLayout>
      <View style={styles.txtView}>
        <Text>Broke Buddy</Text>
        <Text>Raymond Santos</Text>
        <Text>11 - 12 - 2024</Text>
      </View>
      <View style={CommonStyles.navBtn}>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  txtView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
