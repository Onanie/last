import React from "react";
import { Text, View, TextInput } from "react-native";
import Styles from "./Styles";
import { Ionicons } from "@expo/vector-icons";

export default function Search() {
  return (
    <View style={Styles.searchBar}>
      <Ionicons name="search" style={Styles.searchIcon} />
      <TextInput style={Styles.searchInput} />
    </View>
  );
}
