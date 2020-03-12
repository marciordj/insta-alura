/* eslint-disable prettier/prettier */
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

const Posts = ({postImg, postDescribe}: any) => {
  return (
    <View>
      <Image source={{uri: postImg}} style={styles.image} />
      <Text style={styles.textDesc}>{postDescribe}</Text>
    </View>
  );
};

export default Posts;

const imgDimension = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  textDesc: {
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  image: {
    width: imgDimension,
    height: imgDimension,
  },
});
