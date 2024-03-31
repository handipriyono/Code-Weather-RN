import { StyleSheet } from "react-native";

export default StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    paddingRight: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
    // margin: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  center: { justifyContent: "center", alignContent: "center" },
  innerWrapper: {
    flexDirection: "row",
    gap: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
