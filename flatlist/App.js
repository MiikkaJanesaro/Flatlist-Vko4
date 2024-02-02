import React,{ useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, } from 'react-native';
import { DATA } from './Data';
import Row from './components/Row';
import Search from './components/Search';


function renderItem({item}){
  return (<Text>{item.lastname}, {item.id}</Text>);
}

/*
const renderItem = ({item}) => {
  <Text>{item.lastname}</Text>
};
*/

export default function App() {

  const [ items, setItems ] = useState([]);

  useEffect(() => {
    setItems(DATA);
  }, [])

  const executeSearch= (search) => {
    const searchArray = DATA.filter((item) => item.lastname.startsWith(search));
    setItems(searchArray);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Search executeSearch={executeSearch} />
      <FlatList
        data={items}
        renderItem = { ({item}) => (
          <Row person={item}/>
        )}
      ></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
    marginLeft: 10,
    justifyContent: 'left',
  },
});
