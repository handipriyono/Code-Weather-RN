import { Text, View, Image as Img } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { Feather } from "@expo/vector-icons";
import dayjs from "dayjs";
import WeatherImg from "../../../../commons/components/images";
import Styles from "./style";
import "dayjs/locale/id";

const TimeTemperature = ({ data, current }) => {
  const convertUnix = (time) => {
    return dayjs.unix(time);
  };
  const timeLabel = (time) => {
    return dayjs(convertUnix(time))?.format("HH:mm");
  };

  const tempLabel = (it) => {
    return `${Math.round(it?.temp)} °C`;
  };

  const mapArray = () => {
    let temp = [];
    data?.map((it) => {
      const sunsetHour = Number(convertUnix(current?.sunset)?.format("HH"));
      const sunriseHour = Number(convertUnix(current?.sunrise)?.format("HH"));
      const currentHour = Number(convertUnix(it?.dt)?.format("HH"));
      temp?.push({
        ...it,
        showDate: currentHour == 0,
        labelDate: convertUnix(it?.dt).format("MMM DD"),
        showBorder: currentHour == 23,
        tempLabel: tempLabel(it),
      });

      if (sunriseHour === currentHour) {
        temp.push({
          ...current,
          isSunrise: true,
          dt: current?.sunrise,
          tempLabel: "Sunrise",
        });
      }

      if (sunsetHour === currentHour) {
        temp.push({
          ...current,
          dt: current?.sunset,
          isSunset: true,
          tempLabel: "Sunset",
        });
      }

      return {
        ...it,
        tempLabel: tempLabel(it),
      };
    });
    return temp;
  };

  const cekLabel = ({ item }) => {
    if (item?.showDate) {
      return item?.labelDate;
    }
    return timeLabel(item?.dt);
  };

  return (
    <FlashList
      data={mapArray()}
      estimatedItemSize={70}
      contentContainerStyle={{
        paddingBottom: 50,
        padding: 1,
      }}
      horizontal
      showsHorizontalScrollIndicator
      renderItem={({ item, index }) => (
        <View
          key={item?.dt}
          style={{
            ...Styles.outerWrapper,
            ...(item?.showBorder && {
              borderRightWidth: 1,
              borderRightColor: "#eee",
            }),
          }}
        >
          <View>
            <Text style={Styles.label}>{cekLabel({ item })}</Text>
          </View>

          <View>
            {!item?.isSunrise && !item?.isSunset && (
              <Img
                style={Styles.img}
                source={WeatherImg?.[item?.weather?.[0]?.icon]}
              />
            )}
            {item?.isSunrise && (
              <Feather
                name="sunrise"
                size={30}
                color="black"
                style={{ paddingVertical: 4, paddingTop: 6 }}
              />
            )}
            {item?.isSunset && (
              <Feather
                name="sunset"
                size={30}
                color="black"
                style={{ paddingVertical: 4, paddingTop: 6 }}
              />
            )}
          </View>
          <View style={Styles.tempLabel}>
            <Text style={Styles.tempFont}>{item?.tempLabel}</Text>
          </View>
        </View>
      )}
    />
  );
};

export default TimeTemperature;
