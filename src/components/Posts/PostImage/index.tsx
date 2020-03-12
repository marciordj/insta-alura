/* eslint-disable prettier/prettier */
import React from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';

const PostImage = ({postImage}: any) => {
  return <Image source={postImage} style={styles.image} />;
};

export default PostImage;

const imgDimension = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  image: {
    width: imgDimension,
    height: imgDimension,
  },
});
