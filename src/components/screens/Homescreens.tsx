import { ScrollView, StyleSheet, Text, View, Image, SafeAreaView, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import { cardservice } from "../../services/Cardservice";


const Homescreens = () => {
  const jdata = require('../../services/data.json')
  const [data,setData]= useState(null)
    const getData=async()=>{
          await cardservice()
          .then(response => response.json())
          // .then(response => setData(jdata.results))  
          .then(response => setData(response.results))  
          .catch((err)=>{
            console.error(err);
          })          
    }
    // console.log(data);
    useEffect(()=>{
      getData()
    },[])
// console.log(jdata.results);

    
  return (
    <ScrollView style={styles.container}>
      {!data && <ActivityIndicator/>}
      {data && data.map((item,index)=>{
        const location=item.location.street.name;
        const state=item.location.state;
        return(
      <View key={index} style={styles.card}>
        <View style={styles.cardImg}>
          <Image style={styles.tinyLogo}
            source={{
              uri: item.picture.large,
            }}
          />
        </View>
        <View style={styles.carddetails}>
            <View style={styles.cardflname}>
                <Text>{item?.name?.first}</Text>
                <Text>{item?.name?.last}</Text>
            </View>
            <View>
                <Text>Gender: {item.gender}</Text>
                <Text>Location: {location}</Text>
                <Text>State: {state}</Text>
                <Text>Phone: {item.cell}</Text>
            </View>
        </View>
      </View>
      )})}
    </ScrollView>
    
  );
};

export default Homescreens;
