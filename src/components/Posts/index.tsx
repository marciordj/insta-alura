/* eslint-disable prettier/prettier */
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

import LikeIcon from '../../assets/icons/s2-checked.png';
import UnlikedIcon from '../../assets/icons/s2.png';

const Posts = ({postImg, postDescribe}: any) => {
  const catchLike = (countLike: number) => {
    return countLike !== 0 ? LikeIcon : UnlikedIcon;
  };



  return (
    <View>
      <Image source={{uri: postImg}} style={styles.image} />
      <Text style={styles.textDesc}>{postDescribe}</Text>
      <Image source={catchLike(1)} style={styles.likeIcon} />
    </View>
  );
};

export default Posts;

const imgDimension = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  textDesc: {
    textAlign: 'center',
    marginTop: 10,
  },
  image: {
    width: imgDimension,
    height: imgDimension,
  },
  likeIcon: {
    width: 25,
    height: 25,
    marginLeft: 10,
  },
});
