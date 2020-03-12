/* eslint-disable prettier/prettier */
import React, { Fragment, useEffect, useState } from 'react';
import { FlatList, ScrollView } from 'react-native';

import Header from './components/Header';
import Post from './components/Posts';

const App = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const instaData = async() => {
      const url = 'http://192.168.3.29:3030/feed';
      const response = await fetch(url);
      const dataJson: any = await response.json();

      setInfo(dataJson);
    };

    instaData();
  }, []);

  return (
    <ScrollView>
      <FlatList
        data={info}
        renderItem={({item}: any) => (
          <Fragment>
            <Header userName={item.userName} userImg={item.userURL}/>
            <Post postImg={item.url} />
          </Fragment>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </ScrollView>
  );
};

export default App;
