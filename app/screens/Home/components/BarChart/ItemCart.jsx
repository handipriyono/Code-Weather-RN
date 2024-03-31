import { BarChart } from "react-native-gifted-charts";
import { View, Text } from "react-native";
import Styles from "./style";

const ItemChart = () => {
  return (
    <>
      <View style={Styles.itemChartWrapper}>
        <View style={Styles.barchartWrapper}>
          <BarChart
            showLine
            hideDataPoints
            showVerticalLines
            showFractionalValues
            yAxisThickness={0}
            yAxisTextNumberOfLines={2}
            yAxisLabelSuffix="mm"
            yAxisTextStyle={{ color: "gray", fontSize: 10 }}
            noOfSections={1}
            xAxisThickness={1}
            lineConfig={{
              color: "#F29C6E",
              thickness: 3,
              curved: true,
              hideDataPoints: true,
            }}
            data={[
              { value: 1, label: "label", frontColor: "#a2dad2" },
              { value: 4, label: "label", frontColor: "#a2dad2" },
            ]}
          />
        </View>
      </View>
    </>
  );
};

export default ItemChart;
