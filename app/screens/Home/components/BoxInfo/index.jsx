import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Styles from "./style";

let compassSector = [
  "N",
  "NNE",
  "NE",
  "ENE",
  "E",
  "ESE",
  "SE",
  "SSE",
  "S",
  "SSW",
  "SW",
  "WSW",
  "W",
  "WNW",
  "NW",
  "NNW",
  "N",
];

const BoxInfo = ({ data }) => {
  const symbolDegree = compassSector?.[(data?.wind_deg / 22.5)?.toFixed(0)];
  return (
    <>
      <View style={Styles.boxWrapper}>
        <View style={Styles.innerWrapper}>
          <View style={{ flexDirection: "row" }}>
            <Text style={Styles.text}>
              Wind: {data?.wind_speed?.toFixed?.(1)}m/s {symbolDegree}
            </Text>
            <FontAwesome name="location-arrow" size={16} color="black" />
          </View>
          <Text style={Styles.text}>Humidity: {data?.humidity}%</Text>
          <Text style={Styles.text}>UV index: {data?.uvi?.toFixed?.(1)}</Text>
        </View>
        <View style={Styles.bottomWrapper}>
          <Text style={Styles.text}>Pressure: {data?.pressure} hPa</Text>
          <Text style={Styles.text}>
            Visibility: {(data?.visibility / 1000)?.toFixed(1)}km
          </Text>
          <Text style={Styles.text}>
            Dew point: {Math?.round(data?.dew_point)}°C
          </Text>
        </View>
      </View>
    </>
  );
};

export default BoxInfo;
