import React, { useCallback, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Styles from "./Styles";
import Search from "./Search";

export default function Header() {
  const [search, setSearch] = useState("");
  const updateSearch = (search: string) => {
    setSearch(search);
  };
  return (
    <View style={Styles.header}>
      <View style={Styles.headerTop}>
        <TouchableOpacity style={Styles.headerLeft}>
          <Ionicons name="menu-outline" size={25} color="green" />
        </TouchableOpacity>
        <View style={Styles.headerCenter}>
          <Text style={Styles.headerTitle}>SA Schools</Text>
        </View>
        <View style={Styles.headerRight}>
          <Ionicons name="person-outline" size={25} color="green" />
        </View>
      </View>
      <Search />
    </View>
  );
}
