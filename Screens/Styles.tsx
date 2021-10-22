import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D3D3D3",
  },
  schoolImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    margin: 10,
  },
  schoolCard: {
    borderColor: "gray",
    borderRadius: 10,
    borderWidth: 1,
    height: 200,
    width: "95%",
    backgroundColor: "white",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 0,
    borderBottomWidth: 1,
    alignItems: "center",
  },
});

export default styles;
