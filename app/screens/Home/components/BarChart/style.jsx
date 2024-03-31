import { StyleSheet } from "react-native";

export default StyleSheet.create({
  barWrapper: {
    flex: 1,
    alignContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    paddingBottom: 10,
    paddingHorizontal: 15,
  },
  degree: {
    flexDirection: "row",
    gap: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  pagerview: {
    flex: 1,
    height: 300,
    backgroundColor: "#eee",
    marginHorizontal: 10,
  },
  itemListWrapper: {
    paddingHorizontal: 5,
    flexDirection: "row",
    minHeight: 30,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
    alignContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    justifyContent: "space-between",
  },
  itemText: { fontSize: 13, color: "#252525" },
  infoListWrap: { paddingHorizontal: 15, marginTop: 10, marginBottom: 20 },
  itemChartWrapper: {
    padding: 5,
    flexDirection: "column",
    borderRadius: 10,
    backgroundColor: "#eee",
  },
  barchartWrapper: { padding: 20, alignItems: "center" },
});
