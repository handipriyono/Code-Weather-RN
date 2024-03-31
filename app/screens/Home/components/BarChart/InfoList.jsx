import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import dayjs from "dayjs";
import Styles from "./style";

const ItemList = ({ title, value, customValue }) => {
  return (
    <>
      <View style={Styles.itemListWrapper}>
        <Text style={Styles.itemText}>{title}</Text>
        {value && <Text style={Styles.itemText}>{value}</Text>}
        {customValue && customValue}
      </View>
    </>
  );
};

const InfoList = ({ data }) => {
  const convertUnix = (time) => {
    return dayjs.unix(time);
  };
  const timeLabel = (time) => {
    return dayjs(convertUnix(time))?.format("HH:mm");
  };

  return (
    <View style={Styles.infoListWrap}>
      <ItemList title="Precipitation" value={data?.rain + " %"} />
      <ItemList
        title="Probability of Precipitation"
        value={data?.pop * 100 + " %"}
      />
      <ItemList
        title="Wind"
        customValue={
          <View style={{ flexDirection: "row", gap: 3 }}>
            <Text>{data?.wind_speed?.toFixed(1)}m/s N</Text>
            <FontAwesome name="location-arrow" size={15} color="black" />
          </View>
        }
      />
      <ItemList title="Pressure" value={`${data?.pressure}hPa`} />
      <ItemList title="Humidity" value={`${data?.humidity}%`} />
      <ItemList title="UV Index" value={data?.uvi?.toFixed(1)} />
      <ItemList title="Sunrise" value={timeLabel(data?.sunrise)} />
      <ItemList title="Sunset" value={timeLabel(data?.sunset)} />
    </View>
  );
};

export default InfoList;
