import { StyleSheet } from "react-native";

export default StyleSheet.create({
  outerWrapper: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "col",
    minHeight: 100,
    paddingLeft: 5,
    marginBottom: 5,
  },
  label: {
    fontSize: 11,
    paddingRight: 2,
    color: "#808080",
  },
  img: {
    width: 50,
    height: 40,
    backgroundColor: "transparent",
  },
  tempFont: { fontSize: 12, paddingRight: 10 },
  tempLabel: { justifyContent: "flex-end", alignItems: "center" },
});
