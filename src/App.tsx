/* eslint-disable prettier/prettier */
import React, { Fragment } from 'react';
import { FlatList, ScrollView } from 'react-native';

import Batman from './assets/img/Batman.jpg';
import batPost from './assets/img/batPost.jpg';
import MestreMago from './assets/img/mestreMago.jpg';
import magoPost from './assets/img/mestrePost.jpg';
import spiderPost from './assets/img/spider.jpg';
import SpiderMan from './assets/img/spiderPost.jpg';
import Header from './components/Header';
import Posts from './components/Posts';


interface IUser {
  id: number;
  name: string;
  desc: string;
  photo: any;
  postImg: any;
}

const App = () => {
  const infoUsers = [
    {
      id: 1,
      name: 'Bruce',
      photo: Batman,
      desc:
        'Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Suco de cevadiss deixa as pessoas mais interessantis. Paisis, filhis, espiritis santis. Viva Forevis aptent taciti sociosqu ad litora torquent.',
      postImg: batPost,
    },
    {
      id: 2,
      name: 'Mestre dos Magos',
      photo: MestreMago,
      desc:
        'Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Suco de cevadiss deixa as pessoas mais interessantis. Paisis, filhis, espiritis santis. Viva Forevis aptent taciti sociosqu ad litora torquent.',
      postImg: magoPost,
    },
    {
      id: 3,
      name: 'Peter',
      photo: SpiderMan,
      desc:
        'Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Suco de cevadiss deixa as pessoas mais interessantis. Paisis, filhis, espiritis santis. Viva Forevis aptent taciti sociosqu ad litora torquent.',
      postImg: spiderPost,
    },
  ];

  function Item({name, photo, desc, postImg}: IUser) {
    return (
      <Fragment>
        <Header userName={name} postImg={postImg} personalPhoto={photo} />
        <Posts postPhoto={photo} postImg={postImg} postDescribe={desc} />
      </Fragment>
    );
  }

  return (
    <ScrollView>
      <FlatList
        data={infoUsers}
        renderItem={({item}) => (
          <Item name={item.name} photo={item.photo} desc={item.desc} postImg={item.postImg} />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </ScrollView>
  );
};

export default App;
