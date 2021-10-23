import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D3D3D3",
  },
  schoolImage: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 5,
    maxHeight: 120,
    maxWidth: 350,
    minHeight: 120,
    minWidth: 350,
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
  footer: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default styles;
