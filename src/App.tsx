/* eslint-disable prettier/prettier */
import React, { Fragment, useEffect, useState } from 'react';
import { FlatList, ScrollView } from 'react-native';

import Header from './components/Header';
import Post from './components/Posts';

const App = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const instaData = async() => {
      const response = await fetch('http://10.0.2.2:3030/feed');
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
            <Header userName={item.userName}/>
            <Post postImg={item.photo} />
          </Fragment>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </ScrollView>
  );
};

export default App;
