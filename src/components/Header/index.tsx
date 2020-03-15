/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Header = ({userName, userImg}: any) => {
  return (
      <View style={styles.container}>
        <Image source={{uri: userImg}} style={styles.imgHeader} />
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
    fontSize: 20,
  },
  imgHeader: {
    width: 50,
    height: 50,
    marginRight: 10,
    marginTop: 20,
    borderRadius: 100,
  },
});
