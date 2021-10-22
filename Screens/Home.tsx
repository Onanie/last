import React, { useState, useEffect } from "react";

// import all the components we are going to use
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  Linking,
  Platform,
} from "react-native";
import Header from "../Components/Header";
import first from "../data/first";
import styles from "./Styles";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState<any>([]);
  const [offset, setOffset] = useState(1);
  const [isListEnd, setIsListEnd] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    console.log("getData");
    setLoading(true);
    setDataSource([...dataSource, ...first]);
    setLoading(false);
  };

  // I HAD TO COMMENT OUT THIS METHOD SINCE I CANT CONNECT TO MY SERVER
  /* const getData = () => {
    console.log(offset);
    if (!loading && !isListEnd) {
      console.log('getData');
      setLoading(true);
      // Service to get the data from the server to render
      fetch('http://192.168.8.107:3000/schools?offset='
        + offset)
        // Sending the currect offset with get request
        .then((response) => response.json())
        .then((responseJson) => {
          // Successful response from the API Call
          console.log(responseJson);
          if (responseJson.results.length > 0) {
            setOffset(offset + 1);
            // After the response increasing the offset
            setDataSource([...dataSource, ...responseJson.results]);
            setLoading(false);
          } else {
            setIsListEnd(true);
            setLoading(false);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };*/
  const renderFooter = () => {
    return (
      <View style={stylez.footer}>
        {loading ? (
          <ActivityIndicator color="black" style={{ margin: 15 }} />
        ) : null}
      </View>
    );
  };

  const ItemView = ({ item }: any) => {
    return (
      <TouchableOpacity
        style={styles.schoolCard}
        onPress={() => openMaps(item)}
      >
        <Image
          source={item.image_link}
          style={{
            margin: 5,
            maxHeight: 120,
            maxWidth: 300,
            minHeight: 120,
            minWidth: 300,
          }}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{item.name}</Text>
        <Text> Address: {item.address}</Text>
      </TouchableOpacity>
    );
  };

  const openMaps = async (item: any) => {
    const uri =
      Platform.OS === "ios"
        ? `comgooglemaps://?q=${item.latitude},${item.longitude}`
        : `geo://?q=${item.latitude},${item.longitude}&z=100`;
    await Linking.openURL(uri);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList
        data={dataSource}
        keyExtractor={(item, index) => index.toString()}
        renderItem={ItemView}
        ListFooterComponent={renderFooter}
        onEndReached={getData}
        onEndReachedThreshold={0.5}
      />
    </SafeAreaView>
  );
}
const stylez = StyleSheet.create({
  footer: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
