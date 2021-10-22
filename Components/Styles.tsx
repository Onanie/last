import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  Headercontainer: {
    flex: 1,
    marginTop: 10,
  },
  HeaderbuttonContainer: {
    margin: 10,
  },
  HeaderbuttonRowContainer: {
    flexDirection: "row",
    margin: 10,
  },
  HeaderbuttonRow: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
  },
  header: {
    flex: 0,
    backgroundColor: "white",
    marginTop: 0, // only for IOS to give StatusBar Space
    padding: 10,
    height: 125,
    borderBottomColor: "green",
    borderBottomWidth: 1,
  },
  headerTop: {
    flexDirection: "row",
  },
  headerLeft: {},
  headerCenter: {
    flex: 1,
    right: 0,
    justifyContent: "center",
    alignContent: "center",
  },
  headerTitle: {
    top: 10,
    fontSize: 21,
    color: "green",
    fontWeight: "bold",
    alignSelf: "center",
  },
  headerSubTitle: {
    top: 15,
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  headerRight: {
    flex: 1,
    right: "0%",
    position: "absolute",
  },
  subHeader: {
    flexDirection: "row",
    paddingTop: 10,
  },
  subHeaderLeft: {
    backgroundColor: "yellow",
    padding: 5,
  },
  subHeaderCenter: {
    justifyContent: "flex-start",
    alignItems: "center",
  },
  subHeaderName: {
    color: "white",
    marginLeft: 10,
  },
  searchBar: {
    marginTop: 15,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 10,
    marginHorizontal: 0,
    flexDirection: "row",
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 18,
  },
  searchIcon: {
    fontSize: 25,
    alignSelf: "center",
    color: "green",
    marginHorizontal: 15,
  },
  productCard: {
    borderColor: "gray",
    borderRadius: 10,
    borderWidth: 1,
    height: 250,
    width: "100%",
    backgroundColor: "white",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 0,
    borderBottomWidth: 0,
    borderBottomStartRadius: 0,
    borderBottomEndRadius: 0,
  },
  productImage: {
    height: 170,
    width: "95%",
    margin: 5,
    resizeMode: "cover",
  },
  productContainer: {
    top: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  centerText: {
    bottom: "40%",
    fontSize: 21,
    color: "green",
    fontWeight: "bold",
    alignSelf: "center",
  },
  backIcon: {
    color: "green",
    fontSize: 25,
    margin: 10,
    top: 10,
  },
  detailsBar: {
    height: "10%",
    backgroundColor: "white",
    borderBottomColor: "green",
    borderBottomWidth: 1,
  },
  productRatingContainer: {
    borderColor: "gray",
    borderTopColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    height: 40,
    width: "100%",
    flexDirection: "row",

    borderTopEndRadius: 0,
    borderTopStartRadius: 0,
  },
  menuMContainer: {
    flex: 1,
    backgroundColor: "rgb(7,27,52)",
  },
  headerContainer: {
    flex: 0.9,
    justifyContent: "center",
  },
  menuContainer: {
    flex: 3,
    justifyContent: "center",
  },
  headerText: {
    fontSize: 50,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  menuText: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    marginLeft: 20,
  },
  footerContainer: {
    flex: 1,
    justifyContent: "center",
    height: 30,
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
  },
  footerText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  userImage: {
    margin: 15,
    width: 130,
    height: 130,
    borderRadius: 200 / 2,
  },
  uploadedImage: {},
});
export default Styles;
