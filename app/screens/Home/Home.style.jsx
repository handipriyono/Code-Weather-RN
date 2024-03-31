import { StyleSheet } from "react-native";

export default StyleSheet.create({
  safeAreaView: { flex: 1, backgroundColor: "#fff" },
  outer: {
    flex: 1,
    paddingTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  imgWeather: {
    flex: 1,
    width: 40,
    height: 40,
    backgroundColor: "transparent",
  },
  textTitle: { fontSize: 14, color: "#000" },
  textSubtitle: { fontSize: 11, color: "#808080" },
  tempWrapper: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  titleTemp: { fontSize: 60, color: "#000" },
  participant: { fontSize: 14, marginTop: 20, fontWeight: "bold" },
});
