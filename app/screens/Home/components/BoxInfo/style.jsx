import { StyleSheet } from "react-native";

export default StyleSheet.create({
  boxWrapper: {
    paddingVertical: 10,
    paddingHorizontal: 8,
    marginTop: 10,
    backgroundColor: "#f2f2f2",
    borderRadius: 9,
    marginHorizontal: 10,
    minHeight: 65,
  },
  innerWrapper: {
    padding: 5,
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  text: {
    fontSize: 11,
    fontWeight: "700",
    color: "#000",
  },
  bottomWrapper: {
    marginTop: 2,
    padding: 5,
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
