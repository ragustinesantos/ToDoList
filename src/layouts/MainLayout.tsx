import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Footer from '../components/Footer';

const MainLayout = ({children}) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>{children}</ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    padding: 20,
  },
});

export default MainLayout;
