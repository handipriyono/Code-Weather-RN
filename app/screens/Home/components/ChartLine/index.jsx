import { LineChart } from "react-native-gifted-charts";
import { View, Text, Dimensions } from "react-native";

const App = () => {
  const lineData = [
    {
      value: 0,
      labelComponent: () => <Text style={{ fontSize: 10 }}>15min/n sss</Text>,
    },
    { value: 0.1 },
    { value: 0.2 },
    {
      value: 0.3,
      labelComponent: () => <Text style={{ fontSize: 10 }}>30min</Text>,
    },
    { value: 0.2 },
    { value: 0.4 },
    {
      value: 0.5,
      labelComponent: () => <Text style={{ fontSize: 10 }}>45min</Text>,
    },
    { value: 1 },
  ];

  return (
    <View>
      <View
        style={{
          marginVertical: 1,
          paddingVertical: 5,
          backgroundColor: "#fff",
        }}
      >
        <LineChart
          noOfSections={2}
          isAnimated
          yAxisTextStyle={{ color: "gray", fontSize: 9 }}
          yAxisLabelSuffix=" mm/h"
          xAxisColor="lightgray"
          areaChart
          curved
          height={80}
          show
          yAxisLabelWidth={24}
          yAxisTextNumberOfLines={2}
          initialSpacing={3}
          data={lineData}
          yAxisThickness={0}
          showFractionalValues
          hideDataPoints
          startFillColor="#a2dad2"
          startOpacity={1}
          endFillColor="#a2dad2"
          endOpacity={1}
        />
      </View>
    </View>
  );
};
export default App;
