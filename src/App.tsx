/* eslint-disable prettier/prettier */
import React, { Fragment } from 'react';
import { FlatList, ScrollView } from 'react-native';

import Batman from './assets/img/Batman.jpg';
import MasterMage from './assets/img/mestreMago.jpg';
import Spider from './assets/img/spider.jpg';
import Header from './components/Header';
import Post from './components/Posts';

const App = () => {
  const userInfo = [
    {id: 1, name: 'Peter', photo: Spider, desc: 'blablablablablablablabla' },
    {id: 2, name: 'Bruce', photo: Batman, desc: 'blabalablablabalablaba' },
    {id: 3, name: 'Master Mage', photo: MasterMage, desc: 'blabalablablabla'},
  ];

  return (
    <ScrollView>
      <FlatList
        data={userInfo}
        renderItem={({item}) => (
          <Fragment>
            <Header userName={item.name} personalPhoto={item.photo} />
            <Post postImg={item.photo} postDescribe={item.desc}/>
          </Fragment>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </ScrollView>
  );
};

export default App;
