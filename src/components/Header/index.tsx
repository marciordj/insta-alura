/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Header = ({userName, personalPhoto}: any) => {
  return (
      <View style={styles.container}>
        <Image source={personalPhoto} style={styles.imgHeader} />
        <Text style={styles.titleName}>{userName}</Text>
      </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  titleName: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  imgHeader: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 100,
  },
});
