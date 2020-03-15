/* eslint-disable prettier/prettier */
import React, { Fragment, useEffect, useState } from 'react';
import { FlatList, ScrollView } from 'react-native';

import instaData from './api/feed';
import Header from './components/Header';
import Post from './components/Posts';

const App = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    instaData(setInfo);
  }, []);

  return (
    <ScrollView>
      <FlatList
        data={info}
        renderItem={({item}: any) => (
          <Fragment>
            <Header userName={item.userName} userImg={item.userURL}/>
            <Post postImg={item.url} postDescribe={item.description} />
          </Fragment>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </ScrollView>
  );
};

export default App;
